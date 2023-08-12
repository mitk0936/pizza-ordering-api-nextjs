import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetOrderQuery } from 'src/order/queries/get-order.query';
import { OrderService } from 'src/order/services/order.service';

@QueryHandler(GetOrderQuery)
export class GetOrderHandler implements IQueryHandler<GetOrderQuery> {
  constructor(private readonly orderService: OrderService) {}

  async execute(query: GetOrderQuery) {
    return this.orderService.getOrderById(query.orderId);
  }
}
