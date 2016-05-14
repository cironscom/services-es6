import CRUDService from './crud';

export default class stock extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'stocks';
    }

    
    warehouse(warehouse_id){
        return this.$http.get(this.apiURL + this.endpoint + '/'  + warehouse_id + '/stock/').then((stock) => stock.data);
    }

    update(id, data){
        return this.$http.put(this.apiURL + this.endpoint + '/'  + id, data).then((stock) => stock.data);
    }
    
    add(warehouse_id, data){
        return this.$http.post(this.apiURL + this.endpoint + '/'  + warehouse_id + '/stock/', data).then((stock) => stock.data);
    }  
       
}
