import * as firebase from 'firebase';
import { observable, action } from 'mobx';
import { UserProfileSO } from '../model/storemodel/UserProfileSO';
// import { FireBaseKey } from '../untils/FireBaseKey';
import { CookiesKey } from '../untils/CookiesKey';
// import { to } from 'await-to-js';
import * as RXCookie from 'react-cookie';
import { ProductDTO } from '../model/dtos/ProductDTO';


export class UserProfileStore {

    private cookie = new RXCookie.Cookies();

    @observable userProfile: UserProfileSO;

    constructor() {
        this.init();
    }

    init() {
        if (!this.userProfile) {
            const userProfile: UserProfileSO = this.cookie.get(CookiesKey.userProfile);
            if (userProfile) {
                this.userProfile = UserProfileSO.fromDTO(userProfile);
            }
            else {
                this.userProfile = new UserProfileSO();
            }
            console.log(this.userProfile);
        }
    }

    destroy() {
        // Delete any subscriptions here
    }

    onLogout() {
        this.logout();
    }

    onLoginWithGoogle() {
        this.loginWithGoogle();
    }

    onPutCarts(product: ProductDTO) {
        this.onSelectProduct(product);
    }

    @action private async loginWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        const auth = firebase.auth();

        auth.signInWithPopup(provider).then(async (result) => {
            const user = result.user ? result.user : {};
            this.userProfile = await UserProfileSO.fromDTO(user);
            await this.cookie.set(CookiesKey.userProfile, this.userProfile, { path: '/' });
        });
    }

    @action private async logout() {
        this.cookie.remove(CookiesKey.userProfile);
        this.userProfile = new UserProfileSO();
    }

    @action private async onSelectProduct(product: ProductDTO) {
        if (!this.userProfile.carts) {
            this.userProfile.carts = []
            this.userProfile.carts.push(product);
            await this.cookie.set(CookiesKey.userProfile, this.userProfile, { path: '/' });
        }
        else {
            this.userProfile.carts.push(product);
            await this.cookie.set(CookiesKey.userProfile, this.userProfile, { path: '/' });
        }
    }
}