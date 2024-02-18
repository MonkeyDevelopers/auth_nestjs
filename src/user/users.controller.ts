import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
   constructor(private service: UsersService) {}
   
   @Get('listar')
   findAll() {
     return this.service.findAll();
   }
   
}
