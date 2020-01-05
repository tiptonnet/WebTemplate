import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import './main.html';
import './views/viewone/viewone.html'
import './views/viewtwo/viewtwo.html'
import './views/account/account.html'
import './views/accounts/accounts.html'
import './views/products/products.html'
import './views/product/product.html'

FlowRouter.route('/', {
    name: 'App.home',
    action() {
        $("body").html("");
        BlazeLayout.render('App_body', { main: 'hello' });
    },
});

FlowRouter.route('/account/:_id', {
    name: 'App.account',
    action(params, queryParams) {
        const mid = params['_id'];
        $("body").html("");
        BlazeLayout.render('App_body', { main: 'account', data: mid });
    },
});

FlowRouter.route('/accounts', {
    name: 'App.accounts',
    action(params, queryParams) {
        $("body").html("");
        BlazeLayout.render('App_body', { main: 'accounts' });
    },
});

FlowRouter.route('/policy', {
    name: 'App.policy',
    action(params, queryParams) {
        $("body").html("");
        BlazeLayout.render('App_body', { main: 'banner_01' });
    },
});

FlowRouter.route('/about', {
    name: 'App.about',
    action(params, queryParams) {
        $("body").html("");
        BlazeLayout.render('App_body', { main: 'banner_02' });
    },
});

FlowRouter.route('/products', {
    name: 'App.products',
    action(params, queryParams) {
        $("body").html("");
        BlazeLayout.render('App_body', { main: 'products' });
    },
});

FlowRouter.route('/product/:_id', {
    name: 'App.product',
    action(params, queryParams) {
        const mid = params['_id'];
        $("body").html("");
        BlazeLayout.render('App_body', { main: 'product', data: mid });
    },
});