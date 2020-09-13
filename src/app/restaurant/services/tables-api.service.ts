import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Table } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TablesApiService {
  constructor(private http: HttpClient) {}

  public loadTables(): Observable<Table[]> {
    return this.http.get<Table[]>('/assets/data/tables.json');
  }
}
