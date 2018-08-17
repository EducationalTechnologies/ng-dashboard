import { Injectable, isDevMode } from "@angular/core";
import { Observable, of } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Consent } from "../models/consent";
import { map } from "rxjs/operators";
import { User } from "../models/user";
import { Router } from "../../../../node_modules/@angular/router";
import { getAuthenticatedUser, State } from "../../reducers";
import { Store } from "@ngrx/store";
import { ApiService, UserService } from "../../core/services";
import { MOCK_USER } from "../../core/services/user.service";

const consentData = {
  introduction: [
    // tslint:disable-next-line:max-line-length
    "This form provides you with the information about the data that we aim to collect from you, for what purpose this data collection occurs and who will have access to the data.",
    // tslint:disable-next-line:max-line-length
    "In the following sections, we will list all the types of data that we are collecting. You can give your individual consent for each of these data items separately. When you choose to not share a particular type of data, this may mean that some functionality within the Trusted Learning Analytics environment may not be available to you. However, beyond this loss of functionality, you will suffer no disadvantage from not consenting to the collecting and processin of you data.",
    // tslint:disable-next-line:max-line-length
    "If you choose to not share a particular type of data, this may mean that some functionality within the Trusted Learning Analytics environment may not be available to you.",
    "Beyond this loss of functionality, you will suffer no disadvantage from not consenting to the collecting and processin of you data."
  ],
  disclaimerDataUsage: [
    "Your data will be used in the context of the Trusted Learning Analytics environment. ",
    // tslint:disable-next-line:max-line-length
    "In the following sections, we will list all the types of data that we are collecting. You can give your individual consent for each of these data items separately. When you choose to not share a particular type of data, this may mean that some functionality within the Trusted Learning Analytics environment may not be available to you. However, beyond this loss of functionality, you will suffer no disadvantage from not consenting to the collecting and processin of you data."
  ],
  consentItems: [
    {
      name: "Audience Response System Data",
      dataCollected: [
        "Your answers to the questions that are asked in the ARS app",
        "The time when you answer these questions"
      ],
      icon: "record_voice_over",
      storageDuration: "250"
    },
    {
      name: "Location Tracking Data",
      dataCollected: [
        "The location data as estimated by the tracking beacon in the live lecture"
      ],
      icon: "gps_fixed",
      storageDuration: "120"
    },
    {
      name: "Interactions with the Dashboard",
      dataCollected: [
        "The elements that you click on",
        "The amount of time you spend on a page, including this one",
        ""
      ],
      icon: "list_alt",
      storageDuration: "120"
    }
  ]
};

@Injectable({
  providedIn: "root"
})
export class ConsentService {
  constructor(
    private apiService: ApiService,
    private store: Store<State>
  ) {
    this.init();
  }

  consentData: Observable<any> = of(consentData);
  consent: Consent;
  user: User;

  init() {
    this.store.select(getAuthenticatedUser).subscribe(u => {
      console.log("Consent Service found authenticated User: ", u);
      this.user = u;

      if (!this.user && isDevMode()) {
        this.user = MOCK_USER;
      }
    });
  }

  getConsentData() {
    return this.consentData;
  }

  getConsent(): Observable<Consent> {
    if (this.user) {
      const url = `/users/${this.user.id}/consent`;
      return this.apiService.get(url).pipe(
        map(data => {
          return data;
        })
      );
    }
  }

  setConsent(consent: Consent): Observable<any> {
    console.log("Setting Consent");
    const url = `/users/${this.user.id}/consent`;
    return this.apiService.post(url, consent).pipe(
      map(response => {
        console.log("Received Response to Setting Consent: ", response);
        return response;
      }
    ));
  }
}
