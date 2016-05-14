import CRUDService from './crud';

export default class Invoice extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'invoices';
    }

    // ----- add all extra methods except the CRUD.
 	invoices(){
        return this.$http.get(this.apiURL + this.endpoint + '/'  ).then((invoices) => invoices.data);
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

	invoice(id){
        return this.$http.get(this.apiURL + this.endpoint + '/' + id).then((invoice) => invoice.data);
    }

	add(data){
        return this.$http.post(this.apiURL + this.endpoint + '/' + data).then((invoice) => invoice.data);
    }

	remove(id){
        return this.$http.delete(this.apiURL + this.endpoint + '/' + id).then((invoice) => invoice.data);
    }

	edit(id, data){
        return this.$http.put(this.apiURL + this.endpoint + '/' + id, data).then((invoice) => invoice.data);
    }

    book(id){
        return this.$http.put(this.apiURL + this.endpoint + '/' + id + '/book').then((invoice) => invoice.data);
    }

    credit(id){
        return this.$http.post(this.apiURL + this.endpoint + '/' + id + '/credit').then((invoice) => invoice.data);
    }

}
