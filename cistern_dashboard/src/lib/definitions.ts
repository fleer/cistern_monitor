export type Measurement = {
  id: number;
  measurement: number;
  liters: number;
  timestamp: Date;
};

export type DailyMeasurement = {
  liters: number;
  date: Date;
};
