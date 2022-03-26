import { languages } from "../../helper/data";
import Item from "../item/Item";
const Card = () => {
  return (
    <div className="cards-area-container">
      <div>
        <h1 className="language-title">Languages</h1>
        {console.log(languages)}
        {languages.map((item, index) => {
          return <Item card={item} key={index} />;
        })}
      </div>
    </div>
  );
};
export default Card;
