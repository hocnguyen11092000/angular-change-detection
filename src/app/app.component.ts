import { Component, OnInit } from '@angular/core';
import { fromEvent, map, throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'change-detection';
  clientX = 0;

  ngOnInit(): void {
    // fromEvent(document, 'mousemove')
    //   .pipe(
    //     throttleTime(1000),
    //     map((event: any) => ({ x: event.clientX }))
    //   )
    //   .subscribe((val) => {
    //     this.clientX = val.x;
    //   });
  }
}
