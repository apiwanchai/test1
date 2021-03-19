import { IsNotEmpty } from "class-validator";
import { IRegister } from "src/interfaces/app.interface";

export class RegisterModel implements IRegister{
    @IsNotEmpty()
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    cpassword: string;

}