import * as firebase from 'firebase';
import { observable, action } from 'mobx';
import { CreditSO } from '../model/storemodel/CreditSO';
import { FireBaseKey } from '../firebaseKey/FireBaseKey';
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


    // tslint:disable-next-line:member-ordering
    // @computed get isCredentialsEmpty(): boolean {
    //     return !(this.username
    //         && this.password
    //         && this.username.trim().length > 0
    //         && this.password.trim().length > 0);
    // }

    // // tslint:disable-next-line:member-ordering
    // @action onUsernameChanged(text: string): void {
    //     this.username = text;
    // }

    // // tslint:disable-next-line:member-ordering
    // @action onPasswordChanged(text: string): void {
    //     this.password = text;
    // }

    // // tslint:disable-next-line:member-ordering
    // onSubmitButton() {
    //     this.login();
    // }

    // // tslint:disable-next-line:member-ordering
    // private onError(error: ErrorDTO): void {
    //     MessagePopup.show(
    //         'Ooops',
    //         error.title);
    // }

    // // tslint:disable-next-line:member-ordering
    // private async login() {

    //     let user: UserDTO = new UserDTO();
    //     user.username = this.username;
    //     user.password = this.password;

    //     let [err] = await to<void, ErrorDTO>(this.userService.login(user));
    //     if (err) {
    //         this.onError(err);
    //         console.debug('LoginViewStore.login() err: ' + JSON.stringify(err));
    //         return;
    //     }

    // }

    // // tslint:disable-next-line:member-ordering
    // navigateToRegistration() {
    //     Navigation.setRoot(AppNavigation.getRegistrationScreenLayout());
    // }
}