import CRUDService from './crud';

export default class Warehouse extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'warehouses';
         this.schema = {
            id: Number,
            created_at: Date,
            update_at: Date,
            name: String,
            address_id: Number,
            delete_at: Date,
            contact_id: Number,
            data: Number

        };
   
    }

}
