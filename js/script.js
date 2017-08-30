// loading
window.onload = function() {
  $('.loading').fadeOut('slow');
};
// check mobile
window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
var mobile = mobileAndTabletcheck();
var mq = window.matchMedia( "(max-width: 767px)" );
if (mobile == true && mq.matches && window.matchMedia("(orientation: landscape)").matches) {
   document.getElementsByTagName('BODY')[0].classList.add("landscape");
} else{
  document.getElementsByTagName('BODY')[0].classList.remove("landscape");
}
window.onresize = function(event) {
  if (mobile == true && mq.matches && window.matchMedia("(orientation: landscape)").matches) {
   document.getElementsByTagName('BODY')[0].classList.add("landscape");
  } else {
    document.getElementsByTagName('BODY')[0].classList.remove("landscape");
  }
};
//ready function
$(document).ready(function(e) {
  // tooltip
  $('[data-toggle="tooltip"]').tooltip();
  // js fullpage
  var device = mobileAndTabletcheck();
  if (device == true) {
    $('body').addClass('mobile');
    $('.btn-arrow-down, .btn-watch-wonderkid').click(function() {
        $('body').animate({ scrollTop: $('#section-wonderkid').offset().top }, 'slow');
    });
  } else {
    $('body').addClass('pc');
    $('#fullpage').fullpage({
      css3: true,
      scrollOverflow: true,
      normalScrollElements: '.nav-listvideo',
      // responsiveWidth: 1024,
      afterLoad: function(anchorLink, index){
        if(index == 1){
          $('#header .navbar-default').removeClass('nav-small')
        }
        if(index == 2){
          $('#header .navbar-default').addClass('nav-small')
          $('#section-2 .left-box-yellow').addClass('fadeInLeft')
          $('#section-2 .video-box').addClass('fadeInRight')
          $('#section-ampa .media').addClass('fadeInRight')
          $('#section-wonderkid .animate-wonder').addClass('fadeInRight')
        }
        if(index == 3){
          $('#section-3 .box-contact').addClass('fadeInUp')
        }
        if(index == 4){
          $('#section-4 .media').addClass('fadeInRight')
        }
      }
    });
    $('.btn-arrow-down, .btn-watch-wonderkid').click(function() {
      $.fn.fullpage.moveSectionDown();
    });
  }
  // get data from json
  $.get( "data.json", function(data) {
    var json = data.results;
    // var i = 0;
    for ( var i = 0; i<json.length; i++) {
      var obj = json[i];
      $('ul.nav-listvideo').append(`
        <li class= `+ (i === 0 ? 'active' : null ) +` >
          <a data-toggle="tab" href="#tap-`+ i +`">
            <div class="media">
              <div class="media-left">
                <div class="circle-day">
                  <div class="day">`+ obj.day +`</div>
                  <div class="years">`+ obj.years +`</div>
                </div>
              </div>
              <div class="media-body">
                <h4 class="media-heading">Thần đồng âm nhạc</h4>
                <p class="title">`+ obj.title +`</p>
              </div>
            </div>
          </a>
        </li>
      `);
      $('.col-right-wonderkid .tab-wonderkid').append(`
        <div id="tap-`+ i +`" class="tab-pane fade in `+ (i === 0 ? 'active' : null ) +`">
          <h3>`+ obj.title +`</h3>
            <div class="row-detail">
              <table class="table">
              </table>
            </div>
        </div>
      `);
    for (var j = 0; j < obj.content.length; j++) {
      var data = obj.content[j];
        $('#tap-'+ i +' .row-detail .table').append(`
          <tr>
              <td>
                  <p>`+ data.des +`</p>
                  <p>`+ data.actor +`</p>
              </td>
              <td class="col-list-icon">
                  <ul class="list-icon">
                      <li>
                          <a href='#modalWatchVideo' class="btn-watchVideo" video=`+ data.youtube +` data-toggle="modal" data-placement="top" title="Xem video">
                            <i class="fa fa-youtube-play fa-lg" aria-hidden="true"></i>
                          </a>
                      </li>
                      <li>
                          <a href='#modalListenMusic' class="btn-listenMusic" music=`+ data.music +` data-toggle="modal" data-placement="top" title="Nghe video">
                            <i class="fa fa-headphones fa-lg" aria-hidden="true"></i>
                          </a>
                      </li>
                      <li>
                          <a target="_blank" href=`+ data.music +` data-toggle="tooltip" data-placement="top" title="Tải video">
                            <i class="fa fa-cloud-download fa-lg" aria-hidden="true"></i>
                          </a>
                      </li>
                  </ul>
              </td>
          </tr>
      `)
    }
    };
  });
  // config modal Get New
  setTimeout(function(){
    $('#modalGetNew').modal('show');
  }, 72000);
  $('#modalGetNew').on('shown.bs.modal', function (e) {
    $.fn.fullpage.setAllowScrolling(false);
  })
  $('#modalGetNew').on('hidden.bs.modal', function (e) {
    $.fn.fullpage.setAllowScrolling(true);
    setTimeout(function(){
      $('#modalGetNew').modal('show');
    }, 72000);
  })
  // setup carousel
  $('#myCarousel').carousel({
    interval: 5000,
    pause: 'false'
  });
  // click modal video and music on wonderkid
  $('body').on('click','.btn-watchVideo',function() {
    var urlVideo = $(this).attr('video');
    $('#modalWatchVideo #videoModal').attr("src", '//www.youtube.com/embed/' + urlVideo)
  }); 
  $('#modalWatchVideo').on('hidden.bs.modal', function (e) {
    $('#modalWatchVideo #videoModal').attr("src","")
  })
  $('body').on('click','.btn-listenMusic',function() {
    var urlMusic = $(this).attr('music');
    $('#modalListenMusic #musicModal').attr("src", urlMusic)
  });
  $('#modalListenMusic').on('hidden.bs.modal', function (e) {
    $('#modalListenMusic #musicModal').attr("src","")
  })
});
