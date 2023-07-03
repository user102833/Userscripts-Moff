// ==UserScript==
// @name         Pay Via Square
// @namespace    http://moffit.com.au
// @version      1.0
// @description  Pay via Square
// @match        https://www.mygadgetrepairs.com/admin/index.cfm?p=tickets/invoice-view*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var button = document.querySelector('a.btn.btn-primary.pull-right[target="_ticket_523435"]');
    if (button) {
        button.innerText = 'Pay via Square';
        button.href = 'https://squareup.com/terminal/checkout';

        button.addEventListener('click', function() {
            var invoiceNumber = getInvoiceNumber(); // Get the invoice number from the URL
            button.href += '#' + invoiceNumber + '-takepayment';
        });
    }

    function getInvoiceNumber() {
        var url = window.location.href;
        var params = new URL(url).searchParams;
        return params.get('invoice');
    }
})();
