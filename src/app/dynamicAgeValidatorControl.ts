import {AbstractControl} from '@angular/forms';


export function dynamicAgeValidator (minAge:number, maxAge:number)
{
    return ( function (control: AbstractControl)
    {
        if(control.value!=null && (control.value<minAge || control.value>maxAge ))
        {
            return ({dynamicAgeValidator:true});
        }
        return null;
    });
}
