import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
    
    const [chows, setChows] = useState({ data:[], loading:true, error:null });
    const url = "https://themealdb.com/api/json/v1/1/search.php?s";
    
    
    const startGetData = async() => {
        
        try {
            setChows({...chows, loading:true});
            const body = await fetch(url,{'Content-Type': 'application/json'});
            const resp = await body.json();
            const { meals } = resp;
            setChows({...chows, data:meals, loading:false});

        } catch (error) {
            setChows({...chows, loading:false, error:error});
        }

    };
    
    useEffect(() => {
        (async() => {
            await startGetData();
        })();
    }, []);
    
    return (
        <>
            <div className="Container">
                <div className="Box">
                    <img
                        className="Image"
                        src="https://picjumbo.com/wp-content/uploads/bowl-of-bibimbap-2210x1475.jpg"
                        alt="vegetarian dish"
                    />
                </div>
                <div className="Box Box-searchBox">
                    <SearchBox />
                </div>
            </div>
            <div className="Box Box-main">
                <div>
                    <Filter />
                </div>
                <div className="Box Box__Card">
                    <Card 
                        chows={chows}
                    />
                </div>
            </div>
            <div className="Box">
                <button className="Button Button--contained Button--contained--sm">Load more</button>
            </div>
        </>
    );
};

export default App;