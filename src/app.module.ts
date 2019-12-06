import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './news/news.controller';
import { NewsModule } from './news/news.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { StudentController } from './student/student.controller';
import { StudentModule } from './student/student.module';

@Module({
  imports: [NewsModule, UserModule, StudentModule],
  controllers: [AppController, NewsController, UserController, StudentController],
  providers: [AppService],
})
export class AppModule {}
