export interface Currency {
    name: string;
  }

  export class Currencies {
      private CURRENCIES: Currency[] = [
          {name: 'EUR'},
          {name: 'USD'},
          {name: 'GBP'}
        ]
      }
