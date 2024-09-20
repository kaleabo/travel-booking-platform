export interface Flight {
  id: string;
  departure: string;
  destination: string;
  price: number;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  rating: number;
  price: number;
}

export interface Ancillary {
  id: string;
  name: string;
  description: string;
  price: number;
}

const flights: Flight[] = [
  { id: '1', departure: '2023-12-25', destination: 'New York', price: 200 },
  { id: '2', departure: '2024-01-10', destination: 'London', price: 350 },
  { id: '3', departure: '2024-02-15', destination: 'Tokyo', price: 800 },
  { id: '4', departure: '2024-03-01', destination: 'Paris', price: 450 },
  { id: '5', departure: '2024-03-15', destination: 'Berlin', price: 300 },
  { id: '6', departure: '2024-04-10', destination: 'Sydney', price: 900 },
  { id: '7', departure: '2024-05-05', destination: 'Toronto', price: 250 },
  { id: '8', departure: '2024-06-20', destination: 'Dubai', price: 700 },
  { id: '9', departure: '2024-07-15', destination: 'Singapore', price: 600 },
];

const hotels: Hotel[] = [
  { id: '1', name: 'Grand Hotel', location: 'Paris', rating: 4.5, price: 150 },
  { id: '2', name: 'The Ritz', location: 'London', rating: 5, price: 250 },
  { id: '3', name: 'Seaside Resort', location: 'Bali', rating: 4.8, price: 180 },
  { id: '4', name: 'Mountain Lodge', location: 'Aspen', rating: 4.7, price: 300 },
  { id: '5', name: 'City Center Inn', location: 'New York', rating: 4.2, price: 200 },
  { id: '6', name: 'Beachfront Hotel', location: 'Miami', rating: 4.6, price: 220 },
  { id: '7', name: 'Historic Inn', location: 'Savannah', rating: 4.4, price: 160 },
  { id: '8', name: 'Luxury Suites', location: 'Dubai', rating: 5, price: 400 },
  { id: '9', name: 'Countryside Retreat', location: 'Napa Valley', rating: 4.5, price: 250 },
];

const ancillaries: Ancillary[] = [
  { id: '1', name: 'Travel Insurance', description: 'Comprehensive coverage for your trip', price: 50 },
  { id: '2', name: 'Seat Upgrade', description: 'Upgrade to premium seating', price: 75 },
  { id: '3', name: 'Airport Transfer', description: 'Convenient transfer to and from the airport', price: 30 },
  { id: '4', name: 'Extra Baggage', description: 'Add additional baggage allowance', price: 40 },
  { id: '5', name: 'Priority Boarding', description: 'Board the plane first for a hassle-free experience', price: 25 },
  { id: '6', name: 'Lounge Access', description: 'Enjoy the comfort of the airport lounge', price: 60 },
  { id: '7', name: 'In-Flight Wi-Fi', description: 'Stay connected with in-flight internet access', price: 20 },
  { id: '8', name: 'Meal Upgrade', description: 'Enjoy a gourmet meal on your flight', price: 45 },
  { id: '9', name: 'Car Rental', description: 'Convenient car rental service at your destination', price: 70 },
];

export async function getFlights(): Promise<Flight[]> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return flights;
}

export async function getHotels(): Promise<Hotel[]> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return hotels;
}

export async function getAncillaries(): Promise<Ancillary[]> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return ancillaries;
}