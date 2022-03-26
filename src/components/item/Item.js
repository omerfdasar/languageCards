import "./Item.css";
const Item = ({ card }) => {
  return (
    <div className="card">
      <img className="card-logo" src={card.img} />
      <h3 className="card-title">{card.name}</h3>
    </div>
  );
};

export default Item;
