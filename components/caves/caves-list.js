import CaveItem from "./cave-item";

function CavesList(props) {
  const { items } = props;
  
  return (
    <ul>
      {items.map((cave) => (
        <CaveItem
          key={cave._id}
          id={cave._id}
          name={cave.name}
          location={cave.location}
          description={cave.description}
          imageUrl={cave.imageUrl}
        />
      ))}
    </ul>
  );
}

export default CavesList;