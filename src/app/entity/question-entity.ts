import "reflect-metadata"
import { Entity, ObjectId, ObjectIdColumn, Column, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category-enum";



@Entity('question')
export class Question {

  @ObjectIdColumn()
  id: ObjectId;

  @Column('text', { nullable: false })
  text: string;

  @Column('enum', { enum: Category })
  category: Category;

  constructor(id: ObjectId, text: string, category: Category) {
    this.id = id;
    this.text = text;
    this.category = category;
  }
  
}
