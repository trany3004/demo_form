import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nameeditor',
  templateUrl: './nameeditor.component.html',
  styleUrls: ['./nameeditor.component.scss']
})
export class NameeditorComponent implements OnInit {
  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
