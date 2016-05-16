import CRUDService from './crud';

export default class Supplier extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'suppliers';
    }

 }
