import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-enseignant',
  templateUrl: './search-enseignant.component.html',
  styleUrls: ['./search-enseignant.component.css']
})
export class SearchEnseignantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(dataForm: any){
    console.log(dataForm);
    
    
  }

}
