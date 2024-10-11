import { ObjectId } from "typeorm";
import { Category } from "../entity/category-enum";

export interface CreateQuestionDTO {
    name: string;
    description: string;
    category: Category;
}