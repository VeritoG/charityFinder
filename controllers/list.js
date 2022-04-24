const req = require('express/lib/request');
const getCharities = require("../requests/getCharities")
const functions = require("../utils/functions")

const listController = {

    listAll: async (req, res) => { 
        try {
            const allCharities = await getCharities.showAll();
            const charities = allCharities.data.organizations.organization
            //console.log(charities[0].countries.country[0].name);
            const countries = []
                for (let i = 0; i < charities.length; i++) {
                    countries.push(charities[i].country)
                }
            const countriesUnique = [...new Set(countries)];

            const countriesArray = []
            for (let i = 0; i < charities.length; i++) {
                countriesArray.push(charities[i].countries.country[i])
            }

            const countriesService = [];
           
            console.log(countriesArray);

            //const countriesServiceUnique = [...new Set(countriesService)];
            res.render('list', {
                charities,countriesUnique
            })
        } catch (err) {
            console.log(err);
        }
    },
    showOne: async (req,res) => {
        try {
            const charity = await getCharities.showOne(req.params.id);
            //console.log(charity.data.organization.name);
            res.render("charityDetail", {
                charity: charity.data.organization,
            });
        } catch (error) {
            console.log(err);
        }
    },
    showSome: async (req, res) => {
        try {
            const allCharities = await getCharities.showAll();
            const charities = allCharities.data.organizations.organization
            const filter = req.query.country
            const regex = new RegExp(filter, 'gi');
            //console.log(regex);
            const charitiesMatch = [];
            for (let i = 0; i < charities.length; i++) {
                if (charities[i].country.match(regex)) {
                    charitiesMatch.push(charities[i])
                }
            }
            const countries = []
            for (let i = 0; i < charities.length; i++) {
               countries.push(charities[i].country)
            }
            const countriesUnique = [...new Set(countries)];
            //console.log(req.params);
            res.render('list', {
                charities: charitiesMatch,
                countriesUnique
            })
            //console.log("encontre");

        } catch (err) {
            console.log(err);
            //console.log("no encontre");
        }
    },
    showResult: async (req, res) => {
        try {
            const allCharities = await getCharities.showAll();
            const allCharitiesOrgs = allCharities.data.organizations.organization
            const regex = new RegExp(req.body.searchInput, 'gi');
            const charitiesMatch = []
            for (let i = 0; i < allCharitiesOrgs.length; i++) {
                if (allCharitiesOrgs[i].name.match(regex)) {
                    charitiesMatch.push(allCharitiesOrgs[i])
                }
            }
            console.log(charitiesMatch);
            if (charitiesMatch== null) {
                res.render('list', {
                    charities: allCharitiesOrgs
                })
                //console.log("no encontre nada");
            } else {
                res.render('list', {
                    charities: charitiesMatch
                })
                //console.log("algo encontre");
            }
        } catch (err) {
            console.log(err);
        }
        
    }
}

module.exports = listController