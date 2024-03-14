import { Routes } from '@angular/router';
import { MasterComponent } from './master/master.component';
import { LoginComponent } from './login/login.component';
import { SaldoComponent } from './saldo/saldo.component';
import { InvoicesComponent } from './invoices/invoices.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'master',
    component: MasterComponent,
    children: [
      { path: 'invoices', component: InvoicesComponent },
      { path: 'saldo', component: SaldoComponent },
      { path: '', component: SaldoComponent },
    ],
  },
  { path: 'invoices', component: InvoicesComponent },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

export class AppRoutingModule {}
