import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { OrderService } from 'src/order/services/order.service';
import { GetOrdersByStatusQuery } from 'src/order/queries/get-orders-by-status.query';

@QueryHandler(GetOrdersByStatusQuery)
export class GetOrdersByStatus
  implements IQueryHandler<GetOrdersByStatusQuery>
{
  constructor(private readonly orderService: OrderService) {}

  async execute(query: GetOrdersByStatusQuery) {
    console.log('EXEC', { query });
    return this.orderService.findOrdersByStatus(query.status);
  }
}
