/**
 * Created by zeh on 11/02/16.
 */

(function() {
  'use strict';

  angular
      .module('uql')
      .config(ExampleConfig);

  /** @ngInject */
  function ExampleConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/partials/example.html',
          controller: 'ExampleController',
          controllerAs: 'ctrl'
        });

    $urlRouterProvider.otherwise('/');
  }


})();
