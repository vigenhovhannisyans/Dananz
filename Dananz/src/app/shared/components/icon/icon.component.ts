import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  @Input()
  public name!: string;

  @Input()
  public width!: number;

  @Input()
  public height!: number;

  @Input()
  public isIcon: boolean = true;

}
