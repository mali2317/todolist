import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as quoteStore from './quote.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  quote: quoteStore.quoteReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export interface AppState {
  quote: quoteStore.State;
}

export const selectQuotes = createFeatureSelector<quoteStore.State>('quote');

export const getActiveQuote = createSelector(selectQuotes, (state: quoteStore.State) => state.activeQuote);
