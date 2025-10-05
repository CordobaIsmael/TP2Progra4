import { Request, Response } from 'express';
import { Pizza } from '../models/pizza.model';
import { PizzaSize } from '../models/enum/pizzaSize.enum';

// Datos simulados (en lugar de una base de datos real)
let pizzas: Pizza[] = [
  { id: 1, nombre: 'Margarita', ingredientes: ['tomate', 'queso'], precioBase: 8, tamanio: PizzaSize.MEDIUM },
  { id: 2, nombre: 'Pepperoni', ingredientes: ['tomate', 'queso', 'pepperoni'], precioBase: 10, tamanio: PizzaSize.LARGE },
];

export class PizzaController {
  
  // ✅ Obtener todas las pizzas
  static getAll(req: Request, res: Response) {
    return res.status(200).json(pizzas);
  }

  // ✅ Obtener una pizza por ID
  static getById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const pizza = pizzas.find(p => p.id === id);

    if (!pizza) return res.status(404).json({ message: 'Pizza no encontrada' });

    return res.status(200).json(pizza);
  }

  // ✅ Crear nueva pizza
static create(req: Request, res: Response) {
    const { nombre, ingredientes, precioBase, tamanio } = req.body as {
      nombre: string;
      ingredientes: string[];
      precioBase: number;
      tamanio?: string;
    };
    // Validar que el tamaño sea válido
   if (typeof tamanio !== 'string') {
      return res.status(400).json({ message: 'Tamaño inválido' });
    }

    const nuevaPizza: Pizza = {
      id: pizzas.length + 1,
      nombre,
      ingredientes,
      precioBase,
      tamanio: PizzaSize[tamanio as keyof typeof PizzaSize] || PizzaSize.MEDIUM,
    };

    pizzas.push(nuevaPizza);
    return res.status(201).json(nuevaPizza);
  }

  // ✅ Actualizar una pizza
  static update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const { nombre, ingredientes, precioBase, tamanio } = req.body as {
      nombre?: string;
      ingredientes?: string[];
      precioBase?: number;
      tamanio?: string;
    };

    const index = pizzas.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({ message: 'Pizza no encontrada' });

    // If tamanio was provided, validate it
    if (tamanio !== undefined) {
      if (typeof tamanio !== 'string' || !(Object.values(PizzaSize) as unknown[]).includes(tamanio)) {
        return res.status(400).json({ message: 'Tamaño inválido' });
      }
    }

  // ✅ Eliminar una pizza
  static delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    pizzas = pizzas.filter(p => p.id !== id);
    return res.status(204).send();
  }
}


