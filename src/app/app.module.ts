import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ROOT_REDUCERS} from "./state/app.state";
import { EffectsModule } from '@ngrx/effects';
import {ItemsEffects} from "./state/effects/item.effects.";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot(ROOT_REDUCERS),
        StoreDevtoolsModule.instrument({name: 'Ngrx Fundamentals'}),
        EffectsModule.forRoot([ItemsEffects]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
