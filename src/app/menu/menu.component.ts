import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// '@fontawesome/angular-font'
import { faDollarSign, faQrcode, faFileInvoiceDollar, faCommentAlt, faUnlock, faPowerOff, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  /**
   *
   */
  constructor(library: FaIconLibrary) {
    library.addIcons(faDollarSign, faQrcode, faFileInvoiceDollar, faCommentAlt, faUnlock, faPowerOff, faBars);

  }
}
