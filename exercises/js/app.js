// initialize the app
angular.module('Demo', []);

// custom filter to capitalize first letter of a string
angular.module('Demo').filter('capitalizeFirstLetter', function() {
    return function(param) {
        if (param) {
            return param[0].toUpperCase() + param.slice(1);
        }
    };
});

angular
    .module('Demo')
    .controller('DemoCtrl', DemoCtrl);

function DemoCtrl() {
    var vm = this;

    vm.greeting = 'Hello';

    vm.sayHello = function(name) {
        alert(vm.greeting + ' ' + name);
    };
}