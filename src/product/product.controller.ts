import { Controller, Get } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('all')
  async getAll(): Promise<ProductDto[]> {
    return this.productService.getAllProducts();
  }
}
