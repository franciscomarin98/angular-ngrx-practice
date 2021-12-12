import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY, Observable} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {ShowCaseService} from "@modules/show-case/services/show-case.service";

@Injectable()
export class ItemsEffects {

    constructor(
        private actions$: Actions,
        private showCaseService: ShowCaseService
    ) {
    }

    loadItems$ = createEffect(() => this.actions$.pipe(
            ofType('[Item List] Load items'),
            mergeMap(() => this.showCaseService.getDataApi()
                .pipe(
                    map(items => ({type: '[Item List] Item List loaded successfully', items})),
                    catchError(() => EMPTY)
                ))
        )
    );


}
