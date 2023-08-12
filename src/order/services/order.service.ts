import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/product/dto/product.dto';
import { ProductService } from 'src/product/services/product.service';
import { Order, OrderStatus } from '../entities/order.entity';

@Injectable()
export class OrderService {
  constructor(private readonly productService: ProductService) {}

  calculateOrderPrice(products: ProductDto[]): number {
    const totalPrice = products.reduce(
      (total, product) => total + product.price,
      0,
    );

    return totalPrice;
  }

  getOrderById(orderId: string): Order {
    // TODO query the db
    // return null;
    return new Order({ orderId });
  }

  findOrdersByStatus(status: OrderStatus): Order[] {
    console.log(status);
    return [];
  }
}
