import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-branch',
  templateUrl: './bank-branch.component.html',
  styleUrls: ['./bank-branch.component.css']
})
export class BankBranchComponent implements OnInit {

  @Input() loggedIn:boolean;

  @Output() statusUpdatedInChild = new EventEmitter();

  showFruits:boolean = true;
  fruits:any;
  selectedVal=1;
  date = new Date();

  jsonVal = {name:'abhi'}
  pipes:string = "pipes";
  arr = ['a1','a2','a3','a4','a5','a6','a7']

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("Value of loggedIn passed from Parent is :"+this.loggedIn);

    this.statusUpdatedInChild.emit('Message from child: Logged in status updated');

    this.fruits = ['apple', 'mango', 'banana'];
  }

  getColor(){
    return 'green';
  }

  routeToSibling1(){
    this.router.navigate(['sibling1']);
  }

}
