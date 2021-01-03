import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt',
  pure: true
})
export class SqrtPipe implements PipeTransform {

  transform(value: number): number {
    console.log("tansform called");
    
    return Math.sqrt(value);
  }

}
