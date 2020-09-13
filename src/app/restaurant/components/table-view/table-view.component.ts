import { Component, NgModule, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [TableViewComponent],
  imports: [
    CommonModule
  ],
  exports: [TableViewComponent]
})
export class TableViewModule { }
