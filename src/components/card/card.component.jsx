const Card = ({ coffee }) => {
  const { title, description, image } = coffee;

  return (
    <div className="card">
      <img className="images" alt={`${title}`} src={`${image}`} />
      <div className="info">
        <h1>{title}</h1>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};
export default Card;
