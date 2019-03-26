import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`AddHeaderInterceptor - ${req.url}`);

    let jsonReq: HttpRequest<any> = req.clone({
      setHeaders: {'X-TOKEN-FAKE': 'XXXXXX-XXXXX-XXX'}
    });

    return next.handle(jsonReq);

  }

}
