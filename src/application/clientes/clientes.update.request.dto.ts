import { IsString, IsNotEmpty, IsOptional } from "class-validator";
import { UUID } from "crypto";
import { IsUUID } from "class-validator";

export class ClientesUpdateRequestDTO
{
    @IsUUID()
    cliente_uuid: UUID;

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

    @IsString() 
    @IsOptional()
    email?: string;    
}