// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  throwError  } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NotFoundError, BadInput, AppError } from '../../errorhandling';
import { ApiEndpointsService } from './api-endpoints.service';
import { ServiceType } from 'src/app/shared/enums/ServiceType';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(
    // Angular Modules
    private http: HttpClient,
    private apiEndpointsService: ApiEndpointsService
  ) { }
  public get(url: string, options?: any) {

    return this.http.get(url, options) .pipe(
      map(response => response),
   catchError(this.handleError)
 );
  }
  public post(url: string, data: any, serviceType: ServiceType, options?: any) {

    url = this.apiEndpointsService.createUrl(url, true, serviceType);
    return this.http.post(url, data, options)
    .pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }
  public put(url: string, data: any, options?: any) {
    return this.http.put(url, data, options)
    .pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }
  public delete(url: string, options?: any) {
    return this.http.delete(url, options)
    .pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response){
    if (error.status === 404) {
      return throwError( new NotFoundError());
    }

    if (error.status === 400) {
      return throwError(new BadInput(error));
    }

    return throwError(new AppError(error));
  }

}
