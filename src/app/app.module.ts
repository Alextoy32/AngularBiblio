import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule, FormGroup } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { MatListModule, MatFormFieldModule, MatCardModule, MatInputModule, MatIconModule,  MatButtonModule } from '@angular/material'

import { BiblioComponent } from './biblio/biblio.component'
import { BiblioApiService } from './biblio-api.service'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LivreComponent } from './livre/livre.component'

@NgModule({
	declarations: [
		AppComponent,
		BiblioComponent,
		LivreComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		NoopAnimationsModule,
		HttpClientModule,
		MatListModule,
		MatFormFieldModule,
		MatCardModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule
	],
	providers: [BiblioApiService],
	bootstrap: [AppComponent]
})

export class AppModule { }