$(function() {
    // Tạo biến và gán giá trị
    var playerTrack = $("#player-track"),
        bgArtwork = $('#bg-artwork'),
        bgArtworkUrl, albumName = $('#album-name'),
        trackName = $('#track-name'),
        albumArt = $('#album-art'),
        sArea = $('#s-area'),
        seekBar = $('#seek-bar'),
        trackTime = $('#track-time'),
        insTime = $('#ins-time'),
        sHover = $('#s-hover'),
        playPauseButton = $("#play-pause-button"),
        i = playPauseButton.find('i'),
        tProgress = $('#current-time'),
        tTime = $('#track-length'),
        tFlag = false,
        albums = ['Nơi này có anh', 'Bỏ em vào balo', 'Sai cách yêu', 'Một bước yêu vạn dặm đau', 'Nắm lấy tay anh', 'BIGCITYBOI'],
        trackNames = ['Sơn Tùng MTP', 'Tân Trần', 'Lê Bảo Bình', 'Mr.Siro', 'Tuấn Hưng', 'TOULIVER x BINZ'],
        albumArtworks = ['1', '2', '3', '4', '5', '6'],
        trackUrl = ['./Musics/song1.mp3', './Musics/song2.mp3', './Musics/song3.mp3', './Musics/song4.mp3', './Musics/song5.mp3', './Musics/song6.mp3'],
        playPreviousTrackButton = $('#play-previous'),
        playNextTrackButton = $('#play-next'),
        currIndex = -1

    // Keys chứa thông tin bài hát
    var songs = [

        {
            artist: "Sơn Tùng MTP",
            name: "Nơi này có anh",
            url: "./Musics/song1.mp3",
            picture: "./img/pic1.jpg"
        },
        {
            artist: "Tân Trần",
            name: "Bỏ em vào balo",
            url: "./Musics/song2.mp3",
            picture: "./img/pic2.jpg"
        },
        {
            artist: "Lê Bảo Bình",
            name: "Sai cách yêu",
            url: "./Musics/song3.mp3",
            picture: "./img/pic3.jpg"
        },
        {
            artist: "Mr.Siro",
            name: "Một bước yêu vạn dặm đau",
            url: "./Musics/song4.mp3",
            picture: "./img/pic4.jpg"
        },
        {
            artist: "Tuấn Hưng",
            name: "Nắm lấy tay anh",
            url: "./Musics/song5.mp3",
            picture: "./img/pic5.jpg"
        },
        {
            artist: "TOULIVER x BINZ",
            name: "BIGCITYBOI",
            url: "./Musics/song6.mp3",
            picture: "./img/pic6.jpg"
        }

    ];

    // Hàm playPause dùng để dừng nhạc / tiếp tục phát từ điểm dừng cuối cùng
    function playPause() {
        setTimeout(function() {
            if (audio.paused) {
                playerTrack.addClass('active');
                albumArt.addClass('active');
                i.attr('class', 'fas fa-pause');
                audio.play();
            } else {
                playerTrack.removeClass('active');
                albumArt.removeClass('active');
                i.attr('class', 'fas fa-play');
                audio.pause();
            }
        }, 200)
    }

    // Hàm showHover dùng để set giá trị muốn click khi hover trên thanh trượt
    function showHover(event) {
        seekBarPos = sArea.offset();
        seekT = event.clientX - seekBarPos.left;
        seekLoc = audio.duration * (seekT / sArea.outerWidth());

        sHover.with(seekT);

        cM = seekLoc / 60;

        ctMinutes = Math.floor(cM);
        ctSeconds = Math.floor(seekLoc - ctMinutes);

        if ((ctMinutes < 0) || (ctSeconds < 0))
            return;

        if (ctMinutes < 10)
            ctMinutes = '0' + ctMinutes;
        if (ctSeconds < 10)
            ctSeconds = '0' + ctSeconds;

        if (isNaN(ctMinutes) || isNaN(ctSeconds))
            insTime.text('00:00');
        else
            insTime.text(ctMinutes + ':' + ctSeconds);

        insTime.css({
            'left': seekT,
            'margin-left': '-22px'
        }).fadeIn(0);
    }

    // Hàm hideHover dùng để đặt lại các text đếm thời gian về điểm bắt đầu
    function hideHover() {
        sHover.width(0);
        insTime.text('00:00').css({
            'left': '0px',
            'margin-left': '0px'
        }).fadeIn(0);
    }

    // Hàm playFromClickedPos có chức năng chuyển lời bài hát đến mốc thời gian đã chọn trên thanh trượt
    function playFromClickedPos() {
        audio.currentTime = seekLoc;
        seekBar.width(seekT);
        hideHover();
    }

    // Hàm updateCurrTime dùng để set thời gian, nếu đủ 100% thì chuyển bài và set thời gian về bắt đầu
    function updateCurrTime() {
        nTime = new Date();
        nTime = nTime.getTime();

        if (!tFlag) {
            tFlag = true;
            trackTime.addClass('active');
        }

        curMinutes = Math.floor(audio.currentTime / 60);
        curSeconds = Math.floor(audio.currentTime - curMinutes * 60);

        durMinutes = Math.floor(audio.duration / 60);
        durSeconds =
    }

    // Hàm selectTrack dùng để chuyển bài (tiến || lùi)


    // Hàm initPlayer dùng để bắt đầu Player và gán tuần tự các events

});