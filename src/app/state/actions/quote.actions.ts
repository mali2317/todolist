import { createAction, props } from '@ngrx/store';

export const fetchQuote = createAction('[Quote] Fetch Quote', props<{ category: string }>());
export const fetchQuoteSuccess = createAction('[Quote] Fetch Quote Success', props<{ quote: string }>());
export const fetchQuoteError = createAction('[Quote] Fetch Quote Error', props<{ errorMessage: string }>());
export const clearAllQuotes = createAction('[Quote] Clear All Quotes');
