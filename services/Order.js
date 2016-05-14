import CRUDService from './crud';

export default class Order extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'orders';
    }

    orders(){
        return this.$http.get(this.apiURL + this.endpoint + '/' ).then((orders) => orders.data);
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

    order(id){
        return this.$http.get(this.apiURL + this.endpoint + '/' + id).then((order) => order.data);
    }

    add(data){
        return this.$http.post(this.apiURL + this.endpoint + '/' + data).then((order) => order.data);
    }

    generateInvoice(id){
        return this.$http.post(this.apiURL + this.endpoint + '/' + id + '/generate/invoice/').then((invoice) => invoice.data);
    }
  
    remove(id){
        return this.$http.delete(this.apiURL + this.endpoint + '/' + id).then((order) => order.data);
    }  
    
    edit(id, data){
        return this.$http.put(this.apiURL + this.endpoint + '/' + id, data).then((order) => order.data);
    }

}
