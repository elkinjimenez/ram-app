import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RamService {

  constructor(
    private http: HttpClient,
  ) { }

  getCharacter(params: any) {
    return this.http.get(environment.baseUrl + environment.character, { params })
  }

  getCharacterById(id: string) {
    return this.http.get(environment.baseUrl + environment.character + id)
  }

  getByUrl(url: string){
    return this.http.get(url);
  }

}
