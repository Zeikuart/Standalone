import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  private subject = new Subject<any>()

  constructor() { }

  sendClickEvent(value?:string) {

    this.subject.next(value)
  }

  getClickEvent(): Observable<any>{
    
    return this.subject.asObservable()
  }
}
