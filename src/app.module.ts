import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PaymentsModule } from './payments/payments.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [PaymentsModule, ProductModule, OrderModule],
  controllers: [AppController],
})
export class AppModule {}
