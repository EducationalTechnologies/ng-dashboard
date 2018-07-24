import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

const events = [
  {
    timestamp: "2018-04-18T13:05:00+02:00",
    version: "1.0.0",
    actor: "You",
    verb: "submitted",
    object: "Assignment 003",
    result: {
      score: {
        scaled: 0.75
      },
      success: true,
      completion: true
    }
  },
  {
    timestamp: "2018-04-04T21:55:00+02:00",
    version: "1.0.0",
    actor: "You",
    verb: "stopped watching",
    object: "Lecture Video 002",
    result: {
      score: {
        scaled: 0.75
      },
      success: true,
      completion: true
    }
  },
  {
    timestamp: "2018-04-04T09:45:00+02:00",
    version: "1.0.0",
    actor: "You",
    verb: "started watching",
    object: "Lecture Video 002",
    course: "Seminar Learning Analytics",
    result: {
      score: {
        scaled: 0.75
      },
      success: true,
      completion: true
    }
  },
  {
    timestamp: "2018-04-04T14:10:00+02:00",
    version: "1.0.0",
    actor: "Hendrik Drachsler",
    verb: "Graded",
    object: "Assignment 002",
    course: "Seminar Learning Analytics",
    result: {
      score: {
        scaled: 0.75
      },
      success: true,
      completion: true
    }
  },
  {
    timestamp: "2018-04-04T17:23:00+02:00",
    version: "1.0.0",
    actor: "You",
    verb: "submitted",
    object: "Assignment 002",
    course: "Seminar Learning Analytics",
    result: {
      score: {
        scaled: 0.75
      },
      success: true,
      completion: true
    }
  }
];

@Injectable({
  providedIn: "root"
})
export class EventService {
  events: Observable<any> = of(events);

  getEvents() {
    return this.events;
  }

  constructor() {}
}
