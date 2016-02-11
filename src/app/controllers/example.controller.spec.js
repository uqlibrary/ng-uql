(function() {
  'use strict';

  describe('controllers', function(){
    var vm;
    var toastr;

    beforeEach(module('uql.example'));
    beforeEach(inject(function(_$controller_, _toastr_) {
      spyOn(_toastr_, 'info').and.callThrough();
      vm = _$controller_('ExampleController');
      toastr = _toastr_;
    }));

    it('should have a timestamp creation date', function() {
      expect(vm.creationDate).toEqual(jasmine.any(Number));
    });

    it('should show a Toastr info when invoke showToastr()', function() {
      vm.showToastr();
      expect(toastr.info).toHaveBeenCalled();
    });

  });
})();
