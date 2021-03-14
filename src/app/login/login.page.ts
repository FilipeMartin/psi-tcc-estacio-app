import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  load: HTMLIonLoadingElement;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  async submit() {
    if(this.form.valid) {
      await this.loading();
      const auth = this.form.value;
      const result = this.authService.login(auth.login, auth.password);

      if(result) {
        this.form.reset();
        this.router.navigate(["/inicio"]);
      } else {
        this.alertMessage();
      }
      this.load.dismiss();
    }
  }

  async alertMessage() {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: 'Login e/ou senha inválidos!',
      buttons: ['VOLTAR']
    });
    await alert.present();
  }

  async loading() {
    this.load = await this.loadingController.create({
      message: 'Autenticando...',
      duration: 60000
    });
    await this.load.present();
  }

}
