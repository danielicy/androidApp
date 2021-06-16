
import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { HomeComponent } from './pages/home/home.component';
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'

const routes: Routes = [
  { path: '',
  loadChildren: () => import('./pages/home/home.module')
  .then(mod => mod.HomeModule)
  },
  { path: 'itemx', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent },
  { path: 'item/:id', component: ItemDetailComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
