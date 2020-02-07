import { Component } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms';
import { BiblioApiService } from './biblio-api.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'AppRest'
	public isGood = true

	constructor(private apiBiblio: BiblioApiService, private route: Router) {

	}

	getNewToken(pseudo: string){
		if (pseudo != ''){
		  this.apiBiblio.getAuth(pseudo).subscribe((res) => {
			localStorage.setItem('id_token', <string> res);
			this.isGood = false
		  })
		}
	  }
}