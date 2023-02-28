import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss','./footer.component.media.scss']
})
export class FooterComponent implements OnInit {
  public emailForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });
  constructor() { }

  ngOnInit(): void {
  }

}
