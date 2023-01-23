import { Controller, Get } from '@nestjs/common';

@Controller('players')
export class PlayersController {

  @Get()
  getPlayers() {
    return ['Player one', 'Player two'];
  }
}
