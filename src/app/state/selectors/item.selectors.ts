import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";
import {ItemState} from "@core/models/Item.state";


export const selectItemsFeature = (state: AppState) => state.items;


export const selectLoading = createSelector(
    selectItemsFeature,
    (state: ItemState) => state.loading
);

export const selectListItems = createSelector(
    selectItemsFeature,
    (state: ItemState) => state.items
);
