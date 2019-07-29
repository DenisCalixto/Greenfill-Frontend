import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  isNavbarCollapsed = false;
  userImage: string = null;
  name: string = null;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
      this.name = this.authService.name;
      if (this.authService.name.indexOf('Denis') !== -1) {
        this.userImage = 'denis';
      }
      if (this.authService.name.indexOf('June') !== -1) {
        this.userImage = 'june';
      }
      if (this.authService.name.indexOf('Marinela') !== -1) {
        this.userImage = 'marinela';
      }
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
