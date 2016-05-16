import CRUDService from './crud';

export default class Contact extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'contacts';
    }

    count(){
        return this.$http.get(this.apiURL + this.endpoint + '/'  ).then((contacts) => contacts.data);
    }

    remove(id){
        return this.$http.delete(this.apiURL + this.endpoint + '/' + id).then((contact) => contact.data);
    }

}
