import { UsersModule } from './user/users.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonsModule } from './pokemons/pokemons.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '217.196.60.94',
      port: 5432,
      password: 'postgres',
      username: 'postgres',
      entities: [],
      database: 'nestjs',
      synchronize: true,
      logging: true,
    }),
    AuthModule,
    PokemonsModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
