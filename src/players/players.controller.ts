import { Controller, Get } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {

  constructor(private readonly playerService: PlayersService) {}

  @Get()
  getPlayers() {
    return this.playerService.getPlayers();
  }
}
