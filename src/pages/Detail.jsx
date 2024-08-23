
import { useState } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
    const {slug}=useParams()
    const [detail,setDetail]=useState([])
    return (
        <div>
            details page
        </div>
    );
};

export default Detail;