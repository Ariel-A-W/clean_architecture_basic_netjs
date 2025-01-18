import { Controller, Get } from "@nestjs/common";
import { ClientesUsesCases } from "./clientes.usescases";
import { ClientesResponseDTO } from "./clientes.response.dto";

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
}