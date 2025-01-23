import { UUID } from "crypto";
import { IsUUID } from "class-validator";

export class ClientesGetByUUIDRequestDTO {
    @IsUUID()
    cliente_uuid: UUID;
}