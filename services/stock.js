import CRUDService from './crud';

export default class stock extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'stocks';
    }
       
}
