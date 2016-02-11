(function() {
  'use strict';

  angular
    .module('uql.example')
    .controller('ExampleController', ExampleController);

  /** @ngInject */
  function ExampleController($timeout, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1454375517199;

    vm.searchOptions = [
      { name: 'Search', icon: '&#xE8B6;' },
      { name: 'Books', icon: '&#xE865;' },
      { name: 'Journal articles', icon: '&#xE24D;'},
      { name: 'Multimedia', icon: '&#xE54D;'},
      { name: 'Journals', icon: ''},
      { name: 'Databases', icon: ''},
      { name: 'Catalogue', icon: ''},
      { name: 'Past exam papers', icon: ''},
      { name: 'Course reading lists', icon: ''}
    ];

    vm.showToastr = function() {
      toastr.info('Really? Is that it?');
      vm.classAnimation = '';
    };

    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }
    activate();
  }
})();
