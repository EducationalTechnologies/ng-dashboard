import { SrlWidgetModule } from './srl-widget.module';

describe('SrlWidgetModule', () => {
  let srlWidgetModule: SrlWidgetModule;

  beforeEach(() => {
    srlWidgetModule = new SrlWidgetModule();
  });

  it('should create an instance', () => {
    expect(srlWidgetModule).toBeTruthy();
  });
});
