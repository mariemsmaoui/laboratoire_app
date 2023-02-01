import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})

export class MemberComponent {
  dataSources: any[] = [
    {
      id: '1',
      cin: '11125478',
      name: 'mariam',
      createdDate: '12/20/2022',
      cv: 'line',
      type: 'teacher',
    },
    {
       
      id: '2',
      cin: '11125477',
      name: 'omar',
      createdDate: '12/05/2022',
      cv: 'lines',
      type: 'searcher',



    },
    {  
     id: '3',
    cin: '11125476',
    name: 'slim',
    createdDate: '12/07/2022',
    cv: 'line',
    type: 'student',},
  ];
  displayedColumns: any[] = ['id','cin', 'name', 'createdDate', 'cv','type'];
}
