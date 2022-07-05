import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder,FormControl,FormControlName,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm = new FormGroup({
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    confirmPwd: new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  ])
  });
  formSubmitted : boolean = false; 
  users: User[] = []
  email: any
  password: any
  confirmPwd: any

  constructor(private router: Router, private location : Location, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }

  get emailer(){
    return this.userForm.get('email')
    }
  register(){
    
    let user = {
      email: this.userForm.value.email,
      password: this.userForm.value.password
    }
    
    if(this.userForm.value.password === this.userForm.value.confirmPwd && this.userForm.value.password){
      this.users.push(user)
      localStorage.setItem('users', JSON.stringify(this.users))
        this.router.navigate(['/login'])
        return 
    }else {
      alert('Please, fill in the requid fields');
    
  }
}
}
