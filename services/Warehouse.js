import CRUDService from './crud';

export default class Warehouse extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'warehouses';
    }

    
    warehouses(){
        return this.$http.get(this.apiURL + this.endpoint + '/'  ).then((warehouses) => warehouses.data);
    }

    count(){
        return this.$http.get(this.apiURL + this.endpoint + '/'  ).then((warehouses) => warehouses.data);
    }

    warehouses(id){
        return this.$http.get(this.apiURL + this.endpoint + '/'  + id).then((warehouse) => warehouse.data);
    }

    add(data){
        return this.$http.post(this.apiURL + this.endpoint + '/'  + data).then((warehouse) => warehouse.data);
    }

    remove(id){
        return this.$http.delete(this.apiURL + this.endpoint + '/'  + id).then((warehouse) => warehouse.data);
    }

     edit(id, data){
        return this.$http.put(this.apiURL + this.endpoint + '/'  + id, data).then((warehouse) => warehouse.data);
    }

}
