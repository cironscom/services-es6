import CRUDService from './crud';

export default class Calendar extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'calendar';
    }

    event(start, end){
    return this.$http.get(this.apiURL + this.endpoint + '/' start + '/' + end).then((events) => events.data);
    }
}

            
