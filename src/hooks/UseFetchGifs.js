/* Imports */
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const UseFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const res = await getGifs(category);
        setImages(res);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
        getGifs(category).then(setImages);
    }, []);

    return [images, isLoading];
}