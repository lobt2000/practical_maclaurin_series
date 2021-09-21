import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { SubscriptService } from '../services/subscript.service';

@Component({
  selector: 'app-table-of-value',
  templateUrl: './table-of-value.component.html',
  styleUrls: ['./table-of-value.component.scss']
})
export class TableOfValueComponent implements OnInit, OnChanges {
  @Input() calculateValue;
  @Output() result: EventEmitter<any> = new EventEmitter();
  x: Array<any> = [];
  Res: Array<any> = [];
  Res16: Array<any> = [];
  Res8: Array<any> = [];
  Abs8: Array<any> = [];
  Abs16: Array<any> = [];
  Delta8: Array<any> = [];
  Delta16: Array<any> = [];
  constructor(private SubscriptService: SubscriptService) { }

  ngOnInit(): void { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.calculateValue && changes.calculateValue.currentValue) {
      for (let i = +this.calculateValue.min; i <= +this.calculateValue.max; i += +this.calculateValue.dx) {
        var res = this.Function(i.toFixed(2));
        this.x.push(i.toFixed(2))
        this.Res.push(res);
        this.Res16.push(res.toFixed(7));
        this.Res8.push(res.toFixed(4));
      }

      for (var i = 0; i < this.Res.length; i++) {
        let abs8 = Math.abs(+this.Res[i] - +this.Res8[i]);
        let abs16 = Math.abs(+(this.Res[i]) - +(this.Res16[i]));

        this.Abs8.push(abs8);
        this.Abs16.push(abs16);

        let delta8 = abs8 / +(this.Res[i]);
        let delta16 = abs16 / +(this.Res[i]);

        this.Delta8.push(delta8);
        this.Delta16.push(delta16);
      }
      this.SubscriptService.showGraph.next(true);
      this.SubscriptService.graphInfo.next({
        x: this.x,
        Abs16: this.Abs16,
        Abs8: this.Abs8,
        Delta8: this.Delta8,
        Delta16: this.Delta16,
      })
    } else {
      this.calculateValue = null;
    }
  }

  Function(x): number {
    return 1 - (+this.calculateValue.m / this.rFact(1)) * x + ((+this.calculateValue.m * (+this.calculateValue.m - 1)) / this.rFact(2)) * Math.pow(x, 2) - ((+this.calculateValue.m * (+this.calculateValue.m - 1) * (+this.calculateValue.m - 2)) / this.rFact(3)) * Math.pow(x, 3) + ((+this.calculateValue.m * (+this.calculateValue.m - 1) * (+this.calculateValue.m - 2) * (+this.calculateValue.m - 3)) / this.rFact(4)) * Math.pow(x, 4) -
      ((+this.calculateValue.m * (+this.calculateValue.m - 1) * (+this.calculateValue.m - 2) * (+this.calculateValue.m - 3) * (+this.calculateValue.m - 4)) / this.rFact(5)) * Math.pow(x, 5);
  }

  rFact(num) {
    if (num === 0) { return 1; }
    else { return num * this.rFact(num - 1); }
  }
}
