import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonAvatar, IonCardSubtitle, IonCardTitle, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { RamService } from 'src/app/services/ram.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonInfiniteScrollContent, IonInfiniteScroll, IonCardTitle, IonCardSubtitle, IonAvatar, IonCardContent, IonGrid, IonRow, IonCol, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SharedModule]
})
export class HomePage implements OnInit {

  characters: any[] = [];
  params = {} as any;

  constructor(
    private ramService: RamService,
  ) { }

  ngOnInit() {
    this.params.page = 0;
    this.getCharacters();
  }

  getCharacters(event?: any) {
    this.params.page += 1;
    this.ramService.getCharacter(this.params).subscribe({
      next: (res: any) => {
        this.characters.push(...res.results);
        console.log(this.characters);
        if (event) event.target.complete();
      }, error: (err: any) => {
        if (event) event.target.complete();
      }
    });
  }

}
