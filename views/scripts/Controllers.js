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
    $(document).on('scroll', function() {
        if (window.scrollY > 160) {
            $(".navbar-default").removeClass("hidden");
        }

        if (window.scrollY < 160) {
            $(".navbar-default").addClass("hidden");
        }
    });

    // $("#sticky-navbar-models").headroom({
    //   classes : {
    //     // when element is initialised
    //     initial : "hidden",
    //     // when scrolling up
    //     pinned : "hidden",
    //     // when scrolling down
    //     unpinned : "headroom--unpinned",
    //     // when above offset
    //     top : "nav-up",
    //     // when below offset
    //     notTop : "nav-up",
    //     // when at bottom of scoll area
    //     bottom : "nav-bottom",
    //     // when not at bottom of scroll area
    //     notBottom : "headroom--not-bottom"
    //   }
    // })
    playVideoAsModel()
  }
  return {
    init
  }
}(videoList))
