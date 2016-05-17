import CRUDService from './crud';

export default class Calendar extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'calendar';

    this.schema = {
            id: Number,
            created_at: Date,
            update_at: Date,
            active: Number,
            user_id: Number,
            title: String,
            start: Date,
            end: Date,
            type: String,
            data: Number,
            place: String,
            all_day: Number,
            unique_id: Number,
            delete_at: Date,
            object_id: Number,
            Object_type: String

        };

    }

    event(start, end){
    return this.$http.get(this.apiURL + this.endpoint + '/' start + '/' + end).then((events) => events.data);
    }
}

            
