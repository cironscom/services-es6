import angular from 'angular';

import Invoice from './services/Invoice';

export default angular.module('app.services', [])
    .service('Invoice', Invoice)
    .name;
