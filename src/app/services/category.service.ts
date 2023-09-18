import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryResponse } from '../models/Category';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {
  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>('category');
  }

  delete(_id: string): Observable<CategoryResponse> {
    return this.http.delete<CategoryResponse>(`category/${_id}`);
  }

}
