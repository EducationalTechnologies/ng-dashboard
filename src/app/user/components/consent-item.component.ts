import { Component, OnInit, Input } from "@angular/core";
import { ConsentItem } from "../models/consent-item";

@Component({
  selector: "app-consent-item",
  templateUrl: "./consent-item.component.html",
  styleUrls: ["./consent-item.component.css"]
})
export class ConsentItemComponent implements OnInit {
  @Input() consentItem: ConsentItem;

  constructor() {}

  ngOnInit() {}
}
