export class Consent {
  constructor(
    public hasCheckedIntroduction: boolean,
    public hasCheckedWhoIsDataFor: boolean,
    public hasReadTermsAndConditions: boolean,
    public hasCheckedArs: Map<string, boolean>
  ) {}
}
