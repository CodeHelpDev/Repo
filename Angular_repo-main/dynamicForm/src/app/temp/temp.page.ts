import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.page.html',
  styleUrls: ['./temp.page.scss'],
})
export class TempPage implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      sections: this.fb.array([])
    });
  }

  ngOnInit() {
    this.addSection(); // Start with one section
  }

  get sections() {
    return this.form.get('sections') as FormArray;
  }

  addSection() {
    const section = this.fb.group({
      name: [''],
      items: this.fb.array([])
    });
    this.sections.push(section);
  }

  removeSection(index: number) {
    this.sections.removeAt(index);
  }

  addItem(sectionIndex: number) {
    const items = this.getItems(sectionIndex);
    items.push(this.fb.control(''));
  }

  removeItem(sectionIndex: number, itemIndex: number) {
    const items = this.getItems(sectionIndex);
    items.removeAt(itemIndex);
  }

  private getItems(sectionIndex: number): FormArray {
    return this.sections.at(sectionIndex).get('items') as FormArray;
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
