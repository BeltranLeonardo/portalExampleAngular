import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faMagnifyingGlass,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import {
  NgbDatepickerModule,
  NgbDateAdapter,
  NgbDateStruct,
  NgbDatepicker,
  NgbCalendar,
} from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [
    FontAwesomeModule,
    NgbDatepickerModule,
    FormsModule,
    JsonPipe,
    NgbDatepicker,
  ],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css',
})
export class InvoicesComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faMagnifyingGlass, faCalendar);
  }

  model: string;
  model2: string;

  customerArray: any;

  ngOnInit(): void {
    this.customerArray = [
      {
        song: 'The Sliding Mr. Bones (Next Stop, Pottersville)',
        artist: 'Malcolm Lockyer',
        year: '1960'
      },
      {
        song: 'Artist 2',
        artist: 'Song 2',
        year: '1980'
      },
      {
        song: 'Artist 3',
        artist: 'Song 3',
        year: '1990'
      },
      {
        song: 'Artist 4',
        artist: 'Song 4',
        year: '2010'
      },
      {
        song: 'Artist 4',
        artist: 'Song 4',
        year: '2010'
      },
      {
        song: 'Artist 4',
        artist: 'Song 4',
        year: '2010'
      }
    ];
  }
}
