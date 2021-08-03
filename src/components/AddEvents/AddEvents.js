import React from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1>Add your awesome event here.</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input defaultValue="test" {...register("example")} />
                <br />
                <input {...register("exampleRequired", { required: true })} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvents;