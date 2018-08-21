import { observable } from 'mobx';
import { CredtitDTO } from '../dtos/CreditDTO';

export class CreditSO {
    @observable ig: string;
    @observable first_name: string;
    @observable last_name: string;
    @observable tel: string;


    static fromDTO(dto: CredtitDTO): CreditSO {
        let so: CreditSO = new CreditSO();
        so.ig = dto.ig;
        so.first_name = dto.first_name;
        so.last_name = dto.last_name;
        so.tel = dto.tel;

        return so;
    }
}