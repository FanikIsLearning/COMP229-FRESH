import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-tool',
  templateUrl: './search-tool.component.html',
  styleUrls: ['./search-tool.component.css'],
})
export class SearchToolComponent implements OnInit {
  name = '';

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  searchName(): void {
    this.searchService.setSearchTerm(this.name);
  }
}
