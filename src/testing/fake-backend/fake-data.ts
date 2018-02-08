// import {CompanyInfo} from "../../app/credit-rating/company-info";
// import {CreditReport} from "../../app/credit-rating/credit-rating-report";
//
// function stats(items: [{
//                  name: string,
//                  x: string,
//                  y: string,
//                  items: [{ name: string, scale: number }]
//                }],
//                start: number,
//                end: number): Stat[] {
//   const result = [];
//   items.forEach(item => result.push(stat(item.name, item.x, item.y, item.items, start, end)));
//   return result;
// }
//
// function stat(name: string, x: string, y: string, items: [{ name: string, scale: number }], start: number, end: number): Stat {
//   return {
//     name: name,
//     xAxisLabel: x,
//     yAxisLabel: y,
//     data: dataArray(items, start, end)
//   };
// }
//
// function dataArray(items: [{ name: string, scale: number }], start: number, end: number): Data[] {
//   const result = [];
//   items.forEach(item => result.push(data(item.name, start, end, item.scale)));
//   return result;
// }
//
// function data(name: string, start: number, end: number, scale: number): Data {
//   return {
//     name: name,
//     series: seriesArray(start, end, scale)
//   };
// }
//
// function seriesArray(start: number, end: number, scale: number): Series[] {
//   const result = [];
//   for (let i = start; i <= end; i++) {
//     result.push(series(i, scale));
//   }
//   return result;
// }
//
// function series(name: number, scale: number): Series {
//   return {
//     name: name.toString(),
//     value: Math.round(Math.random() * scale),
//   };
// }
//
// export class FakeData {
//   companies: CompanyInfo[] = [
//     {id: 1, name: "AAA"},
//     {id: 2, name: "ABC"},
//     {id: 3, name: "BBB"},
//     {id: 4, name: "BCD"},
//     {id: 5, name: "CCC"},
//     {id: 6, name: "CDE"},
//   ];
//   profiles: CreditReport[] = [];
//
//   constructor() {
//     this.companies.forEach(company => {
//       this.profiles.push({
//         name: company.name,
//         rating: Math.round(Math.random() * 10).toString(),
//         stats: stats(
//           [
//             {
//               name: 'Income Statement',
//               x: 'Year',
//               y: '',
//               items: [
//                 {name: 'Revenue', scale: 10000000},
//                 {name: 'Net Profit', scale: 100000}
//               ]
//             },
//             {
//               name: 'Stat 2',
//               x: 'Year',
//               y: '$',
//               items: [
//                 {name: 'EBITDA', scale: 10000},
//               ]
//             },
//             {
//               name: 'Stat 3',
//               x: 'Year',
//               y: '%',
//               items: [
//                 {name: 'Debit Coverage Ratio', scale: 100},
//               ]
//             },
//           ],
//           2000,
//           2017
//         ),
//       });
//     });
//   }
//
//   names(): CompanyInfo[] {
//     return this.companies;
//   }
//
//   getProfile(text: string): CreditReport {
//     return this.profiles.find(profile => profile.name.toLowerCase() === text.toLowerCase());
//   }
//
// }
