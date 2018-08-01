import { ConsentItem } from "./consent-item";

export class Consent {
  constructor(
    public consented: boolean,
    public consentItems: ConsentItem[]
  ) {}
}
