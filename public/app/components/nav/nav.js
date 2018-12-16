"use strict";
const navbar = {
    templateUrl: "app/components/nav/nav.html",
    controller: ["$rootScope","MainService", function($rootScope, MainService){
        const vm = this;

        // toggle form boolean to show or hide
        vm.showForm = () => {
            MainService.setValue(true);
            MainService.loadList();
        };
        vm.hideForm = () => {
            MainService.setValue(false);
            MainService.loadList();
        };
    }]
}

angular
    .module("App")
    .component("navbar", navbar);