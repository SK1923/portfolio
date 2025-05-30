// src/context/ListContext.ts
import { createContext } from 'react';

export type CountryItem = {
  id: string;
  name: string;
  recommend: number;
  text: string;
};

export type ListContextType = CountryItem[];

export const list = createContext<ListContextType>([]);
export const reccomendPoint = createContext<number>(0);
