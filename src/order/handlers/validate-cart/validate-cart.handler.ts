import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ValidateCartCommand } from '../../commands/validate-cart.command';
import { ProductService } from 'src/product/services/product.service';
import { ValidateCartResponseDto } from './dto/validate-cart-response.dto';
import { ProductDto } from 'src/product/dto/product.dto';
import { OrderService } from 'src/order/services/order.service';

@CommandHandler(ValidateCartCommand)
export class ValidateCartHandler
  implements ICommandHandler<ValidateCartCommand>
{
  constructor(
    private readonly productService: ProductService,
    private readonly orderService: OrderService,
  ) {}

  async execute(
    command: ValidateCartCommand,
  ): Promise<ValidateCartResponseDto> {
    const products = await this.productService.getAvailableProductsByIds(
      command.productIds,
    );

    const validProductsIds: ProductDto['id'][] = products.map(({ id }) => id);

    const totalPrice = this.orderService.calculateOrderPrice(products);

    return {
      productIds: validProductsIds,
      totalPrice,
      currency: command.currency,
    };
  }
}
