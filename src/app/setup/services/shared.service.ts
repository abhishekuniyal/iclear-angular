import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private subject = new BehaviorSubject('');
  constructor() { }

  transferValues(val: any) {
    this.subject.next(val);
  }

  getValues(): Observable<any>{
    return this.subject as Observable<any>;
  }
}
