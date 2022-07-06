import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder,FormControl,FormControlName,FormGroup,Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(6)]),
    email: new FormControl('', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
   
  ])
  });
  servicefee  = 2
  totalAmount = JSON.parse(`${localStorage.getItem('Total')}`) 
  token:any
  email: any
  name: any
  date: any
  constructor(private router : Router, private cartService: CartService) { }

  ngOnInit(): void {
   
  }
//   signIn() {
//     let formData = JSON.parse(`${localStorage.getItem('users')}`);
//     let exist = formData.length && 
//     JSON.parse(`${localStorage.getItem('formData')}`).some((data: any) =>{data.email == this.email && data.password == this.password});
//     if(!exist){
//         alert("Incorrect login credentials");
//     }
//     else{
//       this.router.navigate(['/home'])
//     }
   
// }

login(){
  this.email = this.userForm.value.email;
  this.name = this.userForm.value.name;
  let users = JSON.parse(`${localStorage.getItem('users')}`)
 
    users.find((elem:any ) => {
      if((elem.name != this.name) || (elem.email != this.email))
       return alert("Please provide correct credentials")
      
       else if(elem.password == this.name && elem.email == this.email)
       localStorage.setItem('token', JSON.stringify(elem))
        this.router.navigate(['home']) 
       return 
    })
}
}