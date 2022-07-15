import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/services/product.service';
import { ShopService} from 'src/app/services/shop.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products?: Product[]
  currentProduct: Product = {};
  currentIndex = -1;
  name = '';
  shopId: any
  constructor(private productsService: ProductsService, private shopService: ShopService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productsService.getAllProducts(id).subscribe({
      next: data => {
        this.products = data
        console.log(data)
      },
      error: e => console.error(e)
    })
  }
}
