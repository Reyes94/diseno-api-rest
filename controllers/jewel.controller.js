import { jewelModel } from "../models/jewel.model.js"
import { handleErrors } from "../database/errors.js"

const prepareHATEOAS = async(jewels, limit, page) => {
    const totalStock = jewels.reduce((accumulator, i) => accumulator + i.stock, 0)
    const results = jewels.map((i) => {

        return {
            name: i.nombre,
            href: `/api/joyas/${i.id}`,
        }
    })
    const total = jewels.length
    const totalMeta = await jewelModel.getCount() 
    const totalPages = Math.ceil( totalMeta / limit)
   
    const meta = {
            total: totalMeta,
            limit: parseInt(limit),
            page: parseInt(page),
            total_pages: totalPages,
            next:
                totalPages <= page
                    ? null
                    : `http://localhost:3000/api/joyas?limit=${limit}&page=${parseInt(page) + 1
                    }`,
            previous:
                page <= 1
                    ? null
                    : `http://localhost:3000/api/joyas?limit=${limit}&page=${parseInt(page) - 1
                    }`,
    }

    const HATEOAS = {
        total,
        totalStock,
        results,
        meta
    }
    return HATEOAS
}

const getAllJewels = async (req, res) => {
    const { sort, limit = 20, page = 1 } = req.query;
    try {
        const result = await jewelModel.findAll(sort, limit, page)
        const HATEOAS = await prepareHATEOAS(result, limit, page)
        return res.json(HATEOAS);
    } catch (error) {
        console.log(error)
        const { status, message } = handleErrors(error.code)
        return res.status(status).json({ ok: false, result: message });
    }
}

const getJewelById = async (req, res) => {
    const { id } = req.params
    try {
        if (!id.trim()) {
            throw { code: "402" };
        }
        const result = await jewelModel.findById(id)
        if (result.rows.length === 0) {
            throw { code: "403" };
        }
        return res.json({ ok: true, result: result.rows[0] })
    } catch (error) {
        console.log(error)
        const { status, message } = handleErrors(error.code)
        return res.status(status).json({ ok: false, result: message });
    }
}

const filterJewel = async (req, res) => {
    const { precio_max, precio_min, categoria, metal } = req.query
    try {
        const result = await jewelModel.filter({ precio_max, precio_min, categoria, metal })
        if (result.length === 0) {
            throw { code: "404" };
        }
        return res.json(result)
    } catch (error) {
        console.log(error)
        const { status, message } = handleErrors(error.code)
        return res.status(status).json({ ok: false, result: message });
    }
}

export const jewelController = {
    getAllJewels,
    getJewelById,
    filterJewel,
}