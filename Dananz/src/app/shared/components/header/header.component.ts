import { Component, OnInit } from '@angular/core';
import { IRouter } from 'src/app/core/interfaces/router';
import { Routers } from './routes/routes';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.component.media.scss']
})
export class HeaderComponent implements OnInit {
  public routers!: IRouter[];
  public showNavbar: boolean = false;

  constructor() { }

  public ngOnInit(): void {
    this.routers = Routers
  }

  public toggleNav(): void {
    this.showNavbar = !this.showNavbar
  }

}
