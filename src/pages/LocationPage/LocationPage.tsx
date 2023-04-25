import "./LocationPage.css";
import { Navigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import  { type Location } from "../../components/LocationList/LocationList";
import Weather from "../../components/Weather/Weather";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EditPage from "../EditPage/EditPage";

export type ResponseData = {
  location: Location[]
}

export default function LocationPage() {
  const { locationId } = useParams();
  const navigate = useNavigate();
  console.log(`${process.env.REACT_APP_DB_URL}/${locationId}`)
  const { data, error } = useFetch<ResponseData>(`${process.env.REACT_APP_DB_URL2}/${locationId}`);

  const [showEditPage, setShowEditPage] = useState(false);

 const handleClick = () => {
  
  fetch(`${process.env.REACT_APP_DB_URL2}/${locationId}`, {method: 'DELETE'}).then(
() => navigate('/')).catch(
  (error) => {
 console.log(error)
  }
)
 }

 const handleEdit = () => {
  setShowEditPage(!showEditPage);
};
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
 const { location } = data;
 const {name, photo, country, description} = location[0]

 if (showEditPage)
    return <EditPage initialFormData={{ name, country, photo, description }} />;

 return (
  <article className="location">
     <h1>{name}</h1>
    <div className="image-wrapper">
      <img src={photo} alt="" />
    </div>
    <div className="location-meta">
     
      <h1>{country}</h1>
      <h3>{description}</h3>
      <input
          type="submit"
          value="Delete"
          onClick={handleClick}
        />
    <input
          type="submit"
          value="Edit"
          onClick={handleEdit}
        />
  </div>

  <Weather searchTerm={`${name}, ${country}`} />
  </article>
);

}