const formModel = require('../models/formsModel');

class FormsService {

    async getForms() {
        const setForm = await formModel.find({})
        return setForm
    }

    async updateForm(_id, params) {
        const setForm = await formModel.findOneAndUpdate({_id}, {...params})
        return setForm
    }

    async createForm(params) {
        console.log(params)
        const setForm = await formModel.create({...params})
        return setForm
    }
}

module.exports = new FormsService();