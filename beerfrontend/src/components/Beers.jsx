import { useEffect, useState } from "react";
    import axios from 'axios';
    import AllBeers from "./AllBeers";
    import Button from 'react-bootstrap/Button';

const Beers = () => {

        // Our state is going to be the data we pull from the api
        const [beerData, setBeerData] = useState([]);
    
        // State to check if the API has errored
        const [error, setError] = useState(null);
    
        // State to check if the data has loaded
        const [loaded, setLoaded] = useState(false);
    
        let tempId;
    
        useEffect(() => {
            
                axios.get(`https://localhost:27017/db_beer`) // this needs to change
                .then((response) => {
                // What does the data look like when pulling it
                setBeerData(response.data)
                console.log("===========================");
                console.log("=======beerData==========");
                console.log(beerData);
                console.log(response.data);
                setLoaded(true);
            }).catch((error) => {
                setLoaded(true);
                setError(error);
            }).then(() => { 
                console.log("===========================");
                console.log("=======beerData==========");
                console.log(beerData);
            });
        },[]);
    
        // const getBeerId = (id) => {
    
        //     axios.get(`http://18.132.13.171:27017/db_beer`) // this needs to change
        //     .then((response) => {
        //         setBeerData(response.data);
        //         setLoaded(true);
        //     }).catch((error) => {
        //         setLoaded(true);
        //         setError(error);
        //     });
    
        // };
    
        if(error == true) {
            return <h2> Oops, theres been an error :o please refresh the page </h2>
        } else if(!loaded ) { 
            return <h2> Please wait, data is loading! </h2>
        } else {
            return (
                <div>
                    <h2> Loads if the data is fine! </h2>

                    {beerData.map((beer) => {
                        console.log(`name: ${beer.name}`);
                        return <AllBeers name={beer.name} image={beer.image_url} abv={beer.abv} foodPairing={beer.food_pairing}/>
                    })}
                </div>
            )
        }
             
    }
 
export default Beers;