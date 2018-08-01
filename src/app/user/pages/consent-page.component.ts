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
  loading = false;
  consentForm: FormGroup;
  consentData: any;
  termsText: string;
  consent: Consent;
  @ViewChild("consentFormWrapper") consentFormWrapper: ElementRef;
  @ViewChild("termsAndConditions") termsAndConditions: ElementRef;

  ngOnInit() {
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

    const userId = "Daniel";
    /*
    this.consentDataService.getConsent(userId).subscribe(data => {
        this.consent = new Consent(false, data.consentItems);
    });
*/
    this.loading = true;
    this.consentDataService.getConsent(userId).subscribe(data => {
      this.loading = false;
      this.consent = data;
      console.log("THIS CONSENT: ", this.consent);
    });

    for (let i = 0; i < 100; i++) {
      // tslint:disable-next-line:max-line-length
      this.termsText +=
        "Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean";
    }
  }

  constructor(
    private consentDataService: ConsentService // private loggingService: LoggingService
  ) {}

  onPanelExpanded(panelName: any) {
    // this.loggingService.logEvent("Expanded: " + panelName);
  }

  onSubmit() {
    this.consentDataService.setConsent("Daniel", this.consent);
    // console.log("LOG: ", this.loggingService.getLog());
  }
}
