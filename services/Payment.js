import CRUDService from './crud';

export default class Payment extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'payments';
    }

}
