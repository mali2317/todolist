import { Action, createReducer, on } from '@ngrx/store';
import * as QuoteActions from '../actions/quote.actions';

export interface State {
  quotes: string[];
  activeQuote: string;
  errorMessage: string;
}

export const initialState: State = {
  quotes: [],
  activeQuote: '',
  errorMessage: null
};

export const quoteReducer = createReducer(
  initialState,
  on(QuoteActions.clearAllQuotes, state => {
    const newState = { ...state };
    newState.quotes = [];
    newState.activeQuote = '';
    return newState;
  }),

  on(QuoteActions.fetchQuoteSuccess, (state: State, payload: any) => {
    const newState = { ...state };
    newState.quotes = newState.quotes.concat([payload.quote]);
    newState.activeQuote = payload.quote;
    return newState;
  }),

  on(QuoteActions.fetchQuoteError, (state: State, payload: any) => {
    const newState = { ...state };
    newState.errorMessage = payload.errorMessage;
    return newState;
  })
);
