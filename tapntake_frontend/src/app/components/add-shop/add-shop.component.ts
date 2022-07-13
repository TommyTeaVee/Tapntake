import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/shop';
import { ShopService } from 'src/app/services/shop.service';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css']
})
export class AddShopComponent implements OnInit {

  shop: Shop = {
    name: '',
    email: '',
    img: ""
  };
  submitted = false;
  constructor(private shopService: ShopService ) { }

  ngOnInit(): void {
  }
  
  saveShop(): void {
    const data = {
      name: this.shop.name,
      email: this.shop.email,
      img: this.shop.img
    };

    this.shopService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
}

     newShop(): void {
     this.submitted = false;
     this.shop = {
      name: '',
      email: '',
      img: ""
  };
}
}
