import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOrdersByStatusQuery } from 'src/order/queries/get-orders-by-status.query';
import { OrderStoreService } from 'src/order/services/order-store.service';

@QueryHandler(GetOrdersByStatusQuery)
export class GetOrdersByStatus
  implements IQueryHandler<GetOrdersByStatusQuery>
{
  constructor(private readonly orderStoreService: OrderStoreService) {}

  async execute(query: GetOrdersByStatusQuery) {
    return this.orderStoreService.findByStatus(query.status);
  }
}
