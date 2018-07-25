import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class SettingsService {
  constructor() {}

  settingsData: Observable<any> = of(data);

  getSettingsData() {
    return this.settingsData;
  }
}

export const data = [
  {
    title: "Learning Analytics Seminar",
    lecturer: "Hendrik Drachsler",
    startDate: "04.10.2018",
    widgets: [
      {
        name: "Assignment Grade Chart",
        data: ["Assignment Grades"]
      },
      {
        name: "Goal Attainment Widget",
        data: [
          "Number of videos watched",
          "Number of messages to peers",
          "Number of Forum Posts"
        ]
      },
      {
        name: "Social Graph",
        data: ["Number of messages to peers"]
      }
    ],
    data: [
      {
        name: "Number of Forum Posts",
        description:
          "The number of posts that you have written in the course forum",
        enabled: true,
        canBeDisabled: true
      },
      {
        name: "Contacts in Forum",
        description: "The persons you reply to in the forum",
        enabled: true,
        canBeDisabled: true
      },
      {
        name: "Assignment Grades",
        description:
          "The grades that you have received for your assignments in the course",
        enabled: true,
        canBeDisabled: false
      },
      {
        name: "Number of videos watched",
        description:
          "The number of course relevant videos that you have watched",
        enabled: true,
        canBeDisabled: true
      },
      {
        name: "Number of messages to peers",
        description:
          "The number of messages that you send to other course participants",
        enabled: false,
        canBeDisabled: true
      }
    ]
  },
  {
    title: "Computer Graphics Lecture",
    lecturer: "Detlef Krömker",
    startDate: "07.04.2018",
    widgets: [
      {
        name: "Assignment Grade Chart",
        data: ["Assignment Grades"]
      },
      {
        name: "Goal Attainment Widget",
        data: ["Number of videos watched"]
      },
      {
        name: "Compiler Warning Rank",
        data: ["Number of compiler warnings"],
        description:
          "A widget that displays the top 10 of the students with least number of compiler warnings for the assignments"
      },
      {
        name: "Goal Attainment Widget",
        data: [
          "Number of videos watched",
          "Number of messages to peers",
          "Number of Forum Posts"
        ]
      },
      {
        name: "Procrastination Widget",
        data: ["Date of Assignment Submission", "Number of videos watched"]
      }
    ],
    data: [
      {
        name: "Number of compiler warnings",
        description:
          "The number compiler warnings that still remained when you submitted the assignments.",
        enabled: true,
        canBeDisabled: true
      },
      {
        name: "Assignment Grades",
        description:
          "The grades that you have received for your assignments in the course",
        enabled: true,
        canBeDisabled: false
      },
      {
        name: "Number of videos watched",
        description:
          "The number of course relevant videos that you have watched",
        enabled: true,
        canBeDisabled: true
      },
      {
        name: "Date of Assignment Submission",
        description:
          "The number of messages that you sent to other course participants",
        enabled: false,
        canBeDisabled: true
      }
    ]
  }
];
