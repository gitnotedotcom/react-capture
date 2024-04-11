import axios from 'axios'
import React, { createContext, useState } from 'react'
import { apiKey } from '../api/config'
export const PhotoContext = createContext()

const PhotoContextProvider = props => {

    const [image, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const runSearch = query => {
        axios
        .get(
            `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${apiKey}&per_page=20`
        )
        .then(response => {
            setImages(response.data.results);
            setLoading(false);
            console.log(response);
        })
        .catch(error => {
            console.log(
                "Encountered an error with fetching and parsing data",
                error
            )
        })
    }

  return (
    <PhotoContext.Provider value={{ image, loading, runSearch }}>
        {props.children}
    </PhotoContext.Provider>
  )
}

export default PhotoContextProvider
