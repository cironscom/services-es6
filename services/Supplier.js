import CRUDService from './crud';

export default class Supplier extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'suppliers';
     
     this.schema = {
            id: Number,
            created_at: Date,
            update_at: Date,
            company_name: String,
            contact_id: Number,
            address_id: Number,
            company_number: Number,
            vat_no: Number,
            default_category: Number,
            default_vat: Number,
            delivery_days: Number,
            delete_at: Date
                           
        };
    
    }
 
}
