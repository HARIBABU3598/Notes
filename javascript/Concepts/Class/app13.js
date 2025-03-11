class Movie{
    constructor(movieName,Hero,Heroine,price){
        this.movieName=movieName;
        this.Heroine=Heroine;
        this.Hero=Hero;
        this.price=price;
    }
    displaymovie(){
        console.log(`Movie : ${this.movieName}`);
        console.log(`Hero : ${this.Hero}`);
        console.log(`Heroine : ${this.Heroine}`);
    }
    moviePrice(){
        return this.price;
    }
}
const movie1=new Movie("Ghilli","vijay","Thrisha","150");
const movie2=new Movie("Thirupachi","vijay","Thrisha","180");
movie1.displaymovie();
const price=movie1.moviePrice();
console.log(`price of ${movie1.movieName} is ${price} `);
