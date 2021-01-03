import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

  message:string;
  signupForm:FormGroup;
  constructor(private shared:SharedService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.shared.getValues().subscribe(res =>{
      console.log(res);
      this.message=res;

      this.signupForm = this.fb.group({
        username: ['',Validators.required],
        password: ['',[Validators.required,Validators.minLength(5)]],
        email: ['', [Validators.email,Validators.required]]
      })

    })
  }

  submit(form:any){
    console.log(form);
    
  }

  reset(){
    this.signupForm.reset(

    )

    this.signupForm.setValue({
      username:'A',
      password:'aa',
      email:'a'
    })

    this.signupForm.patchValue({
      username:'ab'
    })
  }
}
