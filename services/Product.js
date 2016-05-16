import CRUDService from './crud';

export default class Product extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'products';
    }
}
