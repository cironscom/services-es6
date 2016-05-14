import CRUDService from './crud';

export default class Verification extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'verifications';
    }

    
    verifications(){
        return this.$http.get(this.apiURL + this.endpoint + '/'  ).then((verifications) => verifications.data);
    }

    verification(id){
        return this.$http.get(this.apiURL + this.endpoint + '/'  + id).then((verification) => verification.data);
    }

    add(data){
        return this.$http.post(this.apiURL + this.endpoint + '/'  + data).then((verification) => verification.data);
    }

    remove(id){
        return this.$http.delete(this.apiURL + this.endpoint + '/'  + id).then((verification) => verification.data);
    }

     edit(id, data){
        return this.$http.put(this.apiURL + this.endpoint + '/'  + id, data).then((verification) => verification.data);
    }

}
