import CRUDService from './crud';

export default class Warehouse extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'warehouses';
    }

}
