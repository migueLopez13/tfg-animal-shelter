import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

export class BaseRepository<T> {
  baseUrl = 'http://localhost:8000'


  constructor(protected _http: HttpClient, protected endpoint: string) {
    this.baseUrl = `${this.baseUrl}/${endpoint}`
  }

  save(t: T): Observable<T> {
    return this._http.post<T>(this.baseUrl, t);
  }

  update(id: number, t: T): Observable<T> {
    return this._http.put<T>(`${this.baseUrl}/${id}`, t);
  }

  findOne(id: number): Observable<T> {
    return this._http.get<T>(`${this.baseUrl}/${id}`);
  }

  findAll(): Observable<T[]> {
    return this._http.get<T[]>(this.baseUrl)
  }

  delete(id: number): Observable<T> {
    return this._http.delete<T>(`${this.baseUrl}/${id}`);
  }

}