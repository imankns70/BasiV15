import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, of, retry, tap, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private donuts: Donut[] = [];
  constructor(private httpclient: HttpClient) { }

  read() {
    debugger
    if (this.donuts.length) {
      return of(this.donuts)
    }
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Api-Token": "as4d4sa"
    });


    const options = {
      headers
    }
    return this.httpclient.get<Donut[]>(`/api/donuts`, options).pipe(
      tap((donuts: Donut[]) => {
        
        this.donuts == donuts
      }),
      retry({ count: 3, delay: 5000 }),
      //retryWhen((errors)=> errors.pipe(delay(5000),take(2))),
      catchError(this.errorHandler)
    );
  }

  readOne(id: string | null) {
    return this.read().pipe(
      map((donuts: Donut[]) => {
        const donut = donuts.find((donut: Donut) => donut.id == id);
        if (donut) {
          return donut;
        }
        return { name: '', icon: '', price: 0, description: '' };
      })

    )

  }
  create(payload: Donut) {
    return this.httpclient.post<Donut>(`/api/donuts`, payload)
      .pipe(
        // tap((donut: Donut) => {
        //   this.donuts = [...this.donuts, donut]
        // }),
        catchError(this.errorHandler)
      )

  }

  update(payload: Donut) {
    return this.httpclient.put<Donut>(`/api/donuts/${payload.id}`, payload)
      .pipe(
        tap((donut: Donut) => {

          this.donuts = this.donuts.map((donut: Donut) => {
            
            if (donut.id == payload.id)
              return payload;
            return donut;
          })
        })
        ,
        catchError(this.errorHandler)
      );
  }

  delete(payload: Donut) {
    return this.httpclient.delete<Donut>(`/api/donuts/${payload.id}`)
      .pipe(
        tap((donut: Donut) => {
          this.donuts = this.donuts.filter((donut: Donut) => donut.id !== payload.id);

        }),
        catchError(this.errorHandler)
      );
  }

  private errorHandler(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      //client-side
      console.warn('Client', err.message);
    } else {
      //server-side
      console.warn('Server', err.message);
    }
    return throwError(() => new Error(err.message))
  }
}
