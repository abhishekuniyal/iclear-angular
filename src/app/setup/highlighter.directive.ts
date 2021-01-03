import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit{

  constructor(private el: ElementRef) { }

  ngOnInit(){
    this.el.nativeElement.style.backgroundColor = 'red';
  }
}
