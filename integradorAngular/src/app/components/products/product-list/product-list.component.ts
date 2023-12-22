import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productsData: any[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    // this.productsData = this.productService.getHardcodedProducts();
  }
}
