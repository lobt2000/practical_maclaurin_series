import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptService {
  showGraph : Subject<any> = new Subject()
  graphInfo : Subject<any> = new Subject()
  constructor() { }
}
