import CRUDService from './crud';

export default class Receipt extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'receipts';
    }

}
