import { App } from "./app"

describe('AppComponent',() => {
  it('should have a difined title', () => {
    const component = new App();
    expect(component.title).toBeDefined();
  });
});