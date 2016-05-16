import CRUDService from './crud';

export default class OrderRow extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'order_rows';
    }
}
