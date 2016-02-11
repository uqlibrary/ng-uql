/**
 * Created by zeh on 11/02/16.
 */

(function() {
  'use strict';

  angular
      .module('uql.main')
      .config(mainConfig);

  /** @ngInject */
  function mainConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/controllers/main/main.html',
          controller: 'MainController',
          controllerAs: 'ctrl'
        });

    $urlRouterProvider.otherwise('/');
  }


})();
