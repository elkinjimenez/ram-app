import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonIcon, IonBackButton, IonCardSubtitle, IonCardHeader, IonCardTitle, IonAvatar, IonGrid, IonLabel, IonRow, IonCol, IonItem, IonCardContent, IonCard } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RamService } from 'src/app/services/ram.service';
import { addIcons } from 'ionicons';
import { videocamOutline, chevronDownOutline } from 'ionicons/icons';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.page.html',
  styleUrls: ['./characters-detail.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonItem, IonCol, IonRow, IonLabel, IonGrid, IonAvatar, IonCardTitle, IonCardHeader, IonCardSubtitle, IonBackButton, IonIcon, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SharedModule]
})
export class CharactersDetailPage implements OnInit {

  id: string = "";

  character: any = {};
  episodes: any = [];

  constructor(
    private actRoute: ActivatedRoute,
    private ramService: RamService,
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id') || "";
    addIcons({videocamOutline,chevronDownOutline});
    console.log(this.character.name);
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getCharacterById();
  }

  getCharacterById() {
    this.ramService.getCharacterById(this.id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.character = res;
        this.getEpisodes();
      }, error: (err: any) => {
        console.error("NO HAY MAS PERSONAJES");
      }
    });
  }

  getEpisodes() {
    for (let url of this.character.episode) {
      this.ramService.getByUrl(url).subscribe({
        next: (res: any) => {
          this.episodes.push(res);
          console.log(res);
        }, error: (err: any) => {
          console.error("NO HAY MAS EPISODIOS");
        }
      });
    }
  }

}
