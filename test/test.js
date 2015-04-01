define(['angular-mocks'], function(angular) {
  describe('hello world', function() {
    
    beforeEach(module('mainModule'));
    
    var $controller, $scope;
  
    beforeEach(inject(function(_$rootScope_, _$controller_){
      $scope = _$rootScope_.$new();
      $controller = _$controller_;
      $controller('testController', { $scope: $scope });
    }));
  
    it("expects message to be hello world2", function() {
      expect($scope.message).toBe('hello world2');
    });
  
    it("contains spec with an expectation", function() {
      expect(true).toBe(true);
    });
  });
});