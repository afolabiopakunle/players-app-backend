import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayersService {
  private players = [
    {
      name: 'Curtois',
      imgURL:
        'https://www.realmadrid.com/img/vertical_380px/courtois_av38276_20220809043519.jpg',
      info: '11. Mai 1992, Bree - Belgium,',
    },
    {
      name: 'Asensio',
      imgURL:
        'https://www.realmadrid.com/img/vertical_380px/asensio_av38151_20220809044613.jpg',
      info: '30. March 1986, Camas - Spain',
    },
  ];

  getPlayers() {
    return this.players;
  }
}
