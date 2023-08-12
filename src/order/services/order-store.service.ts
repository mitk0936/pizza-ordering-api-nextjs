import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from '../entities/order.entity';

@Injectable()
export class OrderStoreService {
  private orders: Order[] = [];

  findAll(): Order[] {
    return this.orders;
  }

  findOne(orderId: string): Order {
    const order = this.orders.find((order) => order.orderId === orderId);
    if (!order) {
      throw new NotFoundException(`Order with ID ${orderId} not found`);
    }
    return order;
  }

  save(order: Order): Order {
    this.orders.push(order);
    return order;
  }

  update(orderId: string, updatedOrder: Partial<Order>): Order {
    const orderIndex = this.orders.findIndex(
      (order) => order.orderId === orderId,
    );
    if (orderIndex === -1) {
      throw new NotFoundException(`Order with ID ${orderId} not found`);
    }
    this.orders[orderIndex] = { ...this.orders[orderIndex], ...updatedOrder };
    return this.orders[orderIndex];
  }
}
