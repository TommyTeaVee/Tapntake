import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-footernav',
  templateUrl: './footernav.component.html',
  styleUrls: ['./footernav.component.css']
})
export class FooternavComponent implements OnInit {
  public totalItems :any
  

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.totalItems = this.cartService.getItems()
  }
 

}
