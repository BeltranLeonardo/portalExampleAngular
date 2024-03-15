import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { NgbDatepickerModule, NgbDateAdapter, NgbDateStruct, NgbDatepicker, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [FontAwesomeModule, NgbDatepickerModule, FormsModule, JsonPipe, NgbDatepicker],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css',
})

export class InvoicesComponent {

  constructor(library: FaIconLibrary) {
    library.addIcons(faMagnifyingGlass, faCalendar);
  }

  model: string;
  model2: string;

}
