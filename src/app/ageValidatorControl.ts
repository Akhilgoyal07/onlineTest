import {AbstractControl} from '@angular/forms';

export function ageValidator (control: AbstractControl)
{
    if(control.value!=null && (control.value<18 || control.value>120 ))
    {
        return ({ageValidator:true});
    }
    return null;
}