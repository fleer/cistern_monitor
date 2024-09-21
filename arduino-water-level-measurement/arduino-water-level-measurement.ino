#include <ESP8266WiFi.h>
#include <WiFiClient.h>

const char* ssid = "WLAN";
const char* password = "000000000";

// Replace with the URL of the server you want to send the POST request to
const char* host = "API_SERVER_URL";
const int httpPort = 80;

//#define echo D7 // Echo Pin
//#define trigger D6 // Trigger Pin
int trigger = 12;
int echo = 13;

//Compute volume displayed on website
int getDuration() {
  // Declare variables
  float duration = 0.0;


  digitalWrite(trigger, LOW);
  delayMicroseconds(2);
  digitalWrite(trigger, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigger, LOW);
  duration = pulseIn(echo, HIGH);

  Serial.println(duration);
  return duration;
}

void setup() {
  Serial.begin(115200);
  delay(10);

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
  // Create a client object to handle the connection
  WiFiClient client;

  // Connect to the server
  if (!client.connect(host, httpPort)) {
    Serial.println("Connection to server failed");
    return;
  }

  int duration = getDuration();
  // Define the URL and the payload of the POST request
  String url = "/measurement";
  String payload = "{\"measurement\":\"" + String(duration) + "\"}";

  // Debugging output
  Serial.print("Sending POST request to ");
  Serial.println(host);

  // Send the POST request
  client.print("POST " + url + " HTTP/1.1\r\n" +
               "Host: " + host + "\r\n" +
               "Content-Type: application/json\r\n" +
               "Content-Length: " + payload.length() + "\r\n" +
               "Connection: close\r\n\r\n" +
               payload);

  // Debugging output: display the response from the server
  Serial.println("Response:");
  while(client.available()){
    String line = client.readStringUntil('\r');
    Serial.print(line);
  }
  Serial.println();

  // Close the connection
  client.stop();

  // Wait for 5 seconds before sending another POST request
  delay(5000);
}
