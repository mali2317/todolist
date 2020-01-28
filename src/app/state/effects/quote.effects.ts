import { Injectable } from '@angular/core';
import { fetchQuote, fetchQuoteSuccess, fetchQuoteError } from '../actions/quote.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { QuoteService } from '@app/home/quote.service';

@Injectable()
export class QuoteEffects {
  @Effect()
  fetchQuotes$ = this.actions$.pipe(
    ofType(fetchQuote),
    mergeMap((action: any) => {
      console.log(action);
      return this.quoteService.getRandomQuote(action).pipe(
        map((quote: string) => {
          return fetchQuoteSuccess({ quote: quote });
        }),
        catchError((errorMessage: string) => of(fetchQuoteError({ errorMessage: errorMessage })))
      );
    })
  );

  constructor(private actions$: Actions, private quoteService: QuoteService) {}
}
