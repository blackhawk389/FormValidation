import { Component } from 'angular2/core';
import { FORM_DIRECTIVES, ControlGroup, AbstractControl, FormBuilder, Validators, Control } from 'angular2/common';
import { bootstrap } from 'angular2/platform/browser';

@Component({
    
    selector : 'validating',
    template : `
    
    <h1>Form Validation<h1>
    
    <form  [ngFormModel] = 'cg' (ngSubmit) = 'onSubmit(cg.value)' class = "form-inline">
    
    <div class = "form-group " 
    [class.has-error] = "!input1.valid && input1.touched"
    [class.has-success] = "input1.valid && input1.touched">
    
    <lable>Name</lable>
    <input type = 'text' [ngFormControl] = 'input1' class = "form-control " />
    <div [class.has-error] = "input1.hasError('required')">Required</div 
    </div>
    
    
    <div class = "form-group" [class.has-error] = "!input2.valid && input2.touched"
    [class.has-success] = "input2.valid && input2.touched">
    
    <lable>Last Name:</lable>
    <input type = 'text' [ngFormControl] = 'input2' class = "form-control"  #i/>
    {{i.className}}
    <div *ngIf = "!input2.valid && input2.touched">
    <div>Invalid</div>
    </div>
    </div>
    <div [class.has-success] = "cg.valid">Valid form</div>
    <button type = 'submit' [disabled] = "!f.valid">Submit</button>
    
    </form>
    
    `,
    directives : [FORM_DIRECTIVES]
    
})
export class validating{
    
    //for binding
    cg : ControlGroup;
    //ac : AbstractControl;
    input1 : AbstractControl;
    input2 : AbstractControl;
    
    //dependency inj.
    constructor(fb : FormBuilder){
        this.cg = fb.group({
            'input1' : ['', Validators.required],
            'input2' : ['', Validators.required]
        });
        
        this.input1 = this.cg.controls['input1']
        this.input2 = this.cg.controls['input2']
        
    }
    //what about 2 values
    onSubmit(value : any){
        console.log('onSubmit Function called' + value)
    }
}
bootstrap(validating);