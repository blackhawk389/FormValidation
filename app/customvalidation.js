System.register(['angular2/core', 'angular2/common', 'angular2/platform/browser'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, browser_1;
    var cusValidation;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            //import { formValidator } from './formval';
            cusValidation = (function () {
                function cusValidation(fb) {
                    this.myform = fb.group({
                        'inputfield': ['', common_1.Validators.compose([common_1.Validators.required, this.formValidator])]
                    });
                    this.inputfield = this.myform.controls['inputfield'];
                }
                cusValidation.prototype.formValidator = function (val) {
                    console.log('inside form');
                    if (val.value.match(/^[0-9]+$/)) {
                        console.log('inside matched');
                        return { inval: true };
                    }
                    else {
                        console.log('not allowed');
                    }
                };
                cusValidation.prototype.onSubmit = function () {
                    console.log('submit function called');
                };
                cusValidation = __decorate([
                    core_1.Component({
                        selector: 'cusValidate',
                        template: "\n     \n     <form [ngFormModel] = \"myform\" (ngSubmit) = \"onSubmit()\">\n     \n     <lable>Credit Card Number</lable>\n     <div>\n     <input type = \"text\" [ngFormControl] = \"inputfield\"/>\n     <div [class.has-error] = 'inval'>\n      </div>\n     </div>\n     <button type = \"submit\">Submit</button>\n     </form>\n    \n    \n    ",
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], cusValidation);
                return cusValidation;
            })();
            exports_1("cusValidation", cusValidation);
            browser_1.bootstrap(cusValidation);
        }
    }
});
//# sourceMappingURL=customvalidation.js.map