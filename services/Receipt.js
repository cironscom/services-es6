import CRUDService from './crud';

export default class Receipt extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'receipts';
    
     this.schema = {
            id: Number,
            created_at: Date,
            update_at: Date,
            amount: Number,
            vat: Number,
            user_id: Number,
            image: Number,
            currency: String,
            merchant: String,
            date: Date,
            delete_at: Date,
            multiple_vat: Number,
            payment: Number,
            identifier: String,
            acoount_no: Number,
            supplier_id: Number,
            employee_id: Number,
            vat_ammount: Number,

        };
   
    }

}
