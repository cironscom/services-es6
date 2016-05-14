import CRUDService from './crud';

export default class Receipt extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'receipts';
    }

    receipts(){
        return this.$http.get(this.apiURL + this.endpoint + '/' ).then((receipts) => receipts.data);
    }

    count(){
        return this.$http.get(this.apiURL + this.endpoint + '/' ).then((receipts) => receipts.data);
    }

    receipt(id){
        return this.$http.get(this.apiURL + this.endpoint + '/' + id).then((receipt) => receipt.data);
    }

    add(data){
        return this.$http.post(this.apiURL + this.endpoint + '/' + data).then((receipt) => receipt.data);
    }
  
    remove(id){
        return this.$http.delete(this.apiURL + this.endpoint + '/' + id).then((receipt) => receipt.data);
    }

    edit(id, data){
        return this.$http.put(this.apiURL + this.endpoint + '/' + id, data).then((receipt) => receipt.data);
    }

}
