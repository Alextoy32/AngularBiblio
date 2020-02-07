import { Component, OnInit } from '@angular/core';
import { BiblioApiService } from '../biblio-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  private idLivre
  public livre
  public editable = false

  constructor(private apiBiblio: BiblioApiService, private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idLivre = params.get("id")
    })
    this.apiBiblio.getLivre(this.idLivre).subscribe((res) => {
      if (res["status"] = true){
        this.livre = res["result"][0]
      } else {
        console.log(res["message"])
      }
    })
  }

  swapEditable(){
    this.editable = !this.editable
  }

  send(numero: number, titre: string){
    this.apiBiblio.modifLivre(this.livre.numero, titre, this.livre.pages).subscribe(res => {
      console.log(res)
      this.editable = false
      this.ngOnInit()
    })
  }

}
