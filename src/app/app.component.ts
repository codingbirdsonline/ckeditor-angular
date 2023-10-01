import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'CKEditor in Angular';
  public name!: FormControl;
  constructor() {}
  ngOnInit(): void {
    this.name = new FormControl('', [Validators.required]);
  }
}