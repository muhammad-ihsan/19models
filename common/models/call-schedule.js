'use strict';
const crypto = require('crypto');
const buildHttpQuery = require('qhttp/http_build_query');
const app = require('../../server/server');
const utils = require('../utils');

module.exports = function(CallSchedule) {
  CallSchedule.createCall = async (data, req, next) => {
    const {GuestUser, CallSchedule, TransactionGuest, ModelGirl} = app.models;
    console.log(data);
    try {
      let modelGirl = await ModelGirl.findById(data['modelGirlId']);
      let guest = await GuestUser.findOne({
        where: {
          skypeUser: data['skypeUser'],
          email: data['email'],
        },
      });
      if (guest === null) {
        guest = await GuestUser.create({
          firstName: data['firstName'],
          lastName: data['lastName'],
          email: data['email'],
          skypeUser: data['skypeUser'],
        });
      }
      let callSchedule = await CallSchedule.create({
        modelGirlId: data['modelGirlId'],
        guestUserId: guest.id,
        scheduleDate: data['scheduleDate'],
        minutes: data['minutes'],
        amount: data['amount'],
        status: data['WAITING_PAYMENT'],
      });
      let transactionGuest = await TransactionGuest.create({
        guestUserId: guest.id,
        callScheduleId: callSchedule.id,
        transactionTime: new Date(),
        transactionShortNumber: 'ADAM999',
        amount: data['amount'],
      });
      let twispayObject = {
        amount: data['amount'],
        backUrl: 'http://19models.com/',
        cardTransactionMode: 'authAndCapture',
        currency: 'USD',
        description: 'Model session with me',
        email: data['email'],
        firstName: data['firstName'],
        identifier: transactionGuest.transactionShortNumber,
        invoiceEmail: data['email'],
        lastName: data['lastName'],
        orderId: transactionGuest.id,
        orderType: 'purchase',
        siteId: '508',
      };
      let qs = buildHttpQuery(twispayObject);
      let encQs = crypto
        .createHmac('sha512', '35dd9d0ce7fcaf3f208ae51f5d079840')
        .update(new Buffer(qs))
        .digest('base64');
      twispayObject['checksum'] = encQs;

      console.log(qs);
      console.log(encQs);
      console.log(twispayObject);
      return Promise.resolve({
        status: 'success',
        guest,
        callSchedule,
        transactionGuest,
        twispayObject,
      });
    } catch (e) {
      console.log(e);
      let err = new Error('Failed Create Schedule');
      err.status = 400;
      return Promise.reject(err);
    }
  };
};
