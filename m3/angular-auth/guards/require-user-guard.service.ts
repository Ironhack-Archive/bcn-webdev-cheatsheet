import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class RequireUserGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): Promise<boolean> {
    return this.authService.me()
      .then((user) => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  }

}
