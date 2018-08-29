import * as firebase from 'firebase';
import { observable, action } from 'mobx';
import { CreditSO } from '../model/storemodel/CreditSO';
import { FireBaseKey } from '../untils/FireBaseKey';
// import { to } from 'await-to-js';

export class CreditStore {

    @observable credit: CreditSO;

    constructor() {
        // this.userService = new UserService();
        this.credit = new CreditSO();
        this.receiveData();
    }

    destroy() {
        // Delete any subscriptions here
    }

    @action private async receiveData() {
        let app = firebase.database().ref(FireBaseKey.credit);
        app.on('value', (snapshot: firebase.database.DataSnapshot) => {
            this.credit = CreditSO.fromDTO(snapshot.val());
        });
    }
}