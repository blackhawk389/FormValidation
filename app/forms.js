System.register(['angular2/core', 'angular2/platform/browser', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, common_1;
    var formbuilder;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            //
            formbuilder = (function () {
                function formbuilder(fb) {
                    this.myform = fb.group({
                        'input1': ['ABC'],
                        'input2': ['DEF']
                    });
                    this.ac = this.myform.controls['ac'];
                }
                formbuilder.prototype.onSubmit = function (value) {
                    console.log("submit method called " + JSON.stringify(value));
                    var i = this.myform.controls['input1'].value;
                    var j = this.myform.controls['input2'].value;
                    console.log(i, j);
                };
                formbuilder = __decorate([
                    core_1.Component({
                        selector: 'formbuilder',
                        template: "\n    \n    <h1> FOrm Using Formbuilder </h1>\n    <form  [ngFormModel] = \"myform\" (ngSubmit) = \"onSubmit(myform.value)\">\n    <lable>Name: </lable>\n    <input type = \"text\" [ngFormControl] = \"myform.controls['input1']\" />\n    <lable>Second Name:</lable>\n    <input type = \"text\" [ngFormControl] = \"myform.controls['input2']\" />\n    \n    <button type = \"submit\">Submit</button>\n    \n    </form>\n    \n    ",
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], formbuilder);
                return formbuilder;
            })();
            exports_1("formbuilder", formbuilder);
            browser_1.bootstrap(formbuilder);
        }
    }
});
//# sourceMappingURL=forms.js.map