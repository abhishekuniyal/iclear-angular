import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import { BankBranchComponent } from './bank-branch/bank-branch.component';
import { HighlighterDirective } from './highlighter.directive';
import { SqrtPipe } from './sqrt.pipe';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ BankBranchComponent, HighlighterDirective, SqrtPipe, Sibling1Component, Sibling2Component],
  imports: [
    CommonModule,
    SetupRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[BankBranchComponent]
})
export class SetupModule { }
