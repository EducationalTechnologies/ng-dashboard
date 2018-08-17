import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Consent } from "../models/consent";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ConsentService } from "../services/consent.service";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { getConsent, State, getAuthenticatedUser } from "../../reducers";
import { User } from "../models/user";
import { ConsentSubmitAction, ConsentRetrieveAction } from "../user.actions";
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
  user: User;
  @ViewChild("consentFormWrapper")
  consentFormWrapper: ElementRef;
  @ViewChild("termsAndConditions")
  termsAndConditions: ElementRef;

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

    this.store.select(getAuthenticatedUser).subscribe(u => {
      this.user = u;
      this.store.dispatch(new ConsentRetrieveAction({ user: this.user }));
    });

    this.store.select(getConsent).subscribe(c => {
      console.log("THIS CONSENT: ", c);
      this.consent = c;
    });

    this.loading = true;

    for (let i = 0; i < 100; i++) {
      // tslint:disable-next-line:max-line-length
      this.termsText +=
        "Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean";
    }
  }

  constructor(
    private consentDataService: ConsentService,
    private store: Store<State>
  ) {}

  onPanelExpanded(panelName: any) {
    // this.loggingService.logEvent("Expanded: " + panelName);
  }

  onSubmit() {
    // this.consentDataService.setConsent("Daniel", this.consent);
    this.store.dispatch(
      new ConsentSubmitAction({ user: this.user, consent: this.consent })
    );
  }
}
