import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data.service';
import * as i from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  drawerMode = 'push'
  constructor(private dataservice: DataService) {

  }

  homeIcon = i.faHome
  aboutIcon = i.faUser
  barsIcon = i.faBars


  ngOnInit(): void {
  }
}
