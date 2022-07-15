import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/services/product.service';
import { ShopService } from 'src/app/services/shop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  prdct?: Product[] 
  product: Product = {
    name: '',
    des: '',
    img: "",
    price: 0,
    shopId:""
    
  };
  shopId: any
  submitted = false;
  constructor(private productsService: ProductsService , private shopService: ShopService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }
  
  saveProduct(): void {
    // this.shopService.get()
    // setTimeout(()=>{
    //   window.location.replace(`/menu/${id}`)
    // }, 1500)
    const data = {
      name: this.product.name,
      des: this.product.des,
      img: this.product.img,
      price: this.product.price
    };

    this.shopId = this.route.snapshot.paramMap.get('id')
    this.productsService.create(data, this.shopId)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
}

     newProduct(): void {
     this.submitted = false;
     this.product = {
      name: '',
      des: '',
      img: "",
      price:0,

  };
}


}


