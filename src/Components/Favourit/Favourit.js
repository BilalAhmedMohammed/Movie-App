import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addORremoveFavourit,changeCount } from "../../redux/actions/Favourit";
import "./favourit.css";
import { Link } from "react-router-dom";
export default function Favourit() {
  const fav = useSelector((state) => state.Favourit.favourits);
  let cnt = useSelector((state) => state.Favourit.count);
  const dispatch = useDispatch();

  const removeFavourit = (movie) => {
    const newData = [...fav];
    const editData = newData.filter((data) => data !== movie);
    dispatch(addORremoveFavourit(editData));
    dispatch(changeCount(--cnt));
  };
  return (
    <div id="movies" className=" container-fluid">
      <div className="row">
        {fav.map((movie) => {
          return (
            <div key={movie.id} className="col-4">
              <div className="card">
                <button
                  onClick={() => removeFavourit(movie)}
                  className="btn btn-dark"
                >
                  <i className="fa-solid text-danger fa-trash-can"></i>
                </button>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  style={{ maxHeight: 500 }}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body text-center">
                  <p className="card-text">{movie.title}</p>
                  <p className="card-text text-danger">{movie.vote_average}</p>
                  <Link
                    to={`/movie-details/${movie.id}`}
                    className="btn btn-primary"
                  >
                    Movie Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
