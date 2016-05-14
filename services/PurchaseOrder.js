import CRUDService from './crud';

export default class PurchaseOrder extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'purchase_orders';
    }

    purchaseOrders(){
        return this.$http.get(this.apiURL + this.endpoint + '/'  ).then((purchase_orders) => purchase_orders.data);
    }

    purchaseOrder(id){
        return this.$http.get(this.apiURL + this.endpoint + '/' + id).then((purchase_order) => purchase_order.data);
    }

    add(data){
        return this.$http.post(this.apiURL + this.endpoint + '/' + data).then((purchase_order) => purchase_order.data);
    }
    
    remove(id){
        return this.$http.delete(this.apiURL + this.endpoint + '/' + id).then((purchase_order) => purchase_order.data);
    }

    edit(id, data){
        return this.$http.put(this.apiURL + this.endpoint + '/' + id, data).then((purchase_order) => purchase_order.data);
    }

}
