import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Currencies } from '../interface/currency';
@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css']
})
export class CurrencySelectorComponent implements OnInit {

  @Input()
  currencyNames: string[];

  @Output()
  selectedCurrency: EventEmitter<string> = new EventEmitter<string>();

  currentCurrencyName: string;

  ngOnInit() {
    this.currentCurrencyName = this.currencyNames[0];
  }

  onChange(event: Event) {
    this.currentCurrencyName = (<HTMLInputElement>event.target).value;
    this.selectedCurrency.emit(this.currentCurrencyName);
  }

}
