"use strict";

module.exports = function(Transactionguest) {
  Transactionguest.twispayNotification = async (data, req, next) => {
    try {
      console.log(data);
      Promise.resolve({ status: "success" });
    } catch (e) {
      console.log(e);
      Promise.reject(e);
    }
  };
};
