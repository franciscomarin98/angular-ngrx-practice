import {createAction, props} from '@ngrx/store';
import {ItemModel} from "@core/models/Item.interface";

export const loadItems = createAction(
    '[Item List] Load items'
);

export const loadedItems = createAction(
    '[Item List] Item List loaded successfully',
    props<{ items: ItemModel[] }>()
)
