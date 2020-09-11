import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
