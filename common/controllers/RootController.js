require('dotenv').config()
function RootController () {
  const {
    NODE_ENV,
    DEV_BASE_DOMAIN,
    PROD_BASE_DOMAIN,
    PORT
  } = process.env
  this.DOMAIN = NODE_ENV === 'prod' ? PROD_BASE_DOMAIN : `${DEV_BASE_DOMAIN}:${PORT}`
  this.models = [
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
        imageCard:
          'http://lorempixel.com/output/people-q-c-1124-959-10.jpg',
        imagePopup: 'http://19models.com/assets/img/models/kylieclark.jpg',
        modelVideoMp4: 'http://19models.com/lp/assets/video/isabelllee.mp4',
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
        imageCard:
          'http://lorempixel.com/output/people-q-c-1124-959-10.jpg',
        imagePopup: 'http://19models.com/assets/img/models/kylieclark.jpg',
        modelVideoMp4: 'http://19models.com/lp/assets/video/victoriaVideo.mp4',
        modelVideoWebm:
          'http://19models.com/lp/assets/video/victoriaVideo.webm',
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
        imageCard:
          'http://lorempixel.com/output/people-q-c-1124-959-10.jpg',
        imagePopup: 'http://19models.com/assets/img/models/kylieclark.jpg',
        modelVideoMp4: 'http://19models.com/assets/video/evelyndiamond.mp4',
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
        imageCard: 'http://lorempixel.com/output/people-q-c-1124-959-10.jpg',
        imagePopup: 'http://19models.com/assets/img/models/kylieclark.jpg',
        modelVideoMp4:
          'http://19models.com/lp/assets/video/KylieClarkVideo.mp4',
        longDesc:
          'One of the most amazing cam models that you have ever met. A unique combination between beauty and sexiness. But what makes Isabelle really unique is the fact that she listens. Share your dreams and ideas with her.',
        misc: '23 years old | Romania | Sagitarius',
      }
    }
  ]
  this.videoList = this.models.map((model) => ({
    id: model.fullname.split(' ').join(''),
    videoSrc: model.modelData.modelVideoMp4
  }))
}

RootController.prototype.getHomePage = function (req, res) {
  const { models, DOMAIN, videoList } = this
  res.render('pages/index', { models, DOMAIN, videoList })
}

module.exports = new RootController()

