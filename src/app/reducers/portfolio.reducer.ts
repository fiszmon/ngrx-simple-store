import {Portfolio} from '../models/portfolio';
import {Actions, ADD_PORTFOLIO} from '../actions/portfolio.actions';
import {createFeatureSelector, createSelector} from '@ngrx/store';


export const portfolioFeatureKey = 'portfolios';

export const initialState: Portfolio = {
  title: 'Secure ERP',
  url: 'erp.com.pl',
  primaryLanguage: 'TypeScript',
  author: 'Eugeniusz Cool'
};

export function portfolioReducer(state: Portfolio[] = [initialState], action: Actions): Portfolio[] {
  switch (action.type) {
    case ADD_PORTFOLIO:
      return [...state, action.payload];
    default:
      return state;
  }
}

export const featureSelector = createFeatureSelector<Portfolio[]>(portfolioFeatureKey);
export const memoizedSelector = createSelector(featureSelector, (state: Portfolio[]) => state);
