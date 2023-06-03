import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandchildren',
  templateUrl: './grandchildren.component.html',
  styleUrls: ['./grandchildren.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class GrandchildrenComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
