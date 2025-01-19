import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { ClientesUsesCases } from "./clientes.usescases";
import { ClientesResponseDTO } from "./clientes.response.dto";
import { UUID } from "crypto";

@Controller("api/clientes")
export class ClientesController {
    constructor(
        private readonly cliente: ClientesUsesCases
    ) {}

    @Get()
    public async getList() {
        const data = await this.cliente.getList();
        try 
        {
            var lstclientes = new Array<ClientesResponseDTO>();
            data.forEach((element) =>{
                lstclientes.push(
                    new ClientesResponseDTO(
                        element.cliente_uuid,
                        element.cliente,
                        element.direccion,
                        element.ciudad,
                        element.movil,
                        element.email,
                        element.atcreated, 
                        element.atmodified  
                    )
                );
            });
        }
        catch(error)
        {
            console.error('Error de datos:', error);
        }
        return await lstclientes;
    }

    @Get('getcliente/:uuid')
    public async getCliente(@Param('uuid') uuid: UUID)
    {
        const data = await this.cliente.getByUUID(uuid);

        if(data == null || data.cliente_uuid == null) 
        {
            return new NotFoundException("El cliente no existe.");
        }

        var oneCliente = new ClientesResponseDTO(
            data.cliente_uuid,
            data.cliente,
            data.direccion,
            data.ciudad,
            data.movil,
            data.email,
            data.atcreated, 
            data.atmodified 
        );

        return oneCliente;
    }
}