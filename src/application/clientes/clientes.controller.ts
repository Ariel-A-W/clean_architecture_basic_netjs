import { Controller, Get } from "@nestjs/common";

@Controller("api/clientes")
export class ClientesController {
    constructor() {}

    @Get()
    public getList(): string {
        return 'Hola mundo';
    }
}