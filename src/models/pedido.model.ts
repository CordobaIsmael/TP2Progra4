import { Pizza } from './pizza.model';

export interface Pedido {
  id: number;
  clienteId: number;
  pizzas: Pizza[];
  total: number;
  fecha: Date;
  estado: 'pendiente' | 'en preparación' | 'entregado';
}
