import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Consent } from "../models/consent";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ConsentService } from "../services/consent.service";
import { Observable } from "rxjs";
// import { LoggingService } from "../logging/logging.service";
@Component({
  selector: "app-consent-page",
  templateUrl: "./consent-page.component.html",
  styleUrls: ["./consent-page.component.css"]
})
export class ConsentPageComponent implements OnInit {
  model: Consent;
  consentForm: FormGroup;
  consentData: any;
  termsText: string;
  @ViewChild("consentFormWrapper") consentFormWrapper: ElementRef;
  @ViewChild("termsAndConditions") termsAndConditions: ElementRef;

  ngOnInit() {
    this.model = new Consent(false, false, false, null);

    this.consentForm = new FormGroup({
      hasReadIntroduction: new FormControl(false, Validators.requiredTrue),
      hasReadDataUsage: new FormControl(false, Validators.requiredTrue),
      hasReadTermsAndConditions: new FormControl(
        false,
        Validators.requiredTrue
      ),
      consentArs: new FormControl(false)
    });
    this.consentDataService.getConsentData().subscribe(data => {
      this.consentData = data;
    });

    for (let i = 0; i < 100; i++) {
      // tslint:disable-next-line:max-line-length
      this.termsText +=
        "Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean";
    }
  }

  constructor(
    private consentDataService: ConsentService,
    // private loggingService: LoggingService
  ) {}

  onPanelExpanded(panelName: any) {
    // this.loggingService.logEvent("Expanded: " + panelName);
  }

  onSubmit() {
    // console.log("LOG: ", this.loggingService.getLog());
  }
}
