import { Product } from "./product";


export interface Shop {
    shopId: number;
    name: string;
    description: string;
    image:string;
    productList?:[Product];
  }