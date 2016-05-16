import CRUDService from './crud';

export default class Contact extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'contacts';
    }

}
