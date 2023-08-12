import { GeolocationDto } from 'src/common/dto/geolocation.dto';
import { Currency } from 'src/payments/enums/currency.enum';
import { ProductDto } from 'src/product/dto/product.dto';
import { v4 as uuidv4 } from 'uuid';

export class Order {
  orderId: string;
  products: ProductDto[];
  clientPhoneNumber: string;
  deliveryAddress: GeolocationDto;
  currency: Currency;
  totalPrice: number;
  status: OrderStatus;
  timestamp: Date;
  statusHistory: OrderStatus[];

  constructor(data: Partial<Order>) {
    Object.assign(this, data);

    this.orderId = this.orderId || uuidv4();
    this.timestamp = this.timestamp || new Date();
    this.statusHistory = this.statusHistory || [];

    if (!this.status) {
      this.statusHistory.push(OrderStatus.ProcessingPayment);
      this.status = OrderStatus.ProcessingPayment;
    }
  }
}

export enum OrderStatus {
  ProcessingPayment = 'ProcessingPayment',
  Paid = 'Paid',
  FailedPayment = 'FailedPayment',
  Cooking = 'Cooking',
  ReadyForDelivery = 'ReadyForDelivery',
  Delivering = 'Delivering',
  Completed = 'Completed',
}
