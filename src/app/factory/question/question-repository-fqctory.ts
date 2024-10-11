import DataSourceMongoDb from "../../config/mongo-datasource-config";
import { QuestionRepository } from "../../repository/question-repository";

export class QuestionRepositoryFactory {
    
    constructor() {}

    static createRoomRepository(): QuestionRepository {
        const dataSource = DataSourceMongoDb.getConnection()
        return new QuestionRepository(dataSource)
    }
}