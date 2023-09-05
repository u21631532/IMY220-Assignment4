function matchYoutubeUrl(url) {
    var p = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|youtu\.be\/|\/)([a-zA-Z0-9_-]+)/;
    var match = url.match(p);
    if (match) {
        return match[1];
    }
    return false;
}

$(document).ready(function () {
    $('.submit').on('click', function () {
        if (!$("#message").val()) {
            return;
        } else {
            var x = $('textarea[name=message]').val();
            var y = matchYoutubeUrl(x);
            var btnClicked = $(this).attr('id');  // Check which button was clicked

            let m, d;

            if (btnClicked === "left") {
                m = $("<div></div>", {
                    html: x,
                    class: 'mb-3 col-md-3 col-md-6 offset-md-3 customLeft rounded'
                });
                $(".messages").append(m);
            } else {
                d = $("<div></div>", {
                    html: x,
                    class: 'mb-3 col-md-3 col-md-6 offset-md-3 customRight rounded'
                });
                $(".messages").append(d);
            }
            
            if (y) {
                let v = $("<iframe></iframe>",
                    {
                        src: "https://www.youtube.com/embed/" + y,
                        width: "100%",
                        height: "56.25%", // 16:9 aspect ratio
                        frameborder: "0",
                        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                        allowfullscreen: "true"
                    });
                if (btnClicked === "left") {
                    m.append(v);
                } else {
                    d.append(v);
                }
            }

            // Clear the textarea after sending the message
            $("#message").val('');
        }
    });
});
