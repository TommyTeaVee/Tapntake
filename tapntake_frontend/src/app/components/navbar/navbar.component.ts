import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private roles: string[] = []
  isLoggedIn = false
  showAdminBoard = false
  showModeratorBoard = false
  username?: string

  constructor( private tokenStorage: TokenStorageService ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken()
    if(this.isLoggedIn){
      const user = this.tokenStorage.getUser()
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN')
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR')
      this.username = user.username
    }
  }

  logout(): void{
    this.tokenStorage.signOut()
    window.location.reload()
  }
}
