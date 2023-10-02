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
      name: ['', Validators.required],
      email: ['', Validators.required],
      bioContent: ['', Validators.required],
    });
  }

  public submitForm() {
    this.bioForm.markAllAsTouched();
    console.log(this.bioForm.value);
    alert('Form submitted');
  }
}
