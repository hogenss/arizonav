const formService = require('../service/formsService')

class FormsController {
    async getForms(req, res, next) {
        try {
            const forms = await formService.getForms()
            return res.json(forms)
        } catch (e) {
            next(e)
        }
    }

    async updateForm(req, res, next) {
        try {
            const params = req.body
            const { _id } = params
            const form = await formService.updateForm(_id, params)
            return res.json(form)

        } catch (e) {
            next(e)
        }
    }

    async createForm(req, res, next) {
        try {
            const params = req.body
            const form = await formService.createForm(params)
            return res.json(form)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new FormsController();