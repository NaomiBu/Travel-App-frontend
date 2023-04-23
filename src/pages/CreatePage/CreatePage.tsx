import "./CreatePage.css";
import { useFetch } from "../../hooks/useFetch";
import { useForm } from "../../hooks/useForm";
import { FormEvent } from "react";
import { type Location } from "../../components/LocationList/LocationList";
import { Navigate } from "react-router-dom";

// type NewLocation = {
// name: string;
// country: string;
// description: string;
// };
type NewLocation = Omit<Location, "location_id">;

const initialFormData = {
name: "",
country: "",
photo: "",
description: ""
};

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
<form className="create-form" onSubmit={handleSubmit}>
<h2>Create Destination</h2>
<p>
Required fields are followed by{" "}
<strong>
<span aria-label="required">*</span>
</strong>
</p>

<label htmlFor="name">
Name
<strong>
<span aria-label="required">*</span>
</strong>
</label>

<input
type="text"
id="name"
name="name"
onChange={(e) => updateFormField(e)}
value={formData.name}
placeholder="London"
required
/>

<label htmlFor="country-code">
Country code
<strong>
<span aria-label="required">*</span>
</strong>
</label>
<input
type="text"
id="country-code"
name="country-code"
onChange={(e) => updateFormField(e)}
value={formData.country}
placeholder="UK"
required
/>

<label htmlFor="photo">
Photo
<strong>
<span aria-label="required">*</span>
</strong>
</label>
<input
type="url"
id="photo"
name="photo"
onChange={(e) => updateFormField(e)}
value={formData.photo}
placeholder="<https://images.unsplash.com/your-image-url>"
required
/>

<label htmlFor="description">
Description{" "}
<strong>
<span aria-label="required">*</span>
</strong>
</label>
<textarea
id="description"
name="description"
onChange={(e) => updateFormField(e)}
value={formData.description}
required
/>
<input type="submit" value="Create" className="btn btn-primary" />
</form>
);
}
