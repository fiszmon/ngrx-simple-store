import {Component, OnInit} from '@angular/core';
import {AppStore} from '../../store/app.store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Portfolio} from '../../models/portfolio';
import {memoizedSelector} from '../../reducers/portfolio.reducer';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {
  portfolios$: Observable<Portfolio[]>;

  constructor(public store: Store<AppStore>) {
    this.portfolios$ = this.store.select(memoizedSelector);
  }

  ngOnInit(): void {
  }

}
