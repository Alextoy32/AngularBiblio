import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BiblioComponent } from './biblio/biblio.component'
import { LivreComponent } from './livre/livre.component'


const routes: Routes = [
	{ path: '', component: BiblioComponent },
	{ path: 'livre/:id', component: LivreComponent }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }