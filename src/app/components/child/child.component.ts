import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  @Input() data: any;
  a: string = '';
  constructor(private _cdr: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => {
      this.setA();
    }, 10000);
  }

  setA() {
    this.a = 'a';
    this._cdr.detectChanges();
  }
}
