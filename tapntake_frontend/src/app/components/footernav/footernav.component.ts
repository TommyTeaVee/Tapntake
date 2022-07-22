import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
@Component({
  selector: 'app-footernav',
  templateUrl: './footernav.component.html',
  styleUrls: ['./footernav.component.css']
})
export class FooternavComponent implements OnInit {
  public totalItems :any
  

  constructor(private cartService: CartService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.totalItems = this.cartService.getItems()
  }
 
  logout(): void{
    this.tokenStorage.signOut()
    window.location.reload()
  }
}
