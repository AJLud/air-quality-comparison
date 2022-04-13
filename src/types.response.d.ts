declare interface CityResponse {
  country: string;
  city: string;
  count: number;
  locations: number;
  firstUpdated: string;
  lastUpdated: string;
  parameters: string[];
}

declare interface Measurement {
  parameter: string;
  value: number;
  lastUpdated: string;
  unit: string;
}
declare interface LocationResponse {
  location: string;
  city: string;
  country: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  measurements: Measurement[];
}
