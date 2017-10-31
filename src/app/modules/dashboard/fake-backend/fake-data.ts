import {CompanyName} from '../company-search/company-name-search.service';
import {CompanyProfile, Data, Series, Stat} from '../company-search/company-profile-search.service';

function stats(items: [{
                 name: string,
                 x: string,
                 y: string,
                 items: [{ name: string, scale: number }]
               }],
               start: number,
               end: number): Stat[] {
  const result = [];
  items.forEach(item => result.push(stat(item.name, item.x, item.y, item.items, start, end)));
  return result;
}

function stat(name: string, x: string, y: string, items: [{ name: string, scale: number }], start: number, end: number): Stat {
  return {
    name: name,
    xAxisLabel: x,
    yAxisLabel: y,
    data: dataArray(items, start, end)
  };
}

function dataArray(items: [{ name: string, scale: number }], start: number, end: number): Data[] {
  const result = [];
  items.forEach(item => result.push(data(item.name, start, end, item.scale)));
  return result;
}

function data(name: string, start: number, end: number, scale: number): Data {
  return {
    name: name,
    series: seriesArray(start, end, scale)
  };
}

function seriesArray(start: number, end: number, scale: number): Series[] {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(series(i, scale));
  }
  return result;
}

function series(name: number, scale: number): Series {
  return {
    name: name.toString(),
    value: Math.round(Math.random() * scale),
  };
}

export class FakeData {
  profiles: CompanyProfile[] = [];

  constructor() {
    ['AAA', 'ABC', 'BBB', 'BCD', 'CCC', 'CDE'].forEach(name => {
      this.profiles.push({
        name: name,
        rating: Math.round(Math.random() * 10).toString(),
        stats: stats(
          [
            {
              name: 'Stat 1',
              x: 'Year',
              y: '$',
              items: [
                {name: 'Revenue', scale: 10000000},
                {name: 'Net Profit', scale: 100000}
              ]
            },
            {
              name: 'Stat 2',
              x: 'Year',
              y: '$',
              items: [
                {name: 'EBITDA', scale: 10000},
              ]
            },
            {
              name: 'Stat 3',
              x: 'Year',
              y: '%',
              items: [
                {name: 'Debit Coverage Ratio', scale: 100},
              ]
            },
          ],
          2000,
          2017
        ),
      });
    });
  }

  names(): CompanyName[] {
    return this.profiles.map(profile => ({name: profile.name}));
  }

  getProfile(text: string): CompanyProfile {
    return this.profiles.find(profile => profile.name.toLowerCase() === text.toLowerCase());
  }

}
