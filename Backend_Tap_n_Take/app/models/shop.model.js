module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            img: String,
            email: String
        }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Shop = mongoose.model("shops", schema)
    return Shop
}
