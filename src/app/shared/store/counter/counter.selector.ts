import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterModel } from "./counter.model";
import { state } from "@angular/animations";

const getcounterstate = createFeatureSelector<counterModel>('counter');

export const getCounter = createSelector(getcounterstate,(state)=>{
    return state.counter
})

export const getName = createSelector(getcounterstate,(state)=>{
    return state.name
})