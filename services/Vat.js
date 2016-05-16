import CRUDService from './crud';

export default class Vat extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'vat';
    }

}
