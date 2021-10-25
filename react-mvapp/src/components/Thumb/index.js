import React from "react";
//styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (
    <div>
        <Image src={image} alt="='movir-thumb" />
    </div>
);

export default Thumb;
