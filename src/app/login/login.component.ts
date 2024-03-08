import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LoginService } from '../login.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [LoginService]
})
export class LoginComponent {
  constructor(private service: LoginService, private router: Router) {  }

  title = 'portalExampleAngular';
  clientNumber :number;
  password : string;
  response : string;

  doLogin() {
    // this.service.login(this.clientNumber, this.password).subscribe({
    //   next: (resp: any) => {
    //     console.log(resp);
    //     if (resp != 0){
          this.router.navigate(['/master'])
    //     }

    //     else
    //       this.response  = "Usuario o Contraseña invalidos.";
    //   },
    //   error(err) {
    //     console.log(err.error);
    //     // this.response = "error en la api";
    //   },
    // });
  }

}
