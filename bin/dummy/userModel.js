'use strict';

const path = require('path');
const app = require('../../server/server');

function addUserModelDummy() {
  const {ModelGirl} = app.models;
  ModelGirl.create([
    {
      fullname: 'Sexy Isabelle',
      email: 'isabelle@gmail.com',
      phone: '+6281214669219',
      skypeUser: 'adamsaparudin',
      rate: 3,
      availableTime: {
        0: [17, 22],
        1: [17, 22],
        2: [17, 22],
        3: [17, 22],
        4: [17, 22],
        5: [17, 22],
        6: [17, 22],
      },
      rateSession: {
        10: 20,
        15: 25,
        30: 60,
      },
      modelData: {
        shortDesc: 'The Beauty Within',
        imageCard: '',
        imagePopup: '',
        modelVideo: '',
        longDesc:
          'One of the most amazing cam models that you have ever met. A unique combination between beauty and sexiness. But what makes Isabelle really unique is the fact that she listens. Share your dreams and ideas with her.',
        misc: '23 years old | Romania | Sagitarius',
      },
    },
    {
      fullname: 'Victoria Edison',
      email: 'victoria@gmail.com',
      phone: '+6281214669219',
      skypeUser: 'adamsaparudin',
      rate: 3,
      availableTime: {
        0: [17, 22],
        1: [17, 22],
        2: [17, 22],
        3: [17, 22],
        4: [17, 22],
        5: [17, 22],
        6: [17, 22],
      },
      rateSession: {
        10: 20,
        15: 25,
        30: 60,
      },
      modelData: {
        shortDesc: 'The Arabian Beauty',
        imageCard: '',
        imagePopup: '',
        modelVideo: '',
        longDesc:
          'One of the most amazing cam models that you have ever met. A unique combination between beauty and sexiness. But what makes Isabelle really unique is the fact that she listens. Share your dreams and ideas with her.',
        misc: '23 years old | Romania | Sagitarius',
      },
    },
    {
      fullname: 'Evelyn Diamond',
      email: 'victoria@gmail.com',
      phone: '+6281214669219',
      skypeUser: 'adamsaparudin',
      rate: 3,
      availableTime: {
        0: [17, 22],
        1: [17, 22],
        2: [17, 22],
        3: [17, 22],
        4: [17, 22],
        5: [17, 22],
        6: [17, 22],
      },
      rateSession: {
        10: 20,
        15: 25,
        30: 60,
      },
      modelData: {
        shortDesc: 'The Alt Chick',
        imageCard: '',
        imagePopup: '',
        modelVideo: '',
        longDesc:
          'One of the most amazing cam models that you have ever met. A unique combination between beauty and sexiness. But what makes Isabelle really unique is the fact that she listens. Share your dreams and ideas with her.',
        misc: '23 years old | Romania | Sagitarius',
      },
    },
    {
      fullname: 'Kylie Clark',
      email: 'kylie@gmail.com',
      phone: '+6281214669219',
      skypeUser: 'adamsaparudin',
      rate: 3,
      availableTime: {
        0: [17, 22],
        1: [17, 22],
        2: [17, 22],
        3: [17, 22],
        4: [17, 22],
        5: [17, 22],
        6: [17, 22],
      },
      rateSession: {
        10: 20,
        15: 25,
        30: 60,
      },
      modelData: {
        shortDesc: 'The Addictive Blonde',
        imageCard: '',
        imagePopup: '',
        modelVideo: '',
        longDesc:
          'One of the most amazing cam models that you have ever met. A unique combination between beauty and sexiness. But what makes Isabelle really unique is the fact that she listens. Share your dreams and ideas with her.',
        misc: '23 years old | Romania | Sagitarius',
      },
    },
  ]);
}

module.exports = addUserModelDummy;
