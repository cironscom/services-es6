

## Old Service
See Gist: https://gist.github.com/phandersson/ec90503a447bd11907ec0880459534bb#file-invoice-ngfactory-js

## New Service
```javascript

import CRUDService from './crud';

export default class Invoice extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'invoices';
    }

    book(id){
        return this.$http.put(this.apiURL + this.endpoint + '/' + id + '/book').then((invoice) => invoice.data);
    }

    // ----- add all extra methods except the CRUD.

}
```

As you can see i have done the `bookInvoice()` method to `book()` from `ìnvoices.ngfactory` to `Invoice.js`

## Naming conventions

#### Methods

We need to remove all words "*get*" and "*Invoice/Order/Receipt (etc)*"
Example:

`getUnpaidInvoice()` => `unpaid()`

`getInvoiceCount()` => `count()`

`bookInvoice()` => `book()`

#### Files

All files should be named in class-camel-case and in singular form.
example:

`invoices.ngfactory.js` => `Invoice.js`

`supplier_invoices.ngfactory.js` => `SupplierInvoice.js`
