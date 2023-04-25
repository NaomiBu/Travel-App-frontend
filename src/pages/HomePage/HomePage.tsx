// src/pages/Home/HomePage.tsx
import "./HomePage.css";
import { useFetch } from "../../hooks/useFetch";
import LocationList, { type Location } from "../../components/LocationList/LocationList";


export type ResponseData = { locations: Location []; }

export default function HomePage() {
const { data, error } = useFetch<ResponseData>(process.env.REACT_APP_DB_URL);
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

const {locations} = data

return <LocationList locations={locations} />;

}





  
  