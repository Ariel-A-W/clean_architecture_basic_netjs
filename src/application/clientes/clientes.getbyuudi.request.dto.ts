import { UUID } from "crypto";
import { IsUUID } from "class-validator";

export class ClientesGetByUUID {
    @IsUUID()
    cliente_uuid: UUID;
}