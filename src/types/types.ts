export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductData {
  products: Product[];
  total: number;
  skip: number;
}

export interface UserData {
    id: number;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
}
