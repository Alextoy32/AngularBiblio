import { Component, OnInit } from '@angular/core'

import { Livre } from '../livre'
import { BiblioApiService } from '../biblio-api.service'
import { Router } from '@angular/router'

@Component({
	selector: 'app-biblio',
	templateUrl: './biblio.component.html',
	styleUrls: ['./biblio.component.css']
})

export class BiblioComponent implements OnInit {
	biblio = []
	foos = []

	constructor(private biblioService: BiblioApiService, private router: Router) { }

	ngOnInit() {
		this.listeLivres()
	}

	listeLivres() {
		this.biblioService.getLivres().subscribe(
			liste => {
				console.log(liste)
				this.biblio = <[Livre]> liste["livres"]
			}
		)
	}

	supprimer(livre: Livre) {
		console.log(livre)
		this.biblioService.delLivre(livre.numero).subscribe(
			suppr => {
				console.log(suppr)
				this.listeLivres()
			}
		)
	}

	ajouter(numero: number, titre: string, page: string) {
		var pages: [string]
		this.foos.forEach(i => {
			pages.push(page)
		});
		console.log(pages)
		this.biblioService.newLivre(numero, titre, pages).subscribe(
			ajout => {
				console.log(ajout)
				this.listeLivres()
			}
		)
	}

	showLivre(id: number){
		this.router.navigate(["/livre/"+id])
	  }

	  addPage(){
		  this.foos.push(0)
	  }
}