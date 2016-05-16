import CRUDService from './crud';

export default class Order extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'orders';
    }


    count(){
        return this.$http.get(this.apiURL + this.endpoint + '/' ).then((orders) => orders.data);
    }

    pending(){
        return this.$http.get(this.apiURL + this.endpoint + '/' ).then((orders) => orders.data);
    }

    pendingCount(){
        return this.$http.get(this.apiURL + this.endpoint + '/' ).then((orders) => orders.data);
    }

    pendingSum(){
        return this.$http.get(this.apiURL + this.endpoint + '/' ).then((orders) => orders.data);
    }


    generateInvoice(id){
        return this.$http.post(this.apiURL + this.endpoint + '/' + id + '/generate/invoice/').then((invoice) => invoice.data);
    }
    
}
