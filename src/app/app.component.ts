import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker'
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public joke: any;
  title = 'jokes';
  constructor(private swUpdate: SwUpdate, private dataService: DataService) {
    swUpdate.available.subscribe((event) => {
      swUpdate.activateUpdate().then(() => document.location.reload());
    })
  }

  ngOnInit() {
    this.dataService.gimmeJokes().subscribe(res => {
      this.joke = res;
    })
  }
}
