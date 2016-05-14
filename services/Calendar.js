import CRUDService from './crud';

export default class Calendar extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'calendar';
    }

    event(start, end){
    return this.$http.get(this.apiURL + this.endpoint + '/' start + '/' + end).then((events) => events.data);
    }

    edit(id, data){
    return this.$http.put(this.apiURL +this.endpoint + '/' + id, data).then((event) => events.data);
    }


    delete(id){
    return this.$http.delete(this.apiURL + this.endpoint + '/' + id).then((status) => status.data);
    }

    add(data){
    return this.$http.post(this.apiURL + this.endpoint + '/' + data).then((event) => status.data);

    }
}

            
