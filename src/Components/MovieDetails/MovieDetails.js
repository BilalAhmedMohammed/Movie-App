import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosInstance } from "../Network/axiosConfig";

export default function MovieDetails() {
    const [movieDetails, setMovies] = useState([]);
  const params = useParams();
  console.log("test1");
  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}`)
      .then((res) => {
          console.log(res.data);
        setMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="card mb-3">
      <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}className="card-img-top img-fluid" style={{height:500}} alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center text-success">{movieDetails.title}</h5>
        <p className="card-text text-secondary">
        {movieDetails.overview}
        </p>
        <p className="card-text">
          <small className="text-muted text-center fw-bold">{movieDetails.vote_average}</small>
        </p>
      </div>
    </div>
  );
}
