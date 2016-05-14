import CRUDService from './crud';

export default class Contact extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'contacts';
    }

    contacts(){
        return this.$http.get(this.apiURL + this.endpoint + '/'  ).then((contacts) => contacts.data);
    }

    count(){
        return this.$http.get(this.apiURL + this.endpoint + '/'  ).then((contacts) => contacts.data);
    }


    contacts(id){
        return this.$http.get(this.apiURL + this.endpoint + '/' + id).then((contact) => contact.data);
    }


    add(data){
        return this.$http.post(this.apiURL + this.endpoint + '/' + data).then((contact) => contact.data);
    }
     

    remove(id){
        return this.$http.delete(this.apiURL + this.endpoint + '/' + id).then((contact) => contact.data);
    }


    edit(id, data){
        return this.$http.put(this.apiURL + this.endpoint + '/' + id, data ).then((contact) => contact.data);
    }

}
