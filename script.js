var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var message = "Helloo World";
console.log(message);
var Gretting = (function () {
    function Gretting() {
    }
    Gretting.prototype.msg = function (param) {
        console.log("Hello World " + param);
    };
    return Gretting;
}());
var obj = new Gretting();
obj.msg("Typescript");
var author = "Ashok";
var nameLists = ['a', 'b', 'c'];
var sayHello;
sayHello = function (name) {
    return "Hello " + name;
};
sayHello(author);
var person = {
    name: "Ashok Kumaresan",
    height: 183
};
var monuments = [];
monuments.push({
    name: "Ashok",
    age: 25
});
monuments.push({
    name: 'Peter',
    age: 96
});
monuments.push({
    name: 'Angel',
    age: 20
});
function CompareAge(a, b) {
    if (a.age > b.age)
        return -1;
    if (a.age < b.age)
        return 1;
    return 0;
}
var AgedPerson = monuments.sort(CompareAge);
console.log("Aged Person is: " + AgedPerson[0]["name"]);
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["PedalCycle"] = 10] = "PedalCycle";
    VehicleType[VehicleType["MotorCycle"] = 11] = "MotorCycle";
    VehicleType[VehicleType["Car"] = 12] = "Car";
    VehicleType[VehicleType["Van"] = 13] = "Van";
    VehicleType[VehicleType["Bus"] = 14] = "Bus";
    VehicleType[VehicleType["Lorry"] = 15] = "Lorry";
})(VehicleType || (VehicleType = {}));
var type = VehicleType.Lorry;
var DiscFlags;
(function (DiscFlags) {
    DiscFlags[DiscFlags["None"] = 0] = "None";
    DiscFlags[DiscFlags["Drive"] = 1] = "Drive";
    DiscFlags[DiscFlags["Influence"] = 2] = "Influence";
    DiscFlags[DiscFlags["Steadiness"] = 4] = "Steadiness";
    DiscFlags[DiscFlags["Conscientiousness"] = 8] = "Conscientiousness";
})(DiscFlags || (DiscFlags = {}));
// Using flags
var personality = DiscFlags.Drive | DiscFlags.Conscientiousness;
// Testing flags
// true
var hasD = (personality & DiscFlags.Drive) == DiscFlags.Drive;
var avenueRoad = {
    bedrooms: 11,
    bathrooms: 10
};
var mansion = avenueRoad;
function getAverage(a, b, c) {
    var total = a;
    var count = 1;
    total += b;
    count++;
    if (typeof c !== 'undefined') {
        total += c;
        count++;
    }
    var average = total / count;
    return 'The average is ' + average;
}
function concatenate(items, separator, beginAt, endAt) {
    if (separator === void 0) { separator = ','; }
    if (beginAt === void 0) { beginAt = 0; }
    if (endAt === void 0) { endAt = items.length; }
    var result = '';
    for (var i = beginAt; i < endAt; i++) {
        result += items[i];
        if (i < (endAt - 1)) {
            result += separator;
        }
    }
    return result;
}
function Average() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }
    var average = total / count;
    return 'The average is ' + average;
}
// implementation signature
function Average1(a, b, c) {
    var total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
    var average = total / 3;
    return 'The average is ' + average;
}
var result = Average1(4, 3, 8); // 5
var addNumbers = function (a, b) { return a + b; };
var ScopePreservingExample = {
    text: "Property from lexical scope",
    run: function () {
        var _this = this;
        setTimeout(function () {
            alert(_this.text);
        }, 1000);
    }
};
var Maruthi = (function () {
    function Maruthi() {
    }
    Maruthi.prototype.test = function () {
        //this.currentLocation=loc;
        return new Maruthi();
    };
    Maruthi.prototype.travelTo = function (p) {
    };
    Maruthi.prototype.addPassenger = function (pass) {
    };
    Maruthi.prototype.removePassenger = function (pass) {
    };
    return Maruthi;
}());
var Song = (function () {
    function Song(artist, title) {
        this.artist = artist;
        this.title = title;
    }
    Song.prototype.play = function () {
        console.log('Playing ' + this.title + ' by ' + this.artist);
    };
    return Song;
}());
var Jukebox = (function () {
    function Jukebox(songs) {
        this.songs = songs;
    }
    Jukebox.prototype.play = function () {
        var song = this.getRandomSong();
        song.play();
    };
    Jukebox.prototype.getRandomSong = function () {
        var songCount = this.songs.length;
        var songIndex = Math.floor(Math.random() * songCount);
        return this.songs[songIndex];
    };
    return Jukebox;
}());
var songs = [
    new Song('Bushbaby', 'Megaphone'),
    new Song('Delays', 'One More Lie In'),
    new Song('Goober Gun', 'Stereo'),
    new Song('Sohnee', 'Shatter'),
    new Song('Get Amped', 'Celebrity')
];
var jukebox = new Jukebox(songs);
jukebox.play();
var SongList = (function () {
    function SongList(artist, title) {
        this.artist = artist;
        this.title = title;
    }
    SongList.prototype.play = function () {
        console.log('Playing ' + this.title + ' by ' + this.artist);
    };
    SongList.Comparer = function (a, b) {
        if (a.title === b.title) {
            return 0;
        }
        return a.title > b.title ? 1 : -1;
    };
    return SongList;
}());
var Playlist = (function () {
    function Playlist(songs) {
        this.songs = songs;
    }
    Playlist.prototype.play = function () {
        var song = this.songs.pop();
        song.play();
    };
    Playlist.prototype.sort = function () {
        this.songs.sort(SongList.Comparer);
    };
    return Playlist;
}());
var RepeatingPlaylist = (function (_super) {
    __extends(RepeatingPlaylist, _super);
    function RepeatingPlaylist(songs) {
        var _this = _super.call(this, songs) || this;
        _this.songIndex = 0;
        return _this;
    }
    RepeatingPlaylist.prototype.play = function () {
        this.songs[this.songIndex].play;
        this.songIndex++;
        if (this.songIndex >= this.songs.length) {
            this.songIndex = 0;
        }
    };
    return RepeatingPlaylist;
}(Playlist));
