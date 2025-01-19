import { IsUUID } from "class-validator";
import { UUID } from "crypto";

export class ClientesDeleteRequestDTO 
{
    @IsUUID()
    cliente_uuid: UUID;
}