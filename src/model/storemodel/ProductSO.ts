import { observable } from 'mobx';
import { ProductDTO } from '../dtos/ProductDTO';

export class ProductSO {
   @observable product_Id: string;
   @observable productName: string;
   @observable productImg: string;
   @observable shoper_id: string;


    static fromDTO(dto: ProductDTO): ProductSO {
        let so: ProductSO = new ProductSO();
        so.product_Id = dto.product_Id;
        so.productName = dto.productName;
        so.productImg = dto.productImg;
        so.shoper_id =dto.shoper_id;
        return so;
    }
}