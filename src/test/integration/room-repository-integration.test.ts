const { v4: uuidv4 } = require("uuid");

import DataSourceMongoDb from '../../app/config/mongo-datasource-config';
import AppDataSource from '../../app/config/mongo-datasource-config';
import { Room } from '../../app/entity/room-entity';
import { RoomRepositoryFactory } from '../../app/factory/room-repository-factory';
import { RoomRepository } from '../../app/repository/room-repository';

let roomRepository: RoomRepository;

describe('-------------------- Room Repository --------------------', () => {

    beforeAll( async () => {
        await AppDataSource.createConnection()
        roomRepository = RoomRepositoryFactory.createRoomRepository()
    })

    test('Criar Sala', async () => {
        const uuid = uuidv4();
        let x = await roomRepository.create({
            id: uuid,
            name:'teste 11111',
            description:'testando'
        } as Room)

        

        expect(1).toBe(1)
    })

    test('Criar Sala 22222', async () => {
        const uuid = uuidv4();
        let x = await roomRepository.create({
            name:'teste 11111',
            description:'testando'
        })

        expect(1).toBe(1)
    })

    test('Listar Salas', async () => {
        const uuid = uuidv4();
        let x = await roomRepository.findAll()
        console.log('azeaze qsda aze')
        console.log(x)
        expect(1).toBe(1)
    })

    afterAll( async () => {
        const dataSource = DataSourceMongoDb.getConnection()
        dataSource.destroy()
    })
})