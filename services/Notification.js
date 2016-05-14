import CRUDService from './crud';

export default class Notification extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'notifications';
    }

    return(token, type){
        return this.$http.post(this.apiURL + this.endpoint + '/'  + token, type).then((notifications) => notifications.data);
    }

}