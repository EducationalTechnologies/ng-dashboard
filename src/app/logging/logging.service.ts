import { Injectable, ElementRef } from "@angular/core";
import { ScrollLogger } from "./scroll-logger";
import { ClickLogger } from "./click-logger";

declare var Roll: any;

@Injectable({
  providedIn: "root"
})
export class LoggingService {
  scrollLogger: ScrollLogger;
  clickLogger: ClickLogger;

  constructor() {
    this.scrollLogger = new ScrollLogger();
    this.clickLogger = new ClickLogger();
  }

  public logEvent(thing: any) {
    console.log("Tracked: ", thing);
  }

  public startScrollLogging() {
    this.scrollLogger.startLogging();
  }

  public startClickLogging() {
    this.clickLogger.startLogging();
  }

  public getLog() {
    return {
      "scroll": this.scrollLogger.getLog()
    };
  }
}
