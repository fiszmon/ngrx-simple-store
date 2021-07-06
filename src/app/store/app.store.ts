import {Portfolio} from '../models/portfolio';

export interface AppStore {
  readonly portfolios: Portfolio[];
}
