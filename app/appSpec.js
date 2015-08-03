describe('optIn', function() {

    var scope,
        element,
        compiled,
        html;

    beforeEach(module("signupApp"));
    beforeEach(module('optin.html'));
    beforeEach(inject(function($rootScope, $compile) {

        var html="";
        html += "<opt-in>";
        html += "<div class='brand-logo'></div>";
        html += "</opt-in>";

        scope = $rootScope.$new();
        compiled = $compile(html);
        element = compiled(scope);
        scope.$digest();

    }));

    it('should render the element correctly', function(){
        expect(element.find('input').length).toBe(4);
    });

    it('should submit a form after passing validation', function () {
        scope.submit();
        scope.$digest();

        expect(scope.optinForm.$valid).toBe(false);

        scope.optinForm.firstname.$setViewValue('Kyle');
        scope.optinForm.lastname.$setViewValue('Buchanan');
        scope.optinForm.email.$setViewValue('something@gmail.com');
        scope.$digest();
        scope.submit();

        expect(scope.optinForm.$valid).toBe(true);
        expect(scope.submitted).toBe(true);
    });
});
