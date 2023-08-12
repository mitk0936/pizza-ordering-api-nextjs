import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { ValidateCartHandler } from './handlers/validate-cart/validate-cart.handler';
import { PlaceOrderHandler } from './handlers/place-order/place-order.handler';
import { OrderStatusUpdateHandler } from './handlers/order-status-update/order-status-update.handler';
import { OrderService } from './services/order.service';
import { OrderController } from './order.controller';
import { ProductModule } from 'src/product/product.module';
import { GetOrderHandler } from './handlers/get-order/get-order.handler';
import { GetOrdersByStatus } from './handlers/get-orders-by-status/get-orders-by-status.handler';
import { TakeOrderInKitchenHandler } from './handlers/take-order-in-kitchen/take-order-in-kitchen.handler';
import { TakeOrderForDeliveryCommandHandler } from './handlers/take-order-for-delivery/take-order-for-delivery.hanlder';
import { SetOrderReadyForDeliveryCommandHandler } from './handlers/set-order-ready-for-delivery/set-order-ready-for-delivery.handler';
import { CompleteOrderCommandHandler } from './handlers/complete-order/complete-order.handler';
import { OrderStoreService } from './services/order-store.service';
import { OrderStateMachineService } from './services/order-state-transitions.service';

@Module({
  imports: [CqrsModule, ProductModule],
  controllers: [OrderController],
  providers: [
    OrderService,
    OrderStoreService,
    OrderStateMachineService,
    // handlers
    ValidateCartHandler,
    PlaceOrderHandler,
    GetOrderHandler,
    GetOrdersByStatus,
    OrderStatusUpdateHandler,
    TakeOrderInKitchenHandler,
    SetOrderReadyForDeliveryCommandHandler,
    TakeOrderForDeliveryCommandHandler,
    CompleteOrderCommandHandler,
  ],
  exports: [OrderService, OrderStoreService],
})
export class OrderModule {}
