import { HttpClientModule } from '@angular/common/http';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { isPlatformBrowser } from '@angular/common';
import { initFlowbite } from 'flowbite';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faUser, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { SaldoComponent } from '../saldo/saldo.component';
import 'flowbite';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    MenuComponent,
    FontAwesomeModule,
    SaldoComponent,
  ],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css',
})
export class MasterComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, library: FaIconLibrary) {
    library.addIcons(faUser, faCircleUser);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
    }
  }
}
