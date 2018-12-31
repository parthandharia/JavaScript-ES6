import $ from 'jquery';
import { ApplicationBase } from './framework/application-base.js'
import { Car } from './classes/car.js';
import { Drone } from './classes/drone.js';
import { DataError } from './services/data-error.js';
import { fleet } from './fleet-data.js'
import { FleetDataService } from './services/fleet-data-service.js';
import { Button } from './ui/button.js';
import { Image } from './ui/image.js';
import { TitleBar } from './ui/title-bar.js'
import { DataTable } from './ui/data-table.js';
import { GoogleMap } from './ui/google-map.js';
import { HomePage } from './ui/home-page.js';
import { CarPage } from './ui/Car-page.js';
import { DronePage } from './ui/drone-page.js';
import { MapPage } from './ui/map-page.js';




export class App extends ApplicationBase {

    constructor() {
        super('Fleet Manage');
        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);

        this.addRoute('Home', new HomePage(), true);
        this.addRoute('Car', new CarPage(), false);
        this.addRoute('Drone', new DronePage(), false);
        this.addRoute('Map', new MapPage(), false);
    }
}

export let application = new App();
application.show($('body'));


// // google maps
// let dataService = new FleetDataService();
// dataService.loadData(fleet);
// let centerOfMap = { lat:  40.775596, lng: -73.974615 };
// let map = new GoogleMap(centerOfMap, dataService.cars);
// map.appendToElement($("body"));
// //titlebar
// let td = new TitleBar("My Application");
// td.addLink("parth", "");
// td.addLink("pintu", "");
// td.appendToElement($("body"));

// //data table
// let headers = "License Make Model Miles".split(" ");
// let dataService = new FleetDataService();
// dataService.loadData(fleet);
// let dt = new DataTable(headers, dataService.cars);
// dt.appendToElement($("body"));

// //image
// let i = new Image("./image/img.jpg");
// i.appendToElement($("body"));

// //button
// let b = new Button("Click Me");
// b.appendToElement($("body"));

//  let cars = dataService.getCarSortByLicense();
//  let cars = dataService.filterCarsByMake("U");
//  for (let car of cars) console.log(car.license);
