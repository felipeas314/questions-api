import { DataSource ,MongoRepository } from "typeorm"
import { Question } from "../entity/question-entity"
import { CreateQuestionDTO } from "../dto/create-question-dto"

export class QuestionRepository {

    private repository: MongoRepository<Question>

    constructor(dataSource: DataSource) {
        this.repository = dataSource.getMongoRepository(Question)
    }

    async create(createQuestionDTO: CreateQuestionDTO): Promise<Question> {
        return await this.repository.save(createQuestionDTO);
    }
}