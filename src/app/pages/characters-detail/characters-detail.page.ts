import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.page.html',
  styleUrls: ['./characters-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CharactersDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
