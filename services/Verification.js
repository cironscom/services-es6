import CRUDService from './crud';

export default class Verification extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'verifications';
    }

}
