import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { FORM_DIRECTIVES, ControlGroup, AbstractControl, FormBuilder, Validators} from 'angular2/common';

//
@Component({
    
    selector : 'formbuilder',
    template : `
    
    <h1> FOrm Using Formbuilder </h1>
    <form  [ngFormModel] = "myform" (ngSubmit) = "onSubmit(myform.value)">
    <lable>Name: </lable>
    <input type = "text" [ngFormControl] = "myform.controls['input1']" />
    <lable>Second Name:</lable>
    <input type = "text" [ngFormControl] = "myform.controls['input2']" />
    
    <button type = "submit">Submit</button>
    
    </form>
    
    `
    ,directives : [FORM_DIRECTIVES]
})
export class formbuilder{
    
    myform : ControlGroup ;
    ac : AbstractControl;
    constructor(fb : FormBuilder){
         this.myform = fb.group({
             'input1' : ['ABC'],
              'input2' : ['DEF']
         });
         
         this.ac = this.myform.controls['ac']
    }
    
    onSubmit(value : string) : void{
        console.log("submit method called "  + JSON.stringify(value));
        var i = this.myform.controls['input1'].value;
        var j = this.myform.controls['input2'].value
        console.log(i, j)
    }
}
bootstrap(formbuilder);