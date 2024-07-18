import { Schema, model, models } from 'mongoose';
import { ApiQuestions } from '@/global';

// @ts-ignore
const QuestionsSchema = new Schema<ApiQuestions>({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  labels: { type: [String], required: true },
}, { timestamps: true });

const Questions = models.Questions || model<ApiQuestions>('Questions', QuestionsSchema);

export default Questions;
