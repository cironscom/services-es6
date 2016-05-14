import CRUDService from './crud';

export default class Vat extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'vat';
    }

    
    items(){
        return this.$http.get(this.apiURL + this.endpoint + '/'  ).then((items) => items.data);
    }

}