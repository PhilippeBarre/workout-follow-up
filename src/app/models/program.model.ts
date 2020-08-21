export class Program {
  title: string;
  beginDate: Date;
  endDate: Date;

  constructor(title: string, beginDate: Date, endDate: Date) {
    this.title = title;
    this.beginDate = beginDate;
    this.endDate = endDate;
  }
}

// const programConverter = {
//   toFirestore(program: Program) {
//     return {
//       title: program.title,
//       beginDate: program.beginDate,
//       endDate: program.endDate
//     };
//   },
//   fromFirestore(snapshot, options): Program {
//     const data = snapshot.data(options);
//     return new Program(data.name, data.state, data.country);
//   }
// };
