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

  ngOnInit() {}
}
