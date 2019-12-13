import mongoose, { Schema, Document } from 'mongoose';

export interface Todos extends Document {
    title: string;
    description: string;
}

const TodoSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true

    },
    isDone: {
        type: Boolean,
        default: false
    },
});

// Export the model and return your Todos interface
export default mongoose.model<Todos>('todos', TodoSchema);