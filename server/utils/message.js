var moment = require('moment');
//
// var date = moment(1234);
// console.log(date.format('Do MMM YYYY, h:mm:ss a'));

var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: moment().valueOf()
  }
};

var generateLocationMessage = (from, latitude, longitude) =>{
  return {
    from,
    url:`https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: moment().valueOf()
  }
}

module.exports = {generateMessage, generateLocationMessage};
