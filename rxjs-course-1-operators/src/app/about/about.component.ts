import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { timer, fromEvent, Observable, noop } from "rxjs";
import { HttpUtil } from "../common/util.util";
import { map } from "rxjs/operators";
@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const http$ = HttpUtil.createHttpObservable("/api/courses");
    const courses$ = http$.pipe(
      map(response => Object.values(response["payload"]))
    );
    courses$.subscribe(
      val => console.log(val),
      noop,
      () => console.log("completed")
    );
  }
}
