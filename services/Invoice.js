import CRUDService from './crud';

export default class Invoice extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'invoices';
    }

    book(id){
        return this.$http.put(this.apiURL + this.endpoint + '/' + id + '/book').then((invoice) => invoice.data);
    }

    // ----- add all extra methods except the CRUD.

}
