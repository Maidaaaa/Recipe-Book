import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnDestroy, OnInit} from "@angular/core";
@Component ({
    selector: 'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
    isAuthenticated = false;
    private userSub: Subscription | undefined;
    constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}
    ngOnInit() {
      this.userSub =  this.authService.user.subscribe((user: any) =>{
        this.isAuthenticated = !!user;
        console.log(!user);
        console.log(!!user);
      });
    }
    onSaveData(){
    this.dataStorageService.storeRecipes();
}   
onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
}
onLogout(){
  this.authService.logout();
}
ngOnDestroy(){
    this.userSub?.unsubscribe();
}
}

