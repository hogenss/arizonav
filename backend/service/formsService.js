const formModel = require('../models/formsModel');

class FormsService {

    async getForms() {
        const setForm = await formModel.find({})
        return setForm
    }

    async deleteForm(_id) {
        const setForm = await formModel.deleteOne({_id})
        return setForm
    }

    async createForm(params) {
        console.log(params)
        const setForm = await formModel.create({...params})
        return setForm
    }
}

module.exports = new FormsService();