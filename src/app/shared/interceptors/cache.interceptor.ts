import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler, HttpEventType, HttpResponse } from "@angular/common/http";
import { Observable, of, pipe } from "rxjs";
import { HttpCacheService } from "../services/http-cache.service";
import { tap } from "rxjs/operators";

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cacheService: HttpCacheService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // pass along non-cacheable requests and invalidate cache
    if (req.method !== 'GET') {
      console.log(`Invalidating cache: ${req.method} ${req.url}`);
      this.cacheService.invalidateCache();
      return next.handle(req);
    }
    // Attempt to retrievea cache response
    const cachedResponse: HttpResponse<any> = this.cacheService.get(req.url);
    // Return cached response
    if (cachedResponse) {
      console.log(`Returning a cached response: ${cachedResponse.url}`);
      console.log(cachedResponse);
      return of(cachedResponse);
    }
    // Send request to server and add response to cache
    return next.handle(req)
      .pipe(
        tap(
          event => {
            if (event instanceof HttpResponse) {
              console.log(`Adding item to cache ${req.url}`);
              this.cacheService.put(req.url, event);
            }
          }
        )
      );
  }
}
