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
});
