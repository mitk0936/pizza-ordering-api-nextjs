import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CompleteOrderCommand } from './commands/complete-order.command';
import { PlaceOrderCommand } from './commands/place-order.command';
import { SetOrderReadyForDeliveryCommand } from './commands/set-ready-for-delivery.command';
import { TakeOrderForDeliveryCommand } from './commands/take-order-for-delivery.command';
import { TakeOrderInKitchenCommand } from './commands/take-order-in-kitchen.command';
import { ValidateCartCommand } from './commands/validate-cart.command';
import { Order } from './entities/order.entity';
import { ValidateCartResponseDto } from './handlers/validate-cart/dto/validate-cart-response.dto';
import { GetOrderQuery } from './queries/get-order.query';
import {
  GetOrdersByStatusQuery,
  StatusParamDto,
} from './queries/get-orders-by-status.query';

@Controller('order')
export class OrderController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('validate-cart')
  async validateCart(
    @Body() validateCartCommand: ValidateCartCommand,
  ): Promise<ValidateCartResponseDto> {
    return this.commandBus.execute(
      new ValidateCartCommand(validateCartCommand),
    );
  }

  @Post()
  async placeOrder(@Body() placeOrderDto: PlaceOrderCommand): Promise<Order> {
    return this.commandBus.execute(new PlaceOrderCommand(placeOrderDto));
  }

  @Get(':id')
  async getOrderStatus(@Param('id') orderId: string) {
    return this.queryBus.execute(new GetOrderQuery(orderId));
  }

  @Get('by-status/:status')
  async getOrdersByStatus(@Param() params: StatusParamDto) {
    return this.queryBus.execute(new GetOrdersByStatusQuery(params.status));
  }

  @Patch(':id/kitchen-process')
  async takeOrderInKitchen(@Param('id') orderId: string) {
    return this.commandBus.execute(new TakeOrderInKitchenCommand(orderId));
  }

  @Patch(':id/ready-for-delivery')
  async setOrderReadyForDelivery(@Param('id') orderId: string) {
    return this.commandBus.execute(
      new SetOrderReadyForDeliveryCommand(orderId),
    );
  }

  @Patch(':id/start-delivery')
  async takeOrderForDelivery(@Param('id') orderId: string) {
    return this.commandBus.execute(new TakeOrderForDeliveryCommand(orderId));
  }

  @Patch(':id/complete')
  async completeOrder(@Param('id') orderId: string) {
    return this.commandBus.execute(new CompleteOrderCommand(orderId));
  }
}
