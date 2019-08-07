import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { HomePage } from "./home.page";

describe("HomePage", () => {
  let comp: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    comp = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
    comp = null;
    de = null;
    el = null;
  });

  it("should create", () => {
    expect(comp).toBeTruthy();
  });

  it("initialises with a title of My Page", () => {
    expect(comp["title"]).toEqual("My Page");
  });

  it("can set the title to a supplied value", () => {
    de = fixture.debugElement.query(By.css("ion-title"));
    el = de.nativeElement;

    comp.changeTitle("Your Page");
    fixture.detectChanges();
    expect(comp["title"]).toEqual("Your Page");
    expect(el.textContent).toContain("Your Page");
  });
});
