import BannerSlider from "../Components/BannerSlider/BannerSlider";
import CardSlider from "../Components/CardSlider/CardSlider";


function Myfile(){
  const urls = [
	"https://picsum.photos/id/870/1000",
	"https://picsum.photos/id/871/1000",
	"https://picsum.photos/seed/picsum/1000",
	"https://picsum.photos/1000"
  ];

  const cardDetails=[
	{
	    url:"https://via.assets.so/game.png?id=1",
	    about:"Sporting multiple categories like games, movies, music and... shoes? this generator provides a little more fun than a simple gray text on gray background.",
		name:"Counter Striker"
	},
	{
	    url:"https://via.assets.so/game.png?id=2",
	    about:"I can has placeholder imagez? Yes, yes you can. Our list wouldn't be complete without the requisite feline-inspired image generator, bursting with cute and fluffy friends",
		name:"Rainbow Six"
	},
	{
		url:"https://via.assets.so/game.png?id=3",
		about:"I can has placeholder imagez? Yes, yes you can. Our list wouldn't be complete without the requisite feline-inspired image generator, bursting with cute and fluffy friends",
		name:"Zelda"
	},
	{
		url:"https://via.assets.so/game.png?id=7",
		about:"I can has placeholder imagez? Yes, yes you can. Our list wouldn't be complete without the requisite feline-inspired image generator, bursting with cute and fluffy friends",
		name:"Assasin Creed"
	},
	{
		url:"https://via.assets.so/game.png?id=5",
		about:"I can has placeholder imagez? Yes, yes you can. Our list wouldn't be complete without the requisite feline-inspired image generator, bursting with cute and fluffy friends",
		name:"Grand Theft Auto"
	},
	{
		url:"https://via.assets.so/game.png?id=10",
		about:"I can has placeholder imagez? Yes, yes you can. Our list wouldn't be complete without the requisite feline-inspired image generator, bursting with cute and fluffy friends",
		name:"Player BattleGround"
	}

]
  return (
	<>
	  <BannerSlider urls={urls}/>
	  <CardSlider cardDetails={cardDetails}/>
	</>
  );
}
export default Myfile;