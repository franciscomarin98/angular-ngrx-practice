import {ItemState} from "@core/models/Item.state";
import {ActionReducerMap} from "@ngrx/store";
import {itemsReducer} from "./reducers/item.reducers";

export interface AppState {
    items: ItemState,
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    items: itemsReducer
}
