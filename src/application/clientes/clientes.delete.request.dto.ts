import { IsUUID } from "class-validator";
import { UUID } from "crypto";

export class ClientesDeleteRequestDTO 
{
    @IsUUID()
    public cliente_uuid: UUID;
}