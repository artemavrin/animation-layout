export interface IPlanetPhysicalCharacteristics {
  diameter: number; // Diameter in kilometers
  averageTemperature: number; // Average temperature in Celsius
  gravity: number; // Surface gravity in m/s²
  orbitalPeriod: number; // Orbital period in Earth days
}

export interface IPlanet {
  name: string; // Name of the planet
  description: string; // Detailed description of the planet
  physicalCharacteristics: IPlanetPhysicalCharacteristics;
  image: string; // URL or path to planet image
  distanceFromCenter: number; // Distance from the Sun in million kilometers
}
