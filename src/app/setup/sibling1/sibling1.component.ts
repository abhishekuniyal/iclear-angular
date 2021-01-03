import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  private message:string;
  form: any;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  passToSibling2(){
    console.log("pass Fruits delivered to sibling 2");
    this.message = 'fruits delivered';
    this.sharedService.transferValues(this.message);
  }

  onSubmit(formVal:any){
    console.log(formVal);
    this.form = formVal;
    
  }

}
