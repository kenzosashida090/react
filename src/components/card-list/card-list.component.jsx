import Card from "../card/card.component";

const CardList = ({ coffees }) => (
  <div className="card-list">
    {coffees.map((el) => {
      return <Card key={el.id} coffee={el} />;
    })}
  </div>
);

export default CardList;
