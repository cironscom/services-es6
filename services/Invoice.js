import CRUDService from './crud';

export default class Invoice extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'invoices';

        this.schema = {
            name: String,
            id: Number
        };
    }

    count(){
        return this.$http.get(this.apiURL + this.endpoint + '/'  ).then((invoices) => invoices.data);
    }

    unpaidCount(){
        return this.$http.get(this.apiURL + this.endpoint + '/'  ).then((invoices) => invoices.data);
    }

    unpaidSum(){
        return this.$http.get(this.apiURL + this.endpoint + '/'  ).then((invoices) => invoices.data);
    }

    book(id){
        return this.$http.put(this.apiURL + this.endpoint + '/' + id + '/book').then((invoice) => invoice.data);
    }

    makeCredit(id){
        return this.$http.post(this.apiURL + this.endpoint + '/' + id + '/credit').then((invoice) => invoice.data);
    }

}
