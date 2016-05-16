import CRUDService from './crud';

export default class SupplierInvoice extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'supplier_invoices';
    }

}
