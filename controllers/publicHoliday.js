const axios = require('axios')

class PublicHoliday {
    static findPublicHoliday(req, res, next) {
        let currentYear = new Date().getFullYear()
        axios({
            method : "GET",
            url : `https://date.nager.at/api/v2/publicholidays/${currentYear}/ID`,
            responseType : 'json'
        })
        .then(function(publicholidays) {
            let holidayDate = []
            publicholidays.data.forEach(date => {
                let payload = {
                    date : date.date,
                    localName : date.localName,
                    name : date.name
                }
                holidayDate.push(payload)
            })
             res.status(200).json({data : holidayDate})
        })
        .catch(function(err) {
            res.status(500).json({err})
        })
    }
}

module.exports = PublicHoliday