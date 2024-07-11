class BaseRepository{
    constructor(_collection){

        //instance member of a class we can access anywhere
        this.collection = _collection;
    }
    findAll() {
        //lean is said to be fetch the data
        return this.collection.find().lean().exec();
    }
    findById(id){
        return this.collection.findById(id)
    }

    //to perform crud operation on each models
    create(model){
        return this.collection.create(model);
    }
    update(model){
        return this.collection.findByIdAndUpdate(model._id,model);
    }
    deleteById(model){
        return this.collection.findByIdAndUpdate(id);
    }

}
module.exports = BaseRepository;