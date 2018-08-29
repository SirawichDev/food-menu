import * as firebase from 'firebase';
import { observable, action } from 'mobx';
import { ImageSO } from '../model/storemodel/ImageSO';
import { FireBaseKey } from '../untils/FireBaseKey';
// import { to } from 'await-to-js';

export class HomePageStore {

    @observable images: ImageSO[];
    @observable loading: boolean;

    constructor() {
        this.images = [];
        this.loading = true;

        this.receiveData();
    }

    destroy() {
        // Delete any subscriptions here
    }

    @action private async receiveData() {
        let app = firebase.database().ref(FireBaseKey.homepage_slide);
        await app.on('value', (snapshot: firebase.database.DataSnapshot) => {
            snapshot.forEach(item => {
                if(this.images.length === snapshot.numChildren()){
                    this.loading = true;
                    this.images = [];
                }
                this.images.push(item.val());
            });
            this.loading = false;
        });
    }
}