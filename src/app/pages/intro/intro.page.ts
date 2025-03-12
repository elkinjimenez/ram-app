import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonText , IonProgressBar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [IonProgressBar, IonContent, IonText]
})
export class IntroPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1500);
  }

}
