import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class ClientesUpdateRequestDTO
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