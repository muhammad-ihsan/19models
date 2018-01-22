'use strict';
const app = require('../../server/server');
module.exports = {
  calcBookingTotal: function(model, minutes) {
    if (Object.keys(model.rateSession).length === 0) {
      return model.rate * minutes;
    }
  },
};
