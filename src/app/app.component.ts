import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './User';
import { LocalStorageService } from './localstorage.service';
import { SessionStorageService } from './sessionstorage.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'local-project';
  users: User[];

  constructor(private userService: UserService, private localStorageService: LocalStorageService, private sessionStorageService:
    SessionStorageService) { }
  clearLocalStorage() {
    this.localStorageService.clearLocalStorage();
  }
  clearSessionStorage() {
    this.sessionStorageService.clearSessionStorage();
  }
  ngOnInit() {
  }
  loadusers() {
    this
      .userService
      .getusers()
      .subscribe((data: User[]) => {
        this.users = data;
        // this.localStorageService.storeOnLocalStorage(this.users);
        this.sessionStorageService.storeOnSessionStorage(this.users);
      });
  }

}
