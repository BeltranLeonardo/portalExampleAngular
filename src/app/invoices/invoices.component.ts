import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css'
})

export class InvoicesComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, library: FaIconLibrary) {
    library.addIcons(faMagnifyingGlass);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
    }
  }

}
