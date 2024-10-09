const { v4: uuidv4 } = require("uuid");

import DataSourceMongoDb from '../../app/config/mongo-datasource-config';
// Generate a UUID v4



import AppDataSource from '../../app/config/mongo-datasource-config';
import { CreateRoomController } from '../../app/controllers/create-room-controller';
import { CreateRoomDTO } from '../../app/dto/create-room-dto';
import { CreateRoomControllerFactory } from '../../app/factory/room-controller-factory';

let createRoomController: CreateRoomController;

describe('-------------------- Heath Controller --------------------', () => {

    beforeAll( async () => {
        await AppDataSource.createConnection()
        createRoomController = CreateRoomControllerFactory.createCreateRoomController()
    })

    test('Espera resultado OK', async () => {
        const uuid = uuidv4();
       

      

        expect(1).toBe(1)
    })

    afterAll( async () => {
        const dataSource = DataSourceMongoDb.getConnection()
        dataSource.destroy()
    })
})