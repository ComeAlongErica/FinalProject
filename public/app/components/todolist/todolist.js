"use strict";
const todolist = {
    templateUrl: "app/components/todolist/todolist.html",
    controller: ["$rootScope", "MainService", function ($rootScope, MainService) {
        const vm = this;
        vm.toggle = false;

        // recieves form value
        vm.showForm = () => {
            MainService.setValue(true);
        };
        vm.getValue = () => {
            return MainService.getDisplayValue();  
        }

        // updates tasks from promise
        function updateDaily(result) {
            vm.dailyTask = result.data;
        };
        function updateWeekly(result) {
            vm.weeklyTask = result.data;
        };
        function updateTodo(result) {
            vm.todoTask = result.data;
        };

        // gets tasks on load
        vm.getAll = () => {
            MainService.getDaily().then(updateDaily);
            MainService.getWeekly().then(updateWeekly);
            MainService.getTodo().then(updateTodo);
        };
        vm.getAll();

        // updates task as completed or on completed
        vm.completedTask = (task) => {
            if (task.completed === true) {
                task.completed = false
            } else {
                task.completed = true
            }
            vm.taskImportance = task.importance;
            // // sends to service
            MainService.put(task);
            MainService.updateCurrency(task);
        };

        // updates edited task
        vm.updateTask = (task) => {
            MainService.put(task).then((result) => {
                vm.getAll();
            });
        };

        // deletes task
        vm.delete = (id) => {
            MainService.delete(id);
        };

        // toggles todo list to show or hide completed
        vm.toggleCompleted = () => {
            if (vm.toggle) {
                 vm.toggle = !vm.toggle;
            } else {
                vm.toggle = !vm.toggle;
            }
        };
    }]
}

angular
    .module("App")
    .component("todolist", todolist);