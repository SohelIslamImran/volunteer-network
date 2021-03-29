import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState("");

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageURL: imageURL
        }

        axios.post('https://volunteer-network-server-site.herokuapp.com/addEvent', eventData)
            .then(response => {
                response.data && console.log("Successfully Added");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '08d5da1c81cc5c52012f0b930505d031');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(response => {
                setImageURL(response.data.data.display_url);
                console.log(response.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="New exiting Event" ref={register} />
                <br />
                <input name="image" type="file" onChange={handleImageUpload} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvents;