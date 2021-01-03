import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { BankBranchComponent } from './setup/bank-branch/bank-branch.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'iclear-angular';
  imageLocation = 'assests/imageLocation';

  @ViewChild('nameRef') nameRef:ElementRef;
  @ViewChildren(BankBranchComponent) bankBranch: QueryList<BankBranchComponent>;

  isParentLogged:boolean = false;
  name:string;

  ngOnInit(){
    
  }

  ngAfterViewInit(){
    this.nameRef.nativeElement.focus();
    alert(this.bankBranch.length)
  }
  onClick():void{
    console.log("Button clicked");
    this.isParentLogged = true;
  }

  catchEvent(event:any){
    console.log("event received in Prent :::" + event);
    
  }
}
