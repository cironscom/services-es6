import CRUDService from './crud';

export default class PurchaseOrder extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'purchase_orders';
    }

}
