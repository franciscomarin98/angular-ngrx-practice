import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadedItems, loadItems} from "../../../../state/actions/item.actions";
import {Observable} from "rxjs";
import {selectLoading} from "../../../../state/selectors/item.selectors";
import {AppState} from "../../../../state/app.state";

@Component({
    selector: 'app-show-case-page',
    templateUrl: './show-case-page.component.html',
    styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {

    loading$: Observable<boolean> = new Observable();

    constructor(private store: Store<AppState>) {
    }

    ngOnInit(): void {
        this.loading$ = this.store.select(selectLoading);
        this.store.dispatch(loadItems());
    }


}
