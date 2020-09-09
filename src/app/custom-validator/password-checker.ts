import {FormGroup} from '@angular/forms';


export function PasswordChecker(controlName:string,confirmControlName:string)
{

    return (formgroup:FormGroup)=>{

        const password =formgroup.controls[controlName];
        const confPassword= formgroup.controls[confirmControlName];

        if(password.value!=confPassword.value)
        {
            confPassword.setErrors({mustMatch:true})

        }

        else{
            confPassword.setErrors(null)
        }
    }
}