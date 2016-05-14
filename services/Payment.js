import CRUDService from './crud';

export default class Payment extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'payments';
    }

    payments(){
        return this.$http.get(this.apiURL + this.endpoint + '/'  ).then((payments) => payments.data);
    }

    payment(id){
        return this.$http.get(this.apiURL + this.endpoint + '/'  + id).then((payment) => payment.data);
    }

    add(data){
        return this.$http.post(this.apiURL + this.endpoint + '/'  + data).then((payment) => payment.data);
    }

    remove(id){
        return this.$http.delete(this.apiURL + this.endpoint + '/'  + id).then((payment) => payment.data);
    }

    payment(id, data){
        return this.$http.put(this.apiURL + this.endpoint + '/'  + id, data).then((payment) => payment.data);
    }

}