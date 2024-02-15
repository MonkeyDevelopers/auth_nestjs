import { UsersModule } from './user/users.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonsModule } from './pokemons/pokemons.module';

@Module({
  imports: [
        UsersModule, 
        AuthModule, PokemonsModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
