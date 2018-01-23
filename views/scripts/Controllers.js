Handler.Controllers = (function (videoList) {

  const playVideoAsModel = () => {
    for (let i = 0;i < videoList.length; i += 1) {
      const modelId = `#video${videoList[i].id}`
      const videoTemplate = $('#videoTemplate').html()
      $(document).on('click', modelId, function () {
        $(modelId)
          .parent()
          .html(Mustache.to_html(videoTemplate, {
            video: videoList[i].videoSrc
          }))
      })
    }
  }

  const init = () => {
    $.material.init();

    $('[datepicker]').datepicker({
      autoclose: true,
      minDate: moment()
    })

    $(document).on('scroll', function() {
        if (window.scrollY > 160) {
            $(".navbar-default").removeClass("hidden");
        }

        if (window.scrollY < 160) {
            $(".navbar-default").addClass("hidden");
        }
    });

    playVideoAsModel()
  }
  return {
    init
  }
}(videoList))
