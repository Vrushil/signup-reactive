import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import {PasswordChecker} from "./custom-validator/password-checker";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit{
  title = "signup-reactive";

  signupForm: FormGroup;
  submitted=false;

 constructor(private formbuilder: FormBuilder){ }
 
 ngOnInit(){
    this.signupForm= this.formbuilder.group({     
       firstName:["",[Validators.required,Validators.maxLength(30)]],
       lastName:["",[Validators.required,Validators.maxLength(30)]],
       dOB:["",Validators.required],
       address:["",[Validators.required,Validators.minLength(10)]],
       email:["",[Validators.email,Validators.required]],
       password:["",[Validators.required,Validators.minLength(8)]],
       confirmPassword:["",[Validators.required,Validators.minLength(8)]],
       acceptTandC: [false,Validators.requiredTrue]

     } ,{validators: PasswordChecker('password','confirmPassword'),}
    );
    }
  
  

    get f(){
 return this.signupForm.controls;
    }
    
    
    onSubmit()
{
  console.log("dfhuk");
this.submitted=true;
if(this.signupForm.invalid){
  return;

}
console.table(this.signupForm.value);
  console.table(this.signupForm);

  alert('Success Signup '+ JSON.stringify(this.signupForm.value))
}


    onReset(){
      this.submitted=false;
      this.signupForm.reset();
      console.log('Reset Successful')
    }

  } //class ends
