import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/domain/entities/city';
import { SearchCityService } from 'src/domain/services/search-city.service';
import { CityHistoryService } from 'src/domain/services/city-history.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cities: City[];
  hasError: boolean = false;
  errorMessage: string;
  history: City[];

  constructor(
    private readonly searchService: SearchCityService,
    private readonly router: Router,
    private readonly historyService: CityHistoryService
  ) {}

  //Função que incializa o histórico
  async ngOnInit() {
    this.history = await this.historyService.createHistory();
  }

  async onSearch(query: string) {
    try {
      this.hasError = false;
      this.cities = await this.searchService.search(query);
    } catch (error) {
      this.hasError = true;
      this.errorMessage = error.message;
    }
  }

  async onSelectCity(cityId: string) {
    this.history = await this.historyService.saveCity(parseInt(cityId)); //atualiza o histórico
    this.router.navigateByUrl(`/weather/${cityId}`);
  }
}
