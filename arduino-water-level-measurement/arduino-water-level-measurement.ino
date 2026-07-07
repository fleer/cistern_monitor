#include <ESP8266WiFi.h>
#include <WiFiClient.h>

const char* ssid = "<WLAN-Name>";
const char* password = "<WLAN-Passwort>";

// Replace with the URL of the server you want to send the POST request to
const char* host = "0.0.0.0";
const int httpPort = 8000;

//#define echo D7 // Echo Pin
//#define trigger D6 // Trigger Pin
int trigger = 12;
int echo = 13;

// Maximum expected duration in microseconds (~4m range = ~23000μs)
const unsigned long PULSE_TIMEOUT = 30000;
const int NUM_SAMPLES = 21;
// Minimum valid duration (~2cm = ~116μs)
const unsigned long MIN_DURATION = 100;

// Sort array for median calculation
void sortArray(unsigned long arr[], int n) {
  for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        unsigned long temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

// Take a single ultrasonic measurement
unsigned long takeMeasurement() {
  digitalWrite(trigger, LOW);
  delayMicroseconds(5);
  digitalWrite(trigger, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigger, LOW);
  return pulseIn(echo, HIGH, PULSE_TIMEOUT);
}

// Compute duration using median of valid measurements
int getDuration() {
  unsigned long samples[NUM_SAMPLES];
  int validCount = 0;

  // Collect samples with proper settling time
  for (int i = 0; i < NUM_SAMPLES; i++) {
    unsigned long duration = takeMeasurement();
    Serial.print("Sample ");
    Serial.print(i);
    Serial.print(": ");
    Serial.println(duration);

    // Only store valid measurements
    if (duration >= MIN_DURATION && duration < PULSE_TIMEOUT) {
      samples[validCount++] = duration;
    }

    // Wait for sensor to settle (60ms minimum between measurements)
    delay(100);
  }

  if (validCount == 0) {
    Serial.println("No valid measurements!");
    return 0;
  }

  // Sort and take median to reject outliers
  sortArray(samples, validCount);
  unsigned long median = samples[validCount / 2];

  // Average values within 10% of median for extra stability
  unsigned long sum = 0;
  int count = 0;
  unsigned long lowerBound = median * 9 / 10;
  unsigned long upperBound = median * 11 / 10;

  for (int i = 0; i < validCount; i++) {
    if (samples[i] >= lowerBound && samples[i] <= upperBound) {
      sum += samples[i];
      count++;
    }
  }

  int result = (count > 0) ? (int)(sum / count) : (int)median;
  Serial.print("Valid samples: ");
  Serial.print(validCount);
  Serial.print(", Final duration: ");
  Serial.println(result);

  return result;
}

void setup() {
  Serial.begin(115200);
  delay(10);

  pinMode(trigger, OUTPUT);
  pinMode(echo, INPUT);
  // Define fixed IP
  IPAddress ip(192, 168, 178, 111);
  IPAddress gateway(192, 168, 178, 1);
  IPAddress subnet(255, 255, 255, 0);

  // Connect to WiFi network
  WiFi.config(ip, gateway, subnet);

  WiFi.mode(WIFI_STA);
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");

  // Start the server
  Serial.println("Server started");

  // Print the IP address
  Serial.println("=============================");
  Serial.print("ESP Board MAC Address:  ");
  Serial.println(WiFi.macAddress());
  Serial.println("Local IP:");
  Serial.println(WiFi.localIP());
  Serial.println("Local Gateway:");
  Serial.println(WiFi.gatewayIP());
  Serial.println("Local Subnet:");
  Serial.println(WiFi.subnetMask());
  Serial.println("=============================");
}

void loop() {
  int duration = getDuration();


  // Create a client object to handle the connection
  WiFiClient client;

  // Connect to the server
  if (!client.connect(host, httpPort)) {
    Serial.println("Connection to server failed");
    return;
  }


  // Define the URL and the payload of the POST request
  String url = "/api/v1/measurement";
  String payload = "{\"measurement\":\"" + String(duration) + "\"}";

  // Debugging output
  Serial.print("Sending POST request to ");
  Serial.println(host);

  // Send the POST request
  client.print("POST " + url + " HTTP/1.1\r\n" + "Host: " + host + "\r\n" + "Content-Type: application/json\r\n" + "Content-Length: " + payload.length() + "\r\n" + "Connection: close\r\n\r\n" + payload);

  // Debugging output: display the response from the server
  Serial.println("Response:");
  while (client.available()) {
    String line = client.readStringUntil('\r');
    Serial.print(line);
  }
  Serial.println();

  // Close the connection
  client.stop();

  // Wait for 5 seconds before sending another POST request
  delay(900000);
}
