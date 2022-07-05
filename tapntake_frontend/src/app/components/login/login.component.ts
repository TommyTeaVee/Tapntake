import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder,FormControl,FormControlName,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm = new FormGroup({
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    email: new FormControl('', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  ])
  }); 
  token:any
  email: any
  password: any
  constructor(private router : Router) { }

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
  this.password = this.userForm.value.password;
  let users = JSON.parse(`${localStorage.getItem('users')}`)
 
    users.find((elem:any ) => {
      if((elem.password != this.password) || (elem.email != this.email))
       return alert("Please provide correct credentials")
      
       else if(elem.password == this.password && elem.email == this.email)
       localStorage.setItem('token', JSON.stringify(elem))
        this.router.navigate(['home']) 
       return 
    })
}
}

