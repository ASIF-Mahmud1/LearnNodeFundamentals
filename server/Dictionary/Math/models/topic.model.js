var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const TopicSchema = new Schema({
  //author: ObjectId,
  //title: String,
  body: String,
  //date: Date
});

//export default mongoose.model('Topic', TopicSchema)
const Topic= mongoose.model('Topic', TopicSchema)


module.exports = Topic