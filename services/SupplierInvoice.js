import CRUDService from './crud';

export default class SupplierInvoice extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'supplier_invoices';
    }

   
    supplierInvoices(){
        return this.$http.get(this.apiURL + this.endpoint + '/'  ).then((supplier_invoices) => supplier_invoices.data);
    }

     supplierInvoice(id){
        return this.$http.get(this.apiURL + this.endpoint + '/'  + id).then((supplier_invoice) => supplier_invoice.data);
    }

     add(data){
        return this.$http.post(this.apiURL + this.endpoint + '/'  ).then((supplier_invoice) => supplier_invoice.data);
    }

     remove(id){
        return this.$http.delete(this.apiURL + this.endpoint + '/'  + id).then((supplier_invoice) => supplier_invoice.data);
    }

     eidt(id, data){
        return this.$http.put(this.apiURL + this.endpoint + '/'  + id, data).then((supplier_invoice) => supplier_invoice.data);
    }

}