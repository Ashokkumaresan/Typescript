var SongList = (function () {
    function SongList(songname, artists) {
        this.songname = songname;
        this.artists = artists;
        this.songs = [];
    }
    SongList.prototype.addSong = function (songname, artists) {
        this.songs.push(new SongList(songname, artists));
    };
    SongList.prototype.removeBySong = function (songname) {
        var result = this.songs.filter(function (x, i) { if (x.songname === songname)
            return i; });
        if (result.length != 0) {
            for (var i = 0; i < result.length; i++) {
                this.songs.splice(this.songs.indexOf(result[i]), 1);
            }
        }
    };
    SongList.prototype.listSongs = function () {
        var _song = this.songs;
        var len = _song.length;
        for (var i = 0; i < len; i++)
            console.log(_song[i].songname + " " + _song[i].artists);
    };
    SongList.prototype.getRandamSong = function () {
        var len = this.songs.length;
        var index = Math.floor(Math.random() * len);
        return this.songs[index];
    };
    SongList.prototype.play = function () {
        console.log('Playing ' + this.songname + ' by ' + this.artists);
    };
    return SongList;
}());
