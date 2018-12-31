import { Page } from "../framework/page.js";
import { Button } from "./button.js";
import { Image } from "./image.js";
import { App, application } from "../app.js";

export class HomePage extends Page {
  constructor() {
    super("Home");
  }

  createElement() {
    super.createElement();

    let i = new Image("../image/img.jpg");
    i.appendToElement(this.element);

    let styleString =
      "width: 300px; height: 80px; font-size: 26px; margin: 10px;";

    let b = new Button("Car");
    b.setStyleString(styleString);
    b.appendToElement(this.element);
    b.element.click(() => application.activateRoute("Car"));

    b = new Button("Drones");
    b.setStyleString(styleString);
    b.appendToElement(this.element);
    b.element.click(() => application.activateRoute("Drone"));
  }

  getElementString() {
    return '<div style="text-align: center;"></div>';
  }
}
