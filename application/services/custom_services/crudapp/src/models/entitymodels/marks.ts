
export interface marks 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   rollno: { type: String },
   tamil: { type: String, ref: 'student' },
   english: { type: String, ref: 'student' },
   maths: { type: String, ref: 'student' }
}



