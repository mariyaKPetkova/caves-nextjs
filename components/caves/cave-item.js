import Link from "next/link";

function CaveItem(props) {
  const { name, location, id } = props;
  const detailLink = `/catalog/${id}`;

  
  return (
    <li >
        <h2>{name}</h2>
        <p>{location}</p>
        
        <Link href={detailLink}>Details</Link>
    </li>
  );
}

export default CaveItem;