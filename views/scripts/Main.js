Handler.Main = (function (Handler) {
  'use strict'
  const init = () => {
    Handler.Controllers.init()
  }

  return {
    init
  }
})(Handler)


Handler.Main.init()
