"use strict";
function MainService($http, $location) {
    const self = this;
//currencty

    self.currency = 0;

//return our currency to date
    self.getNumber = () => {

        return self.currency;


    }

    //updates the value of our currency based on completed tasks

    self.updateCurrency = (value) => {
        if (value === true) {
            self.currency++;
        }
        else if (value === false){
        
            self.currency--;
        }
        else{
            console.log("error");
        }

    }
    

    // all get requests
    self.getDaily = () => {
        return $http({
            url: "/tasks/daily",
            method: "GET",
        });
    };
    self.getWeekly = () => {
        return $http({
            url: "/tasks/weekly",
            method: "GET",
        });
    };
    self.getTodo = () => {
        return $http({
            url: "/tasks/todo",
            method: "GET",
        });
    };

    // new todo post
    self.postTodo = (newTask) => {
        return $http({
            url: "/tasks",
            method: "POST",
            data: newTask
        });
    };

    // deletes by id
    self.delete = (id) => {
        return $http({
            url: `/tasks/${id}`,
            method: "DELETE",
        });
    };

    // edits by id
    self.put = (updatedTask) => {
        return $http({
            url: `/tasks/${updatedTask.id}`,
            method: "PUT",
            data: updatedTask
        });
    };

    // routes to page
    self.loadList = () => {
        $location.path("/todolist");
    };

    self.inventory = [
        {
            id: 0,
            item: "Teddy Bear",
            price: 3,
            bought: false,
            image: "./app/images/teddybear.png"
        },
        {
            id: 1,
            item: "Treat",
            price: 2,
            bought: false,
            image: "./app/images/treat.png"
        },
        {
            id: 2,
            item: "Ball",
            price: 8,
            bought: false,
            image:"./app/images/ball.png"
        },
        {
            id: 3,
            item: "Bowl",
            price: 4,
            bought: false,
            image: "./app/images/dogbowl.png"
        },
        {
            id: 4,
            item: "Toy",
            price: 20,
            bought: false,
            image: "./app/images/toy.png"
        },
        
    ];

    self.getCart = () => {
        return self.inventory;
    }
}

angular
    .module("App")
    .service("MainService", MainService);