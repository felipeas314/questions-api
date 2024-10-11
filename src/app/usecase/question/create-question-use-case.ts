import { CreateQuestionDTO } from "@/app/dto/create-question-dto";
import { Question } from "../../entity/question-entity";
import { QuestionRepository } from "../../repository/question-repository";

export class CreateQuestionUseCase {
    constructor(private questionRepository: QuestionRepository){}

    async execute(createQuestionDTO: CreateQuestionDTO): Promise<Question> {
        return await this.questionRepository.create(createQuestionDTO)
    }
}