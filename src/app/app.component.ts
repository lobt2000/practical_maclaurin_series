import { Component } from '@angular/core';
import { SubscriptService } from './services/subscript.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practica1';
  calculateValue;
  resultForGraphics;
constructor(private subjectService: SubscriptService){}

  onGetFormValue(form){
    this.calculateValue = form;
  }
  onGetResultValue(form){
      this.resultForGraphics = true;
  }
}
