export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}

export interface Hair {
  color: string;
  type: string;
}

export interface Bank {
  cardExpire: string; // формат MM/YY
  cardNumber: string;
  cardType: string;
  currency: string; // ISO код валюты, например "BRL"
  iban: string;
}

export interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

export interface Crypto {
  coin: string; // например, "Bitcoin"
  wallet: string; // адрес кошелька
  network: string; // например, "Ethereum (ERC20)"
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: 'male' | 'female' | 'other' | string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string; // ISO/дата в строке, напр. "2002-4-20"
  image: string; // URL
  bloodGroup: string; // напр. "B+"
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: 'admin' | 'moderator' | 'user' | string;
}

export interface UsersResponse {
  users: User[];
}
