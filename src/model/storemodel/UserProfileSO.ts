import { observable } from 'mobx';
import { UserProfileDTO } from '../dtos/UserProfileDTO';
import { ProductSO } from '../storemodel/ProductSO';

export class UserProfileSO {
    @observable displayName?: string;
    @observable email?: string;
    @observable phoneNumber?: string;
    @observable photoURL?: string;
    @observable refreshToken?: string;
    @observable carts?: ProductSO[];


    static fromDTO(dto: UserProfileDTO): UserProfileSO {
        let so: UserProfileSO = new UserProfileSO();
        so.displayName = dto.displayName;
        so.email = dto.email;
        so.phoneNumber = dto.phoneNumber;
        so.photoURL = dto.photoURL;
        so.refreshToken = dto.refreshToken;

        if(dto.carts) {
            so.carts = dto.carts.map(productDTO => ProductSO.fromDTO(productDTO));
        }

        return so;
    }
}