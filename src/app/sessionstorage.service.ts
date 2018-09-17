import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { User } from './user';
// key that is used to access the data in local storage
const STORAGE_KEY = 'local_userlist';
@Injectable()
export class SessionStorageService {
    users: User[];
    constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { }
    public storeOnSessionStorage(users: User[]): void {
        // get array of users from Session storage
        const currentuserList = this.storage.get(STORAGE_KEY) || [];
        // push new user to array
        users.forEach(user => {
            currentuserList.push({
                id: user.id,
                name: user.name,
                email: user.email
            });
        });
        // insert updated array to Session storage
        this.storage.set(STORAGE_KEY, currentuserList);
        this.show();
    }
    public clearSessionStorage() {
        this.storage.set(STORAGE_KEY, []);
        this.show();
    }
    show() {
        console.log(this.storage
            .get(STORAGE_KEY).length > 0 ? this.storage
                .get(STORAGE_KEY) : 'Session storage is empty');
    }
}
