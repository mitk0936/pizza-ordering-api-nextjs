import { Currency } from 'src/payments/enums/currency.enum';

export const PRODUCTS = [
  {
    id: '1',
    name: 'Margherita',
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Basil'],
    notes: 'A classic choice',
    price: 9.99,
    currency: Currency.EUR,
  },
  {
    id: '2',
    name: 'Pepperoni',
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Pepperoni'],
    price: 11.99,
    currency: Currency.EUR,
  },
  // ... Add more products as needed
];
