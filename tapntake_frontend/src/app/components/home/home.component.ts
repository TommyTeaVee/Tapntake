import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ShopService } from 'src/app/services/shop.service';
import { Shop } from '../../shop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token = window.sessionStorage.getItem("auth-user") ? JSON.parse(`${window.sessionStorage.getItem('auth-user')}`)  : 0
  
  isLoggedIn = false
  username?: string

  currentShop: Shop = {};
  currentIndex = -1;
  name =""
  
  shops: Shop[] = [];
  

  constructor( private shopService: ShopService, private tokenStorage: TokenStorageService ) { }

  ngOnInit(): void {
    this.getShops()
  }
  

  getShops(): void {
    
    this.shopService.getAll().subscribe({
      next: (data) => {
        this.shops = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    })
  }

  searchName(): void {

    this.currentShop = {};
    this.currentIndex = -1;

    this.shopService.findByTitle(this.name)
      .subscribe({
        next: (data) => {
          this.shops = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  logout(): void{
    this.tokenStorage.signOut()
    window.location.reload()
  }
}
