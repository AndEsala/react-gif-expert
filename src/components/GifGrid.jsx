import { GifGridItem } from "./GifGridItem";
import { UseFetchGifs } from "../hooks/UseFetchGifs";

export const GifGrid = ({category}) => {
    const [images, isLoading] = UseFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {isLoading && (<h2>Carregando...</h2>)}
            
            <div className="card-grid">
                {images.map((img) => <GifGridItem key={img.id} {...img}/>)}
            </div>
        </>
    )
}
