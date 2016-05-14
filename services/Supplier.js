import CRUDService from './crud';

export default class Supplier extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'suppliers';
    }

    
    suppliers(){
        return this.$http.get(this.apiURL + this.endpoint + '/'  ).then((suppliers) => suppliers.data);
    }

    supplier(id){
        return this.$http.get(this.apiURL + this.endpoint + '/'  + id).then((supplier) => supplier.data);
    }
    
    add(data){
        return this.$http.post(this.apiURL + this.endpoint + '/'  + data).then((supplier) => supplier.data);
    }

    remove(id){
        return this.$http.delete(this.apiURL + this.endpoint + '/'  + id).then((supplier) => supplier.data);
    }

    edit(id, data){
        return this.$http.put(this.apiURL + this.endpoint + '/'  + id, data).then((supplier) => supplier.data);
    }

 }