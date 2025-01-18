import { Column, Model, Table, CreatedAt, UpdatedAt, DataType, Sequelize } from 'sequelize-typescript'; 

@Table({
    freezeTableName: true, 
    timestamps: true, 
    tableName: 'clientes'
}) 
export class ClientesModel extends Model {
    @Column({primaryKey: true})
    cliente_id: number; 

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
    @Column({type: 'TIMESTAMP', defaultValue: 'CURRENT_TIMESTAP'})
    atcreated: Date;

    @UpdatedAt
    @Column({type: 'TIMESTAMP', defaultValue: 'CURRENT_TIMESTAMP'})
    atupdated: Date;
}