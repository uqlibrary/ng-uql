(function() {
  'use strict';

  angular
    .module('uql.example')
    .controller('ExampleController', ExampleController);

  /** @ngInject */
  function ExampleController($timeout, toastr, moment) {
    var vm = this;
    vm.creationDate = moment().valueOf();

    vm.showToastr = function() {
      toastr.info('Really? Is that it?');
    };

    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }
    activate();
  }
})();
