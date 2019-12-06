import { Controller, Get, Post, Param, Body, Delete} from '@nestjs/common';
import { post } from 'superagent';

@Controller('user')
export class UserController {
    @Get()
    getHello(): string {
      return 'ok';
    }
  
    //GET localhost:3000/first/one/
    @Get('id')
    getOne() {
      return 'This is get one route';
    }

    @Post()
    postOne(@Body() body) {
      return body;
    }

    @Post('id')
    postwo(@Body() body) {
      return body;
    }

    @Delete('user/:id')
    getWithParam(@Param('id') id) {
      return id;
    }
  
  
}

//### User
//GET /user
//GET /user/:id
//POST /user
//PUT /user/:id
//DELTE /user/:id

