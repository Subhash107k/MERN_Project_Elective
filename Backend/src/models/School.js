import mongoose from 'mongoose';
import schoolSchema from '../schemas/schoolSchema.js';

const School = mongoose.models.School || mongoose.model('School', schoolSchema);

export default School;
