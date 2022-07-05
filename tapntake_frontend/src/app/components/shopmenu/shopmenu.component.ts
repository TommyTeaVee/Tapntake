import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/product.service';
import { Product } from '../../product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './shopmenu.component.html',
  styleUrls: ['./shopmenu.component.css']
})
export class ShopmenuComponent implements OnInit {

  products: Product[] = []
  constructor( private productService: ProductsService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.getAll()
  }
  addToCart(product: Product) {

    this.cartService.addToCart(product);
    
  }

  getAll(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.getAllProducts(id).subscribe({
      next: data => {
        this.products = data
        console.log(data)
      },
      error: e => console.error(e)
    })
  }
}