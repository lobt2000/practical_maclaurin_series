import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscriptService } from '../services/subscript.service';

@Component({
  selector: 'app-enter-value',
  templateUrl: './enter-value.component.html',
  styleUrls: ['./enter-value.component.scss']
})
export class EnterValueComponent implements OnInit {
  form: FormGroup;
  isDisabled: boolean = true;
  @Output() formValue: EventEmitter<any> = new EventEmitter();
  @Output() showGraph: EventEmitter<any> = new EventEmitter();
  constructor(private fb: FormBuilder,private SubscriptService: SubscriptService) { }
  ngOnInit(): void {
    this.SubscriptService.showGraph.subscribe(res => {
      this.isDisabled = res;
    })
    this.buildForm();
  }

  buildForm(){
    this.form = this.fb.group({
      min: this.fb.control('', Validators.required),
      max: this.fb.control('', Validators.required),
      m: this.fb.control('', Validators.required),
      dx: this.fb.control('', Validators.required)
    })
  }

  calculateFormul(){
    this.formValue.emit(this.form.value)
  }
  resetAll(){
    this.form.reset();
    this.SubscriptService.graphInfo.next('');
    this.showGraph.emit(this.isDisabled)
  }
}
