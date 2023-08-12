import { Injectable } from '@nestjs/common';
import { ProductDto } from '../dto/product.dto';
import { PRODUCTS } from '../mock/product.mock';

@Injectable()
export class ProductService {
  getAllProducts(): ProductDto[] {
    return PRODUCTS;
  }

  getAvailableProductsByIds(ids: string[]): ProductDto[] {
    const availableProductIds = ids.reduce((all: ProductDto[], id) => {
      const product = PRODUCTS.find((product) => id === product.id);

      return product ? [...all, product] : all;
    }, []);

    return availableProductIds;
  }
}
