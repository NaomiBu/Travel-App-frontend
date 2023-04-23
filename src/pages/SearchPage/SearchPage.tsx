import LocationList, {type Location,}  from "../../components/LocationList/LocationList";

import { useFetch } from "../../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import "./SearchPage.css";

export default function SearchPage() {
  const { data, error } = useFetch<Location[]>(process.env.REACT_APP_DB_URL);

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

  return <LocationList locations={data} />;
}
