import { Controller, Get } from "@nestjs/common";
import { ClientesUsesCases } from "./clientes.usescases";
import { Cliente } from "src/domain/clientes/cliente";

@Controller("api/clientes")
export class ClientesController {
    constructor(
        private readonly cliente: ClientesUsesCases
    ) {}

    @Get()
    public async getList() {
        return await this.cliente.getList();
    }
}