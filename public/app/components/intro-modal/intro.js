"use strict"
const intro = {
    templateUrl: "app/components/intro-modal/intro.html",
    bindings: {
        hideIntro: "&" //hide intro variable communicating to home
    },

    controller: ["MainService", "$route", function( MainService, $route){
        const vm = this; 
        vm.showIntro = true;
        vm.pet = {
            name: "",
        }
        vm.closeAndRefresh = () => {
            $route.reload();
        }
        vm.hideIntro = () => {
            MainService.setIntroValue(false);
            console.log("test");
        }
        vm.setName = (pet) => {
            MainService.setName(pet.name);
            console.log(pet.name);
        }
    }]

}

angular
    .module("App")
    .component("intro", intro);