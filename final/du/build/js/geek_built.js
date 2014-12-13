function tagSearch(form) {
    window.location = "/tagged/" + form.tag.value;
    return false
}
function repairAll(index) {
    $('article').removeClass('new');
    $('.tumblrAutoPager_page_info_' + index).nextAll('article').addClass('new');
    $('.new .text .postInner').each(function () {
        var root = $(this),
            href = root.siblings('.date').children('a').attr('href'),
            firstImage = root.find('img').first();
        if (firstImage.length) {
            $(firstImage).insertBefore(root).addClass('bustImage').wrap('<a href="' + href + '" class="imageLink" />');
            root.removeClass('postInner').addClass('postText')
        }
    });
    $('.new h1').each(function () {
        var perma = $(this).closest('.caption').siblings('.date').children('a').attr('href');
        $(this).wrapInner('<a href="' + perma + '" />')
    });
    $('.new .moreLink').each(function () {
        $(this).siblings('p').last().append($(this))
    });
    $('.new .tags li a').each(function () {
        $(this).prepend('<span>Â</span>')
    });
    $('.new p').each(function () {
        if ($(this).text().length == 0) {
            $(this).remove()
        }
    });
    var w, h;

    function openPopup(url, w, h) {
        var left = (screen.width / 2) - (w / 2);
        var top = (screen.height / 2) - (h / 2);
        window.open(url, "popup_id", "scrollbars=no,resizable=no,width=" + w + ",height=" + h + ",top=" + top + ",left=" + left);
        return false
    }
    $('.new .socialButtons a').each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            var type = $(this).attr('class');
            if (type == 'facebook') {
                w = 640, h = 352
            } else if (type == 'twitter') {
                w = 470, h = 265
            } else if (type == 'googleplus') {
                w = 999, h = 780
            } else if (type == 'stumble') {
                w = 740, h = 390
            } else if (type == 'reblog') {
                w = 970, h = 780
            } else {
                w = 700, h = 400
            }
            openPopup(this.href, w, h)
        })
    });
    document.addEventListener('click', function (event) {
        var myLike = event.target;
        if (myLike.className.indexOf('my-like') > -1) {
            var frame = document.getElementById('my-like-frame'),
                liked = (myLike.className == 'my-liked'),
                command = liked ? 'unlike' : 'like',
                reblog = myLike.getAttribute('data-reblog'),
                id = myLike.getAttribute('data-id'),
                oauth = reblog.slice(-8);
            frame.src = 'http://www.tumblr.com/' + command + '/' + oauth + '?id=' + id;
            liked ? myLike.className = 'my-like' : myLike.className = 'my-liked'
        }
    }, false);
    $('.new .video').each(function () {
        var audioID = $(this).attr("id");
        var $videoPost = $(this);
        $.ajax({
            url: '/api/read/json?id=' + audioID,
            dataType: 'jsonp',
            timeout: 50000,
            success: function (data) {
                $videoPost.append('\x3cdiv class=\x22video_player_label\x22\x3e' + data.posts[0]['video-player'] + '\x3c/div\x3e')
            }
        })
    });
    $('.new .audio').each(function () {
        $(this).children('span').remove();
        var audioID = $(this).attr("id");
        var $audioPost = $(this);
        $.ajax({
            url: '/api/read/json?id=' + audioID,
            dataType: 'jsonp',
            timeout: 50000,
            success: function (data) {
                $audioPost.append('\x3cdiv class=\x22audio_player\x22\x3e' + data.posts[0]['audio-player'] + '\x3c/div\x3e')
            }
        })
    })
}
$(function () {
    $('.text .postInner').each(function () {
        var root = $(this),
            href = root.siblings('.date').children('a').attr('href'),
            eachImage = root.find('img').each();
            $(eachImage.insertBefore(root));
            firstImage = root.find('img').first();
        // if (firstImage.length) {
        //     $(firstImage).insertBefore(root).addClass('bustImage').wrap('<a href="' + href + '" class="imageLink" />');
        //     root.removeClass('postInner').addClass('postText')
        //  }
    });
    $('h1').each(function () {
        var perma = $(this).closest('.caption').siblings('.date').children('a').attr('href');
        $(this).wrapInner('<a href="' + perma + '" />')
    });
    $('.moreLink').each(function () {
        $(this).siblings('p').last().append($(this))
    });
    $('.tags li a').each(function () {
        $(this).prepend('<span>Â</span>')
    });
    //check if the url is ask
    var myPath = window.location.pathname.split('/');
    //if not ask run the script
    if (myPath[1] !== "ask") {
        $('p').each(function () {
            if ($(this).text().length == 0) {
                $(this).remove()
            }
        });
    }
    var w, h;

    function openPopup(url, w, h) {
        var left = (screen.width / 2) - (w / 2);
        var top = (screen.height / 2) - (h / 2);
        window.open(url, "popup_id", "scrollbars=no,resizable=no,width=" + w + ",height=" + h + ",top=" + top + ",left=" + left);
        return false
    }
    $('.socialButtons a').each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            var type = $(this).attr('class');
            if (type == 'facebook') {
                w = 640, h = 352
            } else if (type == 'twitter') {
                w = 470, h = 265
            } else if (type == 'googleplus') {
                w = 999, h = 780
            } else if (type == 'stumble') {
                w = 740, h = 390
            } else if (type == 'reblog') {
                w = 970, h = 780
            } else {
                w = 700, h = 400
            }
            openPopup(this.href, w, h)
        })
    });
    document.addEventListener('click', function (event) {
        var myLike = event.target, 
        	mypath = location.pathname;

        if (myLike.className.indexOf('my-like') > -1 && mypath != "/ask") {
            var frame = document.getElementById('my-like-frame'),
                liked = (myLike.className == 'my-liked'),
                command = liked ? 'unlike' : 'like',
                reblog = myLike.getAttribute('data-reblog'),
                id = myLike.getAttribute('data-id'),
                oauth = reblog.slice(-8);
            frame.src = 'http://www.tumblr.com/' + command + '/' + oauth + '?id=' + id;
            liked ? myLike.className = 'my-like' : myLike.className = 'my-liked'
        }
    }, false);
    var moz = navigator.userAgent.match(/firefox/i);
    if (moz) {
        $('#icon').after('<div id="half-circle"><div id="edge-top"></div><div id="edge-bottom"></div></div>')
    }
    setTimeout(function () {
        var descH = $('div#mask').height();
        $('.unitWrap').css('padding-top', descH - 59);
        $('.unitWrap').css('margin-top', -(descH - 63))
    }, 100);
    var path = window.location.pathname;
    $('a[href="' + path + '"]').css('color', '#FF9E28');
    $('#ask_form').parents('.postInner').css({
        background: 'transparent',
        paddingTop: 0,
        paddingBottom: 0
    });
    var pathArray = window.location.pathname.split('/');
    if ($('.postInner p').html() == 'The URL you requested could not be found.' && pathArray[1] == 'tagged') {
        $('.text').removeClass('text');
        $('.postInner').addClass('notFound');
        $('.postInner h4 a').html('No Posts Tagged <i>' + pathArray[2] + '</i>').removeAttr('href');
        $('.postInner p').remove()
    }
});