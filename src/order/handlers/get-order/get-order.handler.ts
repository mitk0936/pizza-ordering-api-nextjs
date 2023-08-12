import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetOrderQuery } from 'src/order/queries/get-order.query';
import { OrderStoreService } from 'src/order/services/order-store.service';

@QueryHandler(GetOrderQuery)
export class GetOrderHandler implements IQueryHandler<GetOrderQuery> {
  constructor(private readonly orderStoreService: OrderStoreService) {}

  async execute(query: GetOrderQuery) {
    return this.orderStoreService.findOne(query.orderId);
  }
}
