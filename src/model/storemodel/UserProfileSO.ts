import { observable } from 'mobx';
import { UserProfileDTO } from '../dtos/UserProfileDTO';

export class UserProfileSO {
    @observable displayName?: string;
    @observable email?: string;
    @observable phoneNumber?: string;
    @observable photoURL?: string;
    @observable refreshToken?: string;


    static fromDTO(dto: UserProfileDTO): UserProfileSO {
        let so: UserProfileSO = new UserProfileSO();
        so.displayName = dto.displayName;
        so.email = dto.email;
        so.phoneNumber = dto.phoneNumber;
        so.photoURL = dto.photoURL;
        so.refreshToken = dto.refreshToken;
        return so;
    }
}