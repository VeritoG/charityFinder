const axios = require("axios")
const req = require('express/lib/request')
const { get } = require('express/lib/request')
const defaults = require("./default")

const url = "orgservice/"

const getCharities = {
    showAll: () => {
        return axios({
            ...defaults,
            method: "GET",
            url: url + "all/organizations/active",
            params: {
                api_key: "3e4598dc-006c-4e2e-9a14-aede1b2d256b",
            }
        })
    },
    showOne: (id) => {
        return axios({
            ...defaults,
            method: "GET",
            url: url + "organization/" + id,
            params: {
                api_key: "3e4598dc-006c-4e2e-9a14-aede1b2d256b",
            }
        })
    },
    // search: () => {
    //     return axios({
    //         ...defaults,
    //         method: "get",
    //         url: url + "organization/",
    //         params: {
    //             api_key: "3e4598dc-006c-4e2e-9a14-aede1b2d256b",
    //             country: req.body.country
    //         }
    //     })
    // }
}

module.exports = getCharities;