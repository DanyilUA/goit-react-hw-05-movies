import { useState, useEffect } from "react";
import SearchBox from "components/SearchBox";
import { useLocation, useSearchParams } from 'react-router-dom';


const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const [query, setQuery] = useState('');


    // useEffect(() => {
        
    // })

    function handleFormSubmit(name) {
    setSearchParams({ query: name });
    }

    return (
      <>
        <div>Films</div>
        <SearchBox onSubmit={handleFormSubmit} />
      </>
    );
}

export default Movies;