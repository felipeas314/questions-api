import { CreateQuestionUseCase } from "@/app/usecase/question/create-question-use-case";
import DataSourceMongoDb from "../../config/mongo-datasource-config";
import { QuestionRepository } from "../../repository/question-repository";
import { QuestionRepositoryFactory } from "./question-repository-factory";

export class CreateQuestionUseCaseFactory {
    
    constructor() {}

    static createRoomRepository(): CreateQuestionUseCase {
        const dataSource = DataSourceMongoDb.getConnection()
        const questionRepository = QuestionRepositoryFactory.createRoomRepository()
        const createQuestionUseCase = new CreateQuestionUseCase(questionRepository)
        return createQuestionUseCase;
    }
}