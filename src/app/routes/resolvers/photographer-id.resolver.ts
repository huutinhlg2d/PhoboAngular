import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user/user';
import { UserServiceService } from '../../services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class PhotographerIdResolver implements Resolve<User | null> {
  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<User | null> {
    
    
    const photographer = this.userService.getPhotographer(route.params["id"]).toPromise();

    if(!photographer){
      this.router.navigate(['notfound', {stateUrl: state.url}], {replaceUrl: true})
      return null;
     }

    return photographer;
  }
}
