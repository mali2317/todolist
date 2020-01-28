import { Component, OnInit } from '@angular/core';
import { finalize, subscribeOn, filter } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { pipe } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, getActiveQuote } from '@app/state/reducers';
import { fetchQuote } from '@app/state/actions/quote.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.isLoading = true;
    this.store.dispatch(fetchQuote({ category: 'dev' }));

    this.store
      .pipe(
        select(getActiveQuote),
        filter((quote: string) => !!quote)
      )
      .subscribe((quote: string) => {
        this.isLoading = false;
        this.quote = quote;
      });
  }
}
