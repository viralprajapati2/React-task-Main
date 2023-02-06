import { useParams } from "react-router-dom";

function AboutUs(){
const {id} = useParams();

    return(
        <>
            <h1>Welcome to About Us Page number {id}</h1>
        </>
    );
};

export default AboutUs;