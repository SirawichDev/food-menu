import { observable } from 'mobx';
import { ImageDTO } from '../dtos/ImageDTO';

export class ImageSO {
    @observable name: string;
    @observable image: string;
    @observable link: string;


    static fromDTO(dto: ImageDTO): ImageSO {
        let so: ImageSO = new ImageSO();
        so.name = dto.name;
        so.image = dto.image;
        so.link = dto.link;
        return so;
    }
}