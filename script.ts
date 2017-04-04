var message = "Helloo World" 
console.log(message);

class Gretting{
	msg(param):void{
	console.log("Hello World "+param);		
	}
}
var obj=new Gretting();
obj.msg("Typescript");
var author: string="Ashok";
var nameLists: string[]=['a','b','c'];
var sayHello: (name:string)=>string;
sayHello=function(name:string){
	return "Hello "+name;
}
sayHello(author);
interface Person{
	name:string,
	height:number
}
var person:Person={
	name:"Ashok Kumaresan",
	height:183
}
interface IMonuments{
	name:string,
	age:number
}
var monuments:IMonuments[]=[];
monuments.push({
	name:"Ashok",
	age:25	
});
monuments.push({
name: 'Peter',
age: 96
});
monuments.push({
name: 'Angel',
age: 20
});

function CompareAge(a:IMonuments,b:IMonuments){
	if(a.age>b.age)
		return -1;
    if(a.age<b.age)
		return 1;	
	return 0;	
}
var AgedPerson=monuments.sort(CompareAge);
console.log("Aged Person is: "+AgedPerson[0]["name"]);

enum VehicleType {
PedalCycle=10,
MotorCycle,
Car,
Van,
Bus,
Lorry
}
var type = VehicleType.Lorry;

enum DiscFlags {
None = 0,
Drive = 1,
Influence = 2,
Steadiness = 4,
Conscientiousness = 8
}
// Using flags
var personality = DiscFlags.Drive | DiscFlags.Conscientiousness;
// Testing flags
// true
var hasD = (personality & DiscFlags.Drive) == DiscFlags.Drive;

interface House {
bedrooms: number;
bathrooms: number;
}
interface Mansion {
bedrooms: number;
bathrooms: number;
butlers: number;
}
var avenueRoad: House = {
bedrooms: 11,
bathrooms: 10,

};
var mansion: Mansion = <Mansion>avenueRoad;

function getAverage(a: number, b: number, c?: number):string {
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

function concatenate(items: string[], separator = ',', beginAt = 0, endAt = items.length) {
var result = '';
for (var i = beginAt; i < endAt; i++) {
result += items[i];
if (i < (endAt - 1)) {
result += separator;
}
}
return result;
}

function Average(...a: number[]): string {
var total = 0;
var count = 0;
for (var i = 0; i < a.length; i++) {
total += a[i];
count++;
}
var average = total / count;
return 'The average is ' + average;
}

function Average1(a: string, b: string, c: string): string;
function Average1(a: number, b: number, c: number): string;
// implementation signature
function Average1(a: any, b: any, c: any): string {
var total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
var average = total / 3;
return 'The average is ' + average;
}
var result = Average1(4, 3, 8); // 5
var addNumbers = (a: number, b: number) => a + b;
var ScopePreservingExample = {
text: "Property from lexical scope",
run: function () {
setTimeout(() => {
alert(this.text);
}, 1000);
}
};

interface Point {
// Properties
x: number;
y: number;
}
interface Passenger {
// Properties
name: string;
}

interface Vehicle {
	// Constructor
	//new() : Vehicle;
	// Properties
	currentLocation: Point;
	// Methods
	travelTo(point: Point);
	addPassenger(passenger: Passenger);
	removePassenger(passenger: Passenger);
}

class Maruthi implements Vehicle{	
	constructor(){
	 	
	}
	public test(){
		//this.currentLocation=loc;
		return new Maruthi();
	}
	public currentLocation:Point;
	public travelTo(p:Point){

	}
	public addPassenger(pass:Passenger){

	}
	public removePassenger(pass:Passenger){

	}
}
class Song {
constructor(private artist: string, private title: string) {
}
play() {
console.log('Playing ' + this.title + ' by ' + this.artist);
}
}
class Jukebox {
constructor(private songs: Song[]) {
}
play() {
var song = this.getRandomSong();
song.play();
}
private getRandomSong() {
var songCount = this.songs.length;
var songIndex = Math.floor(Math.random() * songCount);
return this.songs[songIndex];
}
}
var songs = [
new Song('Bushbaby', 'Megaphone'),
new Song('Delays', 'One More Lie In'),
new Song('Goober Gun', 'Stereo'),
new Song('Sohnee', 'Shatter'),
new Song('Get Amped', 'Celebrity')
];
var jukebox = new Jukebox(songs);
jukebox.play();


interface Audio {
play(): any;
}
class SongList implements Audio {
constructor(private artist: string, private title: string) {
}
play() : void {
console.log('Playing ' + this.title + ' by ' + this.artist);
}
static Comparer(a: SongList, b: SongList) {
if (a.title === b.title) {
return 0;
}
return a.title > b.title ? 1 : -1;
}
}

class Playlist {
constructor(public songs: Audio[]) {
}
play() {
var song = this.songs.pop();
song.play();
}
sort() {
this.songs.sort(SongList.Comparer);
}
}
class RepeatingPlaylist extends Playlist {
private songIndex = 0;
constructor(songs: SongList[]) {
super(songs);
}
play() {
this.songs[this.songIndex].play;
this.songIndex++;
if (this.songIndex >=this.songs.length) {
this.songIndex = 0;
}
}
}