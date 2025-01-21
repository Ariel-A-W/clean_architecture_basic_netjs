import { Controller, Get, Post, Put, Delete, NotFoundException, Param, Body } from "@nestjs/common";
import { ClientesUsesCases } from "./clientes.usescases";
import { UUID } from "crypto";
import { ClientesAddRequestDTO } from "./clientes.add.request.dto";

@Controller("api/clientes")
export class ClientesController {
    constructor(
        private readonly cliente: ClientesUsesCases
    ) {}

    @Get()
    public async getList() {        
        const data = await this.cliente.getList();

        if (data == null || data.length == 0) 
        {
            return new NotFoundException("No existen registros.");
        }

        return await data;
    }

    @Get('getcliente/:uuid')
    public async getCliente(@Param('uuid') uuid: UUID)
    {
        const data = await this.cliente.getByUUID(uuid);

        if(data == null || data.cliente_uuid == null) 
            return new NotFoundException("El cliente no existe.");
        
        return data;
    }

    @Post('add')
    public async add(@Body() entity: ClientesAddRequestDTO)
    {
        const result = await this.cliente.add(entity);

        if(result == 0) 
            return new NotFoundException("El cliente no fue añadido.");

        return result;
    }
}