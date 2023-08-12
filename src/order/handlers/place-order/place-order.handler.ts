import { BadRequestException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { PlaceOrderCommand } from 'src/order/commands/place-order.command';
import { Order } from 'src/order/entities/order.entity';
import { OrderService } from 'src/order/services/order.service';
import { ProductDto } from 'src/product/dto/product.dto';
import { ProductService } from 'src/product/services/product.service';

@CommandHandler(PlaceOrderCommand)
export class PlaceOrderHandler implements ICommandHandler<PlaceOrderCommand> {
  constructor(
    private readonly orderService: OrderService,
    private readonly productService: ProductService,
  ) {}

  async execute(command: PlaceOrderCommand): Promise<Order> {
    const products: ProductDto[] =
      this.productService.getAvailableProductsByIds(command.productIds);
    const totalPrice = this.orderService.calculateOrderPrice(products);

    if (products.length > 0) {
      const order: Order = new Order({
        products,
        clientPhoneNumber: command.clientPhoneNumber,
        deliveryAddress: command.deliveryAddress,
        totalPrice,
      });

      return order;
    }

    throw new BadRequestException('Provided products are not available');
  }
}
