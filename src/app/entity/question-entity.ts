import "reflect-metadata"
import { Entity, ObjectId, ObjectIdColumn, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('question')
export class Question {

  @ObjectIdColumn()
  id: ObjectId;

  @Column('text', { nullable: false })
  text: string;

  @Column('text', { nullable: false })
  category: string;

  @Column('text', { nullable: false })
  subCategory: string;

  constructor(id: ObjectId, text: string) {
    this.id = id;
    this.text = text;
  }
  
}
