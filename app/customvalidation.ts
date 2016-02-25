import { Component } from 'angular2/core';
import { FORM_DIRECTIVES, AbstractControl, ControlGroup, FormBuilder,Control, Validators } from 'angular2/common';
import { bootstrap } from 'angular2/platform/browser';
import { formValidator } from './formval';

@Component({
    selector : 'cusValidate',
    template: `
     
     <form [ngFormModel] = "myform" (ngSubmit) = "onSubmit()">
     
     <lable>Credit Card Number</lable>
     <div>
     <input type = "text" [ngFormControl] = "inputfield"/>
     <div [class.has-error] = '!inval'>
      </div>
     </div>
     <button type = "submit">Submit</button>
     </form>
    
    
    `,
    directives : [FORM_DIRECTIVES]
    
})
export class cusValidation{
    
    //binding form
    myform : ControlGroup;
    inputfield : AbstractControl;
    
    constructor(fb : FormBuilder){
       this.myform = fb.group({
            'inputfield' : ['' , Validators.compose([Validators.required, formValidator])]
        })
       this.inputfield = this.myform.controls['inputfield']
    }
    
    //  formValidator(val : Control) :any {
    //     if(val.value.match(/^123/)){
    //         return {inval : true};
    //     }
    // }
    
    onSubmit(){
        console.log('submit function called')
    }
}
bootstrap(cusValidation)