import { Controller, Get, Post, Put, Delete, NotFoundException, Param, Body, BadRequestException } from "@nestjs/common";
import { ClientesUsesCases } from "./clientes.usescases";
import { ClientesAddRequestDTO } from "./clientes.add.request.dto";
import { ClientesUpdateRequestDTO } from "./clientes.update.request.dto";
import { ClientesDeleteRequestDTO } from "./clientes.delete.request.dto";
import { ClientesGetByUUIDRequestDTO } from "./clientes.getbyuudi.request.dto";

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

    @Get('getcliente/:cliente_uuid')
    public async getCliente(@Param() entity: ClientesGetByUUIDRequestDTO)
    {
        const data = await this.cliente.getByUUID(entity.cliente_uuid);

        if(data == null || data.cliente_uuid == null) 
            return new NotFoundException("El cliente no existe.");
        
        return data;
    }    

    @Post('add')
    public async add(@Body() entity: ClientesAddRequestDTO)
    {
        const result = await this.cliente.add(entity);

        if(result == 0) 
            return new BadRequestException("El cliente no fue añadido.");

        return result;
    }

    @Delete('delete')
    public async delete(@Body() entity: ClientesDeleteRequestDTO)
    {
        const result = await this.cliente.delete(entity.cliente_uuid); 

        if (result == 0) 
            return new BadRequestException("El cliente no ha sido eliminado."); 

        return result;
    }

    @Put('update')
    public async update(@Body() entity: ClientesUpdateRequestDTO)
    {
        const result = await this.cliente.update(entity);

        if(result == 0) 
            return new BadRequestException("El cliente no fue actualizado.");
        
        return result;
    }
}