import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product !: Product
  total:any
  items: any
  totalAmount = this.cartService.totalAmount
  constructor(private cartService: CartService, private router : Router) { }

  ngOnInit(): void {
    this.getItems()
    this.Total()
  }
  getItems(){
    
        this.items = this.cartService.getItems();
    
  }
  Total() {
    this.totalAmount = 0
    this.items.forEach((item: { qty: number; price: number; }) => {
      this.totalAmount += (item.qty * item.price)
  
    })
  }
  deletei(i: number): void {
    this.items.splice(i, 1);
    this.items.length
    this.Total();
  
  }
  qntUpdate($event: any) {
    this.Total();
  }

  incre(qty: any, index: number){
    qty++
    this.items[index].qty = qty
    this.items.length
    this.Total();
  }
  decr(qty: any, index: number){
    
  if(qty > 1)
  qty--
    this.items[index].qty = qty
    this.items.length
    this.Total();
   
  }
}
