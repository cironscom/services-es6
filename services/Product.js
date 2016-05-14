import CRUDService from './crud';

export default class Product extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'products';
    }

    products(){
        return this.$http.get(this.apiURL + this.endpoint + '/'  ).then((products) => products.data);
    }

    stockFilter(filters){
        return this.$http.get(this.apiURL + this.endpoint + '/' + filters).then((products) => products.data);
    }

    count(){
        return this.$http.get(this.apiURL + this.endpoint + '/' ).then((products) => products.data);
    }

    product(id){
        return this.$http.get(this.apiURL + this.endpoint + '/' + id).then((product) => product.data);
    }

    add(data){
        return this.$http.post(this.apiURL + this.endpoint + '/' + data).then((product) => product.data);
    }

    remove(id){
        return this.$http.delete(this.apiURL + this.endpoint + '/' + id).then((product) => product.data);
    }

    edit(id, data){
        return this.$http.put(this.apiURL + this.endpoint + '/' + id, data).then((product) => product.data);
    }
  
}