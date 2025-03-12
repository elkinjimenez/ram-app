import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonAvatar, IonCardSubtitle, IonCardTitle, IonInfiniteScroll, IonInfiniteScrollContent, IonSearchbar, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { RamService } from 'src/app/services/ram.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { addIcons } from 'ionicons';
import { arrowUp } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonFabButton, IonFab, IonSearchbar, IonInfiniteScrollContent, IonInfiniteScroll, IonCardTitle, IonCardSubtitle, IonAvatar, IonCardContent, IonGrid, IonRow, IonCol, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SharedModule]
})
export class HomePage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent | undefined;

  characters: any[] = [];
  params = {} as any;

  constructor(
    private ramService: RamService,
  ) {
    this.params.count = 0;
    addIcons({ arrowUp });
  }

  ngOnInit() {
    this.params.page = 0;
    this.getCharacters();
  }

  getCharacters(event?: any) {
    this.params.page += 1;
    this.ramService.getCharacter(this.params).subscribe({
      next: (res: any) => {
        this.characters.push(...res.results);
        this.params.count = res.info.count;
        console.log(this.characters);
        if (event) event.target.complete();
      }, error: (err: any) => {
        console.error("NO HAY MAS PERSONAJES");
        if (event) event.target.complete();
      }
    });
  }

  searchCharacters() {
    this.params.page = 1;
    this.ramService.getCharacter(this.params).subscribe({
      next: (res: any) => {
        this.characters = res.results;
        this.params.count = res.info.count;
        console.log(this.characters);
      }, error: (err: any) => {
        console.error("NO HAY MAS PERSONAJES");
      }
    });
  }

  scrollToTop() {
    if (this.content != undefined) this.content.scrollToTop(400);
  }

}
