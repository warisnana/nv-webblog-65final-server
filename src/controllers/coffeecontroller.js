const {coffee}=require('../models')

module.exports={
// สร้าง/เพิ่ม กาแฟ
     async create(req, res) {
        try {
            const cof = await coffee.create(req.body)
            res.send(cof.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'เพิ่มกาแฟไม่สำเร็จ'
            })
        }
    },

// ลบกาแฟ
     async remove(req, res) {
        try {
            const cof = await coffee.findOne({
                where: {
                    id: req.params.cofId
                }
            })
            if (!cof) {
                return res.status(403).send({
                    error: 'ลบกาแฟไม่สำเร็จ'
                })
            }
            await cof.destroy()
            res.send(cof)
        } catch (err) {
            res.status(500).send({
                error: 'ลบกาแฟไม่สำเร็จ'
            })
        }
    },
//โชกาแฟทั้งหมด
    async index(req, res) {
        try {
            const cof = await coffee.findAll()
            res.send(cof)
        } catch (err) {
            res.status(500).send({
                error: 'โชกาแฟไม่สำเร็จ'
            })
        }
    },
//อัพเดทกาแฟ
    async put(req, res) {
        try {
            await cof.update(req.body, {
                where: {
                    id: req.params.cofId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'อัพเดทกาแฟไม่สำเร็จ'
            })
        }
    },


   
//โชแถวเดียว
    async show(req, res) {
        try {
            const cof = await coff.findByPk(req.params.userId)
            res.send(cof)
        } catch (err) {
            res.status(500).send({
                error: 'โชกาแฟไม่สำเร็จ'
            })
        }
    }





}