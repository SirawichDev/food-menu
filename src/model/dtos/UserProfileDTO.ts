import {ProductDTO} from './ProductDTO';

export class UserProfileDTO {
    displayName?: string;
    email?: string;
    phoneNumber?: string;
    photoURL?: string;
    refreshToken?: string;
    carts?: ProductDTO[];
}