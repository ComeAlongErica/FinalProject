"use strict";

function formDir() {
    return {
        restrict: "A",
        link: function ($scope, $element, $attrs, $location) {

            // greys out importance on form on click and changes previous select back to normal
            $element.on("click", () => {
                if ($element[0].classList[0] === "daily-btn" || $element[0].classList[0] === "low") {
                    $element[0].style.backgroundColor = "rgb(187, 187, 187)";
                    $element[0].nextElementSibling.style.backgroundColor = "";
                    $element[0].nextElementSibling.nextElementSibling.style.backgroundColor = "";
                }
            });

            $element.on("click", () => {
                if ($element[0].classList[0] === "weekly-btn" || $element[0].classList[0] === "medium") {
                    $element[0].style.backgroundColor = "rgb(187, 187, 187)";
                    $element[0].nextElementSibling.style.backgroundColor = "";
                    $element[0].previousElementSibling.style.backgroundColor = "";
                }
            });

            $element.on("click", () => {
                if ($element[0].classList[0] === "todo-btn" || $element[0].classList[0] === "high") {
                    $element[0].style.backgroundColor = "rgb(187, 187, 187)";
                    $element[0].previousElementSibling.style.backgroundColor = "";
                    $element[0].previousElementSibling.previousElementSibling.style.backgroundColor = "";
                }
            });
        }
    };
}

angular
    .module("App")
    .directive("formDir", formDir);
