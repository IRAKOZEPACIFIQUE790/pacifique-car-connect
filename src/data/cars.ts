export interface Car {
  id: number;
  name: string;
  brand: string;
  type: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  engine: string;
  image: string;
  featured?: boolean;
  description?: string;
}

export const cars: Car[] = [
  {
    id: 1,
    name: "Model S Plaid",
    brand: "Tesla",
    type: "Electric",
    year: 2024,
    price: 129990,
    mileage: 1200,
    fuel: "Electric",
    transmission: "Automatic",
    engine: "Tri-Motor",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    description: "The fastest production sedan ever made with incredible acceleration and range."
  },
  {
    id: 2,
    name: "911 Turbo S",
    brand: "Porsche",
    type: "Sports",
    year: 2024,
    price: 207000,
    mileage: 500,
    fuel: "Gasoline",
    transmission: "PDK",
    engine: "3.8L Twin-Turbo",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    description: "The ultimate expression of Porsche engineering and performance."
  },
  {
    id: 3,
    name: "S-Class",
    brand: "Mercedes-Benz",
    type: "Luxury",
    year: 2024,
    price: 109800,
    mileage: 800,
    fuel: "Gasoline",
    transmission: "9G-TRONIC",
    engine: "3.0L Turbo",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    description: "The epitome of luxury and comfort with cutting-edge technology."
  },
  {
    id: 4,
    name: "M3 Competition",
    brand: "BMW",
    type: "Sports",
    year: 2023,
    price: 73900,
    mileage: 2500,
    fuel: "Gasoline",
    transmission: "8-Speed Auto",
    engine: "3.0L Twin-Turbo",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Pure driving pleasure with track-ready performance."
  },
  {
    id: 5,
    name: "R8 V10",
    brand: "Audi",
    type: "Sports",
    year: 2023,
    price: 148500,
    mileage: 1000,
    fuel: "Gasoline",
    transmission: "7-Speed DCT",
    engine: "5.2L V10",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Naturally aspirated V10 excellence with quattro all-wheel drive."
  },
  {
    id: 6,
    name: "F-150 Lightning",
    brand: "Ford",
    type: "Electric",
    year: 2024,
    price: 59974,
    mileage: 1800,
    fuel: "Electric",
    transmission: "Automatic",
    engine: "Dual Motor",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Electric truck that's built Ford tough with impressive capability."
  },
  {
    id: 7,
    name: "Escalade",
    brand: "Cadillac",
    type: "SUV",
    year: 2024,
    price: 81895,
    mileage: 600,
    fuel: "Gasoline",
    transmission: "10-Speed Auto",
    engine: "6.2L V8",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Bold and sophisticated luxury SUV with commanding presence."
  },
  {
    id: 8,
    name: "Wrangler Rubicon",
    brand: "Jeep",
    type: "SUV",
    year: 2023,
    price: 47895,
    mileage: 3200,
    fuel: "Gasoline",
    transmission: "8-Speed Auto",
    engine: "3.6L V6",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "The most capable SUV ever with legendary 4x4 capability."
  },
  {
    id: 9,
    name: "LC 500",
    brand: "Lexus",
    type: "Luxury",
    year: 2023,
    price: 97350,
    mileage: 1500,
    fuel: "Gasoline",
    transmission: "10-Speed Auto",
    engine: "5.0L V8",
    image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Stunning grand tourer with exceptional craftsmanship and performance."
  },
  {
    id: 10,
    name: "Civic Type R",
    brand: "Honda",
    type: "Sports",
    year: 2023,
    price: 43895,
    mileage: 2100,
    fuel: "Gasoline",
    transmission: "6-Speed Manual",
    engine: "2.0L Turbo",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Pure, unadulterated driving excitement with track-tuned performance."
  },
  {
    id: 11,
    name: "Model Y Performance",
    brand: "Tesla",
    type: "Electric",
    year: 2024,
    price: 56390,
    mileage: 900,
    fuel: "Electric",
    transmission: "Automatic",
    engine: "Dual Motor",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "The versatile electric SUV with sports car performance."
  },
  {
    id: 12,
    name: "XC90 Recharge",
    brand: "Volvo",
    type: "SUV",
    year: 2024,
    price: 75500,
    mileage: 700,
    fuel: "Hybrid",
    transmission: "8-Speed Auto",
    engine: "2.0L Hybrid",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Scandinavian luxury with sustainable power and safety innovation."
  }
];