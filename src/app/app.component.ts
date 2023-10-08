import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'CKEditor in Angular';
  public bioForm!: FormGroup;
  public Editor = ClassicEditor;
  public defaultData = `<p>Hello, world!</p>`;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.bioForm = this.formBuilder.group({
      name: [''],
      email: [''],
      bioContent: [''],
    });
  }

  public submitForm() {
    console.log(this.bioForm.value);
    this.bioForm.reset();
  }
}
