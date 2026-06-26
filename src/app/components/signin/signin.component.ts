import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  //Declaration
  signinForm:FormGroup;

  constructor(private fb:FormBuilder,private authService:AuthenticationService){
    // Inialization
    this.signinForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    });

    console.log(this.signinForm);
  
  }

  onSubmit(){
    console.log("user clicked on submitted button");
    console.log(this.signinForm);

    const {email,password} = this.signinForm.value;

    this.authService.login(email,password).subscribe({
      next:(user)=>{
        if(user){
          console.log("valid user , login successful");
        }else{
          console.log("invalid user email and password");
        }
      }
    })
  }

}
