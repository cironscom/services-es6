import CRUDService from './crud';

export default class User extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'users';
    }

 }
