
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const marksSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   rollno: { type: String },
   tamil: { type: Schema.Types.String, ref: 'student' },
   english: { type: Schema.Types.String, ref: 'student' },
   maths: { type: Schema.Types.String, ref: 'student' }
})

const marksModel = mongoose.model('marks', marksSchema, 'marks');
export default marksModel;
