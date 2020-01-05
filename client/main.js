import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Blaze } from 'meteor/blaze'


import './main.html';
import './views/home/home.html'
import './views/viewone/viewone.html'
import './views/viewtwo/viewtwo.html'
import './views/account/account.html'
import './views/products/products.html'
import './routes.js';

Template.txt_menu.events({
    'click #v1' (event, instance) {
        navigate(Blaze.Template.banner_01);
    },
    'click #v2' (event, instance) {
        navigate(Blaze.Template.banner_02);
    },
    'click #v0' (event, instance) {
        navigate(Blaze.Template.hello);
    },
    'click #account' (event, instance) {
        var uid = Meteor.userId();
        navigate(Blaze.Template.account);
    },
    'click #products' (event, instance) {
        navigate(Blaze.Template.products);
    },
});

function clear_content() {
    $("#main_content").html("<img id=\"loading\" src=\"/images/circle-loading.gif\" alt=\"Loading, please wait.\">");

}

function navigate(view) {
    clear_content();
    Blaze.render(view, document.getElementById("main_content"));
    $("#loading").slideUp();
}