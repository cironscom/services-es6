import CRUDService from './crud';

export default class Comment extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'comments';
    }


  comments(url){
        return this.$http.get(this.apiURL + this.endpoint + '/' + url).then((comments) => comments.data);
    }
}
