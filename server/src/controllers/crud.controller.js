const post = (model) => async (req, res) => {

    try {
        const item = await model.create(req.body);

        return res.status(201).send({item});
    } catch (err) {
        return res.status(400).send({err});
    };
};

const get = (model) => async (req, res) => {

    try {
        const items = await model.find().lean().exec();

        return res.status(200).send({items});
    } catch (err) {
        return res.status(400).send({err});
    };
};

const getOne = (model) => async (req, res) => {
    
    try {
        const item = await model.findById(req.params.id).lean().exec();

        return res.status(200).send({item});
    } catch (err) {
        return res.status(400).send({err})
    }
}

const updateOne = (model) => async (req, res) => {

    try {
        const item = await model.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.status(200).send({item});
    } catch (err) {
        return res.status(400).send({err});
    }
}

const deleteOne = (model) => async (req, res) => {

    try {
        const item = await model.findByIdAndDelete(req.params.id);

        return res.status(200).send({item});
    } catch (err) {
        return res.status(400).send({err});
    }
}



module.exports = {

    post,
    get,
    getOne,
    updateOne,
    deleteOne
}