import { Component, OnInit } from "@angular/core";
import { EventService } from "../services/event.service";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline-page.component.html",
  styleUrls: ["./timeline-page.component.css"]
})
export class TimelinePageComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      this.events = data;
      console.log("Event are: ", data);
      this.events.sort(function(e1, e2) {
        const d1 = new Date(e1.timestamp).getTime();
        const d2 = new Date(e2.timestamp).getTime();
        return d1 - d2;
      });
    });
  }

  getEventsByDay(events: any) {}


}
