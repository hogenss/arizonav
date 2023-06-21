const formModel = require('../models/formsModel');

class FormsService {

    async getForms() {
        const setForm = await formModel.find({})
        return setForm
    }

    async deleteForm(params) {
        const setForm = await formModel.deleteOne({...params})
        return setForm
    }

    async updateForm(params) {
        const setForm = await formModel.findOneAndUpdate({...params})
        return setForm
    }
}

module.exports = new FormsService();