import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Livre } from './livre'

@Injectable({
	providedIn: 'root'
})

export class BiblioApiService {
	private apiUrl = "http://localhost:5000/"

  private header: HttpHeaders = new HttpHeaders({'Content-type': 'application/json', Authorization: localStorage.getItem('id_token')})

  constructor(private http: HttpClient) { }

  getAuth(name: string){
    return this.http.post(this.apiUrl + "auth/", {"name":name})
  }

  getLivres(){
    return this.http.get(this.apiUrl + "livres/", {headers: this.header})
  }

  getLivre(id: number){
    return this.http.get(this.apiUrl+ "Livres/" + id, {headers: this.header})
  }

  getPages(id: number){
    return this.http.get(this.apiUrl+ "Livres/" + id + "/pages/", {headers: this.header})
  }

  getPage(idL: number, idP: number){
    return this.http.get(this.apiUrl+ "Livres/" + idL + "/pages/" + idP, {headers: this.header})
  }

  newLivre(numero: number, titre: string, pages: [string]){
    var body = {
        "numero":numero,
        "titre":titre,
        "pages":pages
      }
    return this.http.post(this.apiUrl + "Livres/", body, {headers: this.header})
  }

  delLivre(id: number){
    return this.http.delete(this.apiUrl + "Livres/" + id, {headers: this.header})
  }

  modifLivre(numero: number, titre: string, pages: [String]){
    var body = {
        "numero":numero,
        "titre":titre,
        "pages":pages
    }
    return this.http.put(this.apiUrl + "Livres/", body, {headers: this.header})
  }
}