class SongList{
    private songs=[];
	constructor(private songname: string, private artists: string){

	}
	addSong(songname:string,artists:string){
		this.songs.push(new SongList(songname,artists));
	}
	removeBySong(songname){
	var result= this.songs.filter(function(x,i){if(x.songname===songname) return i});
	if(result.length!=0){
		for(var i=0;i<result.length;i++){
			this.songs.splice(this.songs.indexOf(result[i]),1);
		}
		}
	}
	listSongs(){
	var _song=this.songs
	var len=_song.length;
	for(var i=0;i<len;i++)
		console.log(_song[i].songname+" "+_song[i].artists);
	}
	getRandamSong(){
	var len=this.songs.length;
	var index=Math.floor(Math.random()*len);
	return this.songs[index];
	}
	play(){
      console.log('Playing ' + this.songname + ' by ' + this.artists);
	}
}