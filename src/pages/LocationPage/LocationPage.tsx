import "./LocationPage.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import  { type Location } from "../../components/LocationList/LocationList";


export default function LocationPage() {
  const { locationId } = useParams();
  const { data, error } = useFetch<Location>(`${process.env.REACT_APP_DB_URL}/${locationId}`);

  if (error)
  return (
      <p aria-live="polite" role="status">
          {error.message}
      </p>
  );
if (!data)
  return (
      <p aria-live="polite" role="status">
          Loading...
      </p>
  );

 const { name, country, photo, description } = data;

 return (
  <article className="recipe">
    <div className="image-wrapper">
      <img src={photo} alt="" />
    </div>
    <div className="recipe-meta">
      <h1>{name}</h1>
      <h1>{country}</h1>
      <h3>{description}</h3>
  </div>
  </article>
);

}