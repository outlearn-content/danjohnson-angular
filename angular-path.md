Demo AngularJS Path
===================

## Intro to Angular

### Angular Website

[https://angularjs.org](https://angularjs.org)

### Angular in 20'ish minutes

[https://www.youtube.com/watch?v=tnXO-i7944M](https://www.youtube.com/watch?v=tnXO-i7944M)

### How AngularJS compares to jQuery

[https://www.airpair.com/angularjs/posts/jquery-angularjs-comparison-migration-walkthrough](https://www.airpair.com/angularjs/posts/jquery-angularjs-comparison-migration-walkthrough)

### Intro to directives

[https://docs.angularjs.org/guide/directive](https://docs.angularjs.org/guide/directive)

### Using built in directives (ng-app)

index.html

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Angular Demo</title>
    <script src="bower_components/angular/angular.js"></script>
    </head>
    <body ng-app>

    <!-- ng-app tells angular to process this code as an angular application, this can go on any tag but is commonly found on the body tag -->

    </body>
    </html>

### Implment bindings and expressions in HTML (ng-init, ng-model)

index.html

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Angular Demo</title>
    <script src="bower_components/angular/angular.js"></script>
    </head>
    <body ng-app>

    <!-- bind an expression -->
    <h1>Welcome {{ 1 + 1 }}</h1>

    <!-- bind to a property on the scope object -->
    <h1>Welcome {{ person.name }}</h1>

    <!-- populate the person object on the scope object using ng-init directive -->
    <h1 ng-init="person = {name: 'dan'}">Welcome {{ person.name }}</h1>

    <!-- input bound to a property on the scope using ng-model directive -->
    <p><input type="text" ng-model="person.name"></p>

    </body>
    </html>

#### Exercise

Modify the above code so that the person object has a first and last name property, both bound to form fields. The header should read something like Welcome John Smith after both fields are populated.

### Implement events (ng-click)

[https://docs.angularjs.org/api/ng/directive/ngClick](https://docs.angularjs.org/api/ng/directive/ngClick)

index.html

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Angular Demo</title>
    <script src="bower_components/angular/angular.js"></script>
    </head>
    <body ng-app>

    <!-- populate the person object on the scope object using ng-init directive -->
    <h1 ng-init="person = {name: 'dan'}">Welcome {{ person.name }}</h1>

    <!-- Add click event to change name attribute of person object -->
    <p><a href="#" ng-click="person.name = 'Mike'">Change Name</a></p>

    </body>
    </html>

#### Exercise

Modify the above code so that the person object has a favorite color property that can be changed by clicking on either a red button or a blue button.

## Angular Components: Modules

### Intro to modules

[https://docs.angularjs.org/guide/module](https://docs.angularjs.org/guide/module)

### Getting and setting modules

index.html

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Angular Demo</title>
    <script src="bower_components/angular/angular.js"></script>
    <script src="js/app.js"></script>
    </head>
    <body ng-app="Demo">

    </body>
    </html>

app.js

    // set module called Demo with no dependencies
    angular.module('Demo', []);

    // get module called Demo
    var demoModule = angular.module('Demo');

### Config and run blocks

app.js

    // set module called Demo with no dependencies
    angular.module('Demo', []);

    // get module called Demo
    var demoModule = angular.module('Demo');

    // gets executed during the provider registrations and configuration phase
    demoModule.config(function() {
        console.log('config block');
    });

    // gets executed after the injector is created and are used to kickstart the application
    demoModule.run(function() {
        console.log('run block');
    });

**********

## Angular Components: Controllers

### Intro to controllers

[https://docs.angularjs.org/guide/controller](https://docs.angularjs.org/guide/controller)

### Defining controllers and accessing properties

index.html

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Angular Demo</title>
    <script src="bower_components/angular/angular.js"></script>
    <script src="js/app.js"></script>
    </head>
    <body ng-app="Demo">

    <div ng-controller="DemoCtrl as demo"></div>

    </body>
    </html>

app.js

    (function() {
        'use strict';

        angular
            .module('Demo')
            .controller('DemoCtrl', DemoCtrl);

        function DemoCtrl() {
            var vm = this;

            vm.greeting = 'Hello';
        }

    })();

### Controller methods

index.html

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Angular Demo</title>
    <script src="bower_components/angular/angular.js"></script>
    <script src="js/app.js"></script>
    </head>
    <body ng-app="Demo">

    <div ng-controller="DemoCtrl as demo">
        <p><a href="#" ng-click="demo.sayHello('Dan')">Click here to say Hello</a></p>
    </div>

    </body>
    </html>

app.js

    (function() {
        'use strict';

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

    })();

Exercise

### $scope vs. this

Code

[http://www.johnpapa.net/do-you-like-your-angular-controllers-with-or-without-sugar/](http://www.johnpapa.net/do-you-like-your-angular-controllers-with-or-without-sugar/)

### Controllers as view models

Text

Exercise

### Rethinking AngularJS Controllers

[http://toddmotto.com/rethinking-angular-js-controllers/](http://toddmotto.com/rethinking-angular-js-controllers/)

## Angular Components: Services

### Intro to services

Text

### Dependency injection


[http://www.ng-newsletter.com/posts/deep-dive-in-angular-dependency-injection.html](http://www.ng-newsletter.com/posts/deep-dive-in-angular-dependency-injection.html)

### Angular built in services

Text

### Using the built in $http service to communicate with an API

Code

Exercise

### Using custom services to share data between controllers

Code

Exercise

**********

## Angular Components: Routes

Intro to routes

Text

### Different ways to reuse HTML (ng-include, ng-view, custom directives)

Text

### Using ng-include

Code

### Using $routeProvider and ng-view

Code

The new Router for AngularJS by Rob Eisenberg

[https://www.youtube.com/watch?v=h1P_Vh4gSQY](https://www.youtube.com/watch?v=h1P_Vh4gSQY)

**********

## Angular Components: Filters

### Intro to filters

Text

### Using built in filters

Code

### Creating a custom filter

index.html

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Angular Demo</title>
    <script src="bower_components/angular/angular.js"></script>
    </head>
    <body ng-app="Demo">

    {{ 'angular is fun' | capitalizeFirstLetter }}

    <script src="js/app.js"></script>

    </body>
    </html>

app.js

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

Exercise

**********

## Angular Components: Custom Directives

### Intro to custom directives

[http://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-i-the-fundamentals](http://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-i-the-fundamentals)

### Element and attribute directives

Code

### Directive templates

Code

Exercise

### DOM manipulation or event handling in the link() function

Code

### jQuery in Angular

Text

Exercise

### Isolate scope

[https://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-2-isolate-scope](http://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-i-the-fundamentals)

### Outside in property, inside out behavior, and two way property binding

Code

Exercise

### Directive controllers

[http://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-6-using-controllers](http://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-6-using-controllers)

Exercise

### Transclusion

[http://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-4-transclusion-and-restriction](http://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-4-transclusion-and-restriction)

### Transclusion demo

Code

Exercise

### Deep Dive into Custom Directives

[https://www.youtube.com/watch?v=UMkd0nYmLzY](https://www.youtube.com/watch?v=UMkd0nYmLzY)

**********

## Angular Components: Providers

### Provider hierarchy

Text

**********

## Project Structure

### Common approaches for directory structure

Text

### Sample project structure

Code

**********

## Angular Components: Build Tools

### Intro to Gulp.js

Text

### Sample gulpfile.js for Angular

Code

### JavaScript Build Automation With Gulp.js by John Papa

[http://www.pluralsight.com/courses/javascript-build-automation-gulpjs](http://www.pluralsight.com/courses/javascript-build-automation-gulpjs)

**********

## Testing Angular Applications

### Intro to testing strategies

Text

Writing good unit tests

Text

### Unit tests for a controller

Code

### Unit tests for a filter

test/spec/app.js

    describe('Demo', function() {
        'use strict';

        // mock the demo module
        beforeEach(angular.mock.module('Demo'));

        // test capitalize first filter in a string
        it('capitalizeFirstLetter filter should calitalize first letter in a string', function() {
            inject(function(capitalizeFirstLetterFilter) {
                expect(capitalizeFirstLetterFilter('test')).not.toBe('test');
                expect(capitalizeFirstLetterFilter('test')).toBe('Test');
            });
        });
    });

### Unit tests for a service

Code

### Writing good integration tests

Text

### Integration tests using Protractor

[http://angular.github.io/protractor](http://angular.github.io/protractor)

Code

**********

## Sample Application

### Task manager

Code

**********

## Best Practices

### AngularJS Patterns: Clean Code by John Papa

[http://www.pluralsight.com/courses/angularjs-patterns-clean-code](http://www.pluralsight.com/courses/angularjs-patterns-clean-code)
