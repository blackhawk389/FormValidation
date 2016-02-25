
import { Control } from 'angular2/common';

export function formValidator(val : Control) : {[s: string]: any} {
        if(val.value.match(/^123/)){
            console.log('from function')
            return {inval : true};
        }
    }