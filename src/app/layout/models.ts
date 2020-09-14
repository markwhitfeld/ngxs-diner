import { Observable } from 'rxjs';

export interface MenuItem {
  text: string;
  link?: string;
  externalLink?: string;
  actionOnClick?: () => boolean;
  hasAccess$: Observable<boolean>;
}
