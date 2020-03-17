import { Observable } from "rxjs";

export class HttpUtil {
  public static createHttpObservable(url: string) {
    return Observable.create(observer => {
      fetch("/api/courses")
        .then(response => response.json())
        .then(body => {
          observer.next(body);
          observer.complete();
        })
        .catch(error => observer.error(error));
    });
  }
}
