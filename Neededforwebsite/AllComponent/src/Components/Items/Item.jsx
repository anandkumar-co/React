 import "./Item.css";
 function Item(props){
return(
    <div className="item">
        <ul className="item-list">
            <li>
                <figure>
                    <img src={props.apiData.sprites.other.dream_world.front_default} alt="" />
                </figure>
                <h1>{props.apiData.name}</h1>
            </li>
        </ul>
    </div>
)
 }
 export default Item;