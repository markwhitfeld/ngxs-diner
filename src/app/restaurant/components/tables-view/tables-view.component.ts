import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';

import { TableOrderViewModel } from '../../view-models/table-view-model.queries';

@Component({
  selector: 'app-tables-view',
  templateUrl: './tables-view.component.html',
  styleUrls: ['./tables-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablesViewComponent {
  @Input()
  tableOrders: TableOrderViewModel[] = [];

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
