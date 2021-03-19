import {Body, Controller, Get, Post, } from '@nestjs/common';
import { ValidationPipe } from 'pipes/validation.pipe';
import { RegisterModel } from 'src/models/register.model';


@Controller()
export class AccountController {
    @Get()
    test() {
        return  [
            {
              "id": 2,
              "productName": "ดาบsven",
              "untiPrice": "700",
              "thumbnail": "./image/sword.png"
            },
            {
              "id": 3,
              "productName": "แขนsven",
              "untiPrice": "600",
              "thumbnail": "./image/arm.png"
            },
            {
              "id": 4,
              "productName": "หัวsven",
              "untiPrice": "500",
              "thumbnail": "./image/head.png"
            }
          ];
    }
    @Post('register')
    register(@Body(new ValidationPipe()) body:RegisterModel){
       
        return body
    }
}