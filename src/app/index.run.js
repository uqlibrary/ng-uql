(function() {
  'use strict';

  angular
    .module('uql')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
