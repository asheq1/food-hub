import { Link, useLoaderData } from "react-router-dom";
import '../styles/Home.css'
import { Helmet } from "react-helmet";
import GoogleMapReact from 'google-map-react';
import { googleAPIKey } from "../googleAPIKey";


const Home = () => {
    const foods = useLoaderData();

    // google map 
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const defaultProps = {
        center: {
            lat: 10.99835,
            lng: 77.01502
        },
        zoom: 14
    }

    return (
        <div>
            <h2>Foods</h2>
            <Helmet>
                <title>Foods BD | Home</title>
            </Helmet>
            <div className="cards">
                {
                    foods.map(food => (
                        <div className="card" key={food.id}>
                            <img style={{width: '200px', height: '130px'}} 
                                src={food.image} alt="" />
                            <h2>{food.name}</h2>
                            <p>Price: ${food.price}</p>
                            <Link to={`food/${food.id}`}>View Details</Link>
                        </div>
                    ))
                }
            </div>

            {/* map  */}
            <div style={{height: '500px', width: '500px'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: googleAPIKey}}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}>
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker">
                    </AnyReactComponent>
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default Home;