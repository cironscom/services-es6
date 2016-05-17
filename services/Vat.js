import CRUDService from './crud';

export default class Vat extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'vat';

         this.schema = {
            pay: Number,
            recive: Number,
            year: Number,
            mounth: Number,
            vat_id: Number,
            created_at: Date,
            update_at: Date

        };
   
    }

}
