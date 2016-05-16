# TODO

### Data schemas

We need to state the fields in the database (schema) for each service.
Look at the database (sent on email) and then take every column from each table and tell the service what data type it is.

* `String` for all text stuff (varchars and longtexts)
* `Date` for all dates (datetime, date or string objects that should be converted to date)
* `Number` for all numbers (float, doubles and integers)

```javascript
import CRUDService from './crud';

export default class Invoice extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'invoices';

        this.schema = {
            name: String,
            id: Number
            // -- add rest of fields in database
        };
    }
```
