import CRUDService from './crud';

export default class Comment extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'comments';
    }


  comments(url){
        return this.$http.get(this.apiURL + this.endpoint + '/' + url).then((comments) => comments.data);
    }

  comments(id){
        return this.$http.get(this.apiURL + this.endpoint + '/' + id).then((comments) => comments.data);
    }
 
  add(data){
        return this.$http.post(this.apiURL + this.endpoint + '/' + data).then((comments) => comments.data);
    }

  remove(id){
        return this.$http.post(this.apiURL + this.endpoint + '/' + id).then((comments) => comments.data);
    }

  edit(id, data){
        return this.$http.post(this.apiURL + this.endpoint + '/' +id, data).then((comments) => comments.data);
    }

}
