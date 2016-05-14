import CRUDService from './crud';

export default class User extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'users';
    }

    
    users(){
        return this.$http.get(this.apiURL + this.endpoint + '/'  ).then((users) => users.data);
    }
     
    user(id){
        return this.$http.get(this.apiURL + this.endpoint + '/'  + id).then((user) => user.data);
    }
    
    add(data){
        return this.$http.post(this.apiURL + this.endpoint + '/'  ).then((user) => user.data);
    }

    remove(id){
        return this.$http.delete(this.apiURL + this.endpoint + '/'  + id).then((user) => user.data);
    }

    edit(id, data){
        return this.$http.put(this.apiURL + this.endpoint + '/'  + id, data).then((user) => user.data);
    }
      
    changePassword(id, data){
        return this.$http.put(this.apiURL + this.endpoint + '/'  + id, data + '/password').then((user) => user.data);
    }

 }
