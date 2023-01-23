import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayersService {
  private players = [
    {
      name: 'Thibaut Curtois',
      imgURL:
        'https://www.realmadrid.com/img/vertical_380px/courtois_380x501_20190809034523.jpg',
      info: '11. Mai 1992, Bree - Belgium,',
    },
    {
      name: 'Sergio Ramos',
      imgURL:
        'https://www.realmadrid.com/img/vertical_380px/ramos_380x501_20190607100808.jpg',
      info: '30. March 1986, Camas - Spain',
    },
  ];

  getPlayers() {
    return this.players;
  }
}
