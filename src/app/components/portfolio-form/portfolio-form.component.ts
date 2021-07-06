import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStore} from '../../store/app.store';
import {AddPortfolio} from '../../actions/portfolio.actions';
import {Portfolio} from '../../models/portfolio';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.css']
})
export class PortfolioFormComponent implements OnInit {

  form: FormGroup;

  constructor(public store: Store<AppStore>) {
    this.form = new FormGroup(
      {
        title: new FormControl(),
        author: new FormControl(),
        url: new FormControl(),
        primaryLanguage: new FormControl(),
      }
    );
    const tempPortfolio = {
      title: 'Google search engine',
      author: 'Adrien',
      url: 'www.google.com',
      primaryLanguage: 'python'
    } as Portfolio;

    this.form.patchValue(tempPortfolio);
  }

  ngOnInit(): void {
  }

  addPortfolio(): void {
    this.store.dispatch(new AddPortfolio(this.form.value as Portfolio));
  }

}
