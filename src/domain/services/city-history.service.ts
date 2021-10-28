import { CityRepository } from './protocols/city-repository';
import { Storage } from '@ionic/storage-angular';
import { City } from '../entities/city';

export class CityHistoryService {
  constructor(
    private readonly cityRepo: CityRepository,
    private storage: Storage
  ) {}

  //Função que cria um histórico caso ele não exista ou retorna o histórico existente
  async createHistory(): Promise<City[]> {
    await this.storage.create(); //Cria um banco de dados
    if (!(await this.storage.get('history'))) {
      // caso não haja histórico cria um novo
      await this.storage.set('history', []);
    }
    return await this.storage.get('history'); // retorna o histórico
  }

  // Função que salva a cidade consultada no historico
  async saveCity(id: number): Promise<City[]> {
    const city = await this.cityRepo.getById(id); // Busca a cidade pelo ID
    const history = await this.storage.get('history'); // Busca o histórico já registrado

    // O bloco a seguir remove a cidade do histórico antes de inseri-la para evitar duplicatas
    const index = history.findIndex((c) => c.id === city.id);
    if (index > -1) {
      history.splice(index, 1);
    }

    history.unshift(city); // insere no início do histórico
    return await this.storage.set('history', history);
  }
}
