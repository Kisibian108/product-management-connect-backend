import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  private idDelete: number;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAll();
  }

  // @ts-ignore
  getAll(): Product[] {
    this.products = this.productService.getAll();
  }

  showDelete(product: Product) {
    this.idDelete = product.id || 0;
  }

  findById(id: number) {
    return this.products.find(product => product.id === id);
  }
  delete(idDelete: number) {
    console.log(idDelete);
    this.productService.deleteProduct(idDelete);
    this.ngOnInit();
  }

}
