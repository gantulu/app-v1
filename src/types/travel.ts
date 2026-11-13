export interface TravelPackage {
  id: string;
  name: string;
  country: string;
  category: string;
  rating: number;
  reviewsCount: number;
  price: number;
  duration: string;
  membersCount: number;
  nextDeparture: string;
  dates?: string;
  flightInfo: string;
  hotelName: string;
  includes: string[];
  image: string;
  shortDesc: string;
  fullDesc: string;
  avatars: string[];
}
