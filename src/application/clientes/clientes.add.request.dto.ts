import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class ClientesAddRequestDTO
{
    @IsString()
    @IsNotEmpty()
    cliente: string;

    @IsString()
    @IsOptional()
    direccion?: string; 

    @IsString()
    @IsOptional()
    ciudad?: string; 

    @IsString() 
    @IsOptional()
    movil?: string;
}