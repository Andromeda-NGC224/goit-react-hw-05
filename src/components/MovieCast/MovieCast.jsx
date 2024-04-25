import {getMovieCast} from "../../api"
import { useState, useEffect } from 'react'
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

export default function MovieCast({ movieId }) {
    const noImg = "https://i.pinimg.com/564x/5d/b3/f9/5db3f9d7bd0de311088be68c4edaa001.jpg"
    const [casts, setCasts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [noData, setNoData] = useState(false);

    useEffect(() => {
    if (!movieId) return;
    async function fetchMovieCast() {
        try {
            setLoading(true)
            const data = await getMovieCast(movieId)
            if (data.cast.length === 0) {
          setNoData(true);
          return;
        }
            setCasts(data.cast)
        } catch (error) {
            setError(true)
        }
        finally {
            setLoading(false)
        }
    }

    fetchMovieCast()
}, [movieId]);

    return (
        <div>
            {loading && <Loader />}
            {error && <Error/>}
            {casts.length > 0 && <ul>
                {casts.map((cast, index) => (
                    <li key={index}>
                    <img src={
              cast.profile_path ?
                (`https://image.tmdb.org/t/p/w500/${cast.profile_path}`) :
                noImg} alt={cast.name} />
                        <p>Name: {cast.name}</p>
                        <p>Role: {cast.character}</p>
                    </li>
                ))}
            </ul>}
            {noData && <p>There is no information about the actors, unfortunately.</p>}
        </div>
    )
}