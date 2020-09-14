import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';

import { MenuItem } from './models';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LayoutComponent implements OnInit, OnDestroy {
  @Input()
  menuItems: MenuItem[];

  @Input()
  appTitle = 'NGXS Diner';

  clickToClose = false;

  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  menuItemAction(item: MenuItem): boolean {
    if (item && item.actionOnClick) {
      return item.actionOnClick();
    }
    return true;
  }

  openExternal(item: MenuItem): boolean {
    if (item && item.externalLink) {
      window.open(item.externalLink, '_blank');
      return true;
    }
    return false;
  }
}
