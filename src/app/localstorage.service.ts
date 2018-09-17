import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';
import { User } from './user';
// key that is used to access the data in local storage
const STORAGE_KEY = 'local_userlist';
@Injectable()
export class LocalStorageService {
    users: User[];
    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
    public storeOnLocalStorage(users: User[]): void {
        // get array of users from local storage
        const currentuserList = this.storage.get(STORAGE_KEY) || [];
        // push new user to array
        users.forEach(user => {
            currentuserList.push({
                id: user.id,
                name: user.name,
                email: user.email
            });
        });
        // insert updated array to local storage
        this.storage.set(STORAGE_KEY, currentuserList);
        this.show();
    }
    public clearLocalStorage() {
        this.storage.set(STORAGE_KEY, []);
        this.show();
    }
    show() {
        console.log(this.storage
            .get(STORAGE_KEY).length > 0 ? this.storage
                .get(STORAGE_KEY) : 'LocaL storage is empty');
    }
}
