import { UUID } from 'crypto';
import { Column, Model, Table, CreatedAt, UpdatedAt, DataType, Sequelize, AutoIncrement } from 'sequelize-typescript'; 

@Table({
    freezeTableName: true, 
    timestamps: true, 
    tableName: 'clientes'
}) 
export class ClientesModel extends Model {
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true})
    cliente_id: number; 

    @Column({type: DataType.UUID})
    cliente_uuid: UUID;

    @Column({type: DataType.STRING(150)})
    @Column 
    cliente: string;

    @Column({type: DataType.STRING(150)})
    @Column
    direccion: string; 

    @Column({type: DataType.STRING(100)})
    @Column
    ciudad: string; 

    @Column({type: DataType.STRING(255)})
    @Column
    movil: string; 

    @Column({type: DataType.STRING(255)})
    @Column
    email: string;

    @CreatedAt
    @Column({type: 'TIMESTAMP'})
    atcreated: Date;

    @UpdatedAt
    @Column({type: 'TIMESTAMP'})
    atupdated: Date;
}