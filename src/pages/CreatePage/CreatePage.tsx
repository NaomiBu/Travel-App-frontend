import "./CreatePage.css";
import { useFetch } from "../../hooks/useFetch";
import { useForm } from "../../hooks/useForm";
import { FormEvent } from "react";
import { type Location } from "../../components/LocationList/LocationList";
import { Navigate } from "react-router-dom";
import Form from "../../components/Form/Form";

const initialFormData = {
  name: "",
  country: "",
  photo: "",
  description: ""
  };


export type NewLocation = Omit<Location, "location_id">;



export default function CreatePage() {
const { postData, data, error } = useFetch<NewLocation>(
`${process.env.REACT_APP_DB_URL}`,
{ method: "POST" }
);
const { formData, updateFormField } = useForm<NewLocation>(initialFormData);

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
e.preventDefault(); // prevent the default submit event which reloads the page
postData(formData);
};

if (data) { return <Navigate to="/" />};
      
      if (error)
    return (
      <p aria-live="polite" role="status">
        {error.message}
      </p>
    );
 
return (
<Form
  handleSubmit={handleSubmit}
  formData={formData}
  updateFormField={updateFormField}
/>

);
}
