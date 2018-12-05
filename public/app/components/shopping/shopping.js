"use strict";

const shopping ={
    templateUrl: "app/components/shopping/shopping.html",
    controller: ["MainService", function(MainService) {
        const vm = this;
        vm.inventory = MainService.getCart();
        vm.getCart = () => {
            MainService.getCart()
            console.log(vm.inventory)
        }
        vm.buyItems = (id) => {
            // if (MainService.inventory[id].bought === false){
            //     MainService.inventory[id].bought === true;
            // }else{
            //     MainService.inventory[id].bought === true;
            // }
            
            // MainService.inventory[id].bought = !MainService.inventory[id].bought;
           
            MainService.inventory[id].bought === false;
            vm.getCart();
            console.log("clicked")
        }
    }]

}

angular 
    .module("App")
    .component("shopping", shopping);