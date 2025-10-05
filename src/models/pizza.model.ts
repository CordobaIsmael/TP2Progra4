import { PizzaSize } from './enum/pizzaSize.enum';

export interface Pizza {
  id: number;
  nombre: string;
  ingredientes: string[];
  precioBase: number;
  tamanio: PizzaSize;
}
