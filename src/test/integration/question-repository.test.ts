const { v4: uuidv4 } = require("uuid");

import { QuestionRepository } from '@/app/repository/question-repository';
import DataSourceMongoDb from '../../app/config/mongo-datasource-config';
import AppDataSource from '../../app/config/mongo-datasource-config';
import { Room } from '../../app/entity/room-entity';
import { QuestionRepositoryFactory } from '../../app/factory/question/question-repository-fqctory';
import { Question } from '../../app/entity/question-entity';
import { Category } from '../../app/entity/category-enum';
import { CreateQuestionDTO } from '@/app/dto/create-question-dto';

let questionRepository: QuestionRepository;

describe('-------------------- Room Repository --------------------', () => {

    beforeAll( async () => {
        await AppDataSource.createConnection()
        questionRepository = QuestionRepositoryFactory.createRoomRepository()
    })

    test('Criar Sala', async () => {
        const uuid = uuidv4();
        let x = await questionRepository.create({
            name:'teste 11111',
            description:'testando',
            category: Category.math
        })

        expect(1).toBe(1)
    })

    afterAll( async () => {
        const dataSource = DataSourceMongoDb.getConnection()
        dataSource.destroy()
    })
})