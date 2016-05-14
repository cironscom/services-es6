import CRUDService from './crud';

export default class OrderRow extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'order_rows';
    }

     rows(){
        return this.$http.get(this.apiURL + this.endpoint + '/' ).then((orderrows) => orderrows.data);
    }

     row(id){
        return this.$http.get(this.apiURL + this.endpoint + '/' + id).then((orderrow) => orderrow.data);
    }

     add(data){
        return this.$http.post(this.apiURL + this.endpoint + '/' + data).then((orderrow) => orderrow.data);
    }

     remove(id){
        return this.$http.delete(this.apiURL + this.endpoint + '/' + id).then((orderrow) => orderrow.data);
    }

    edit(id, data){
        return this.$http.put(this.apiURL + this.endpoint + '/' + id, data).then((orderrow) => orderrow.data);
    }

}
