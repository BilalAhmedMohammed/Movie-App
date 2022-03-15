import { useContext, useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import "./list.css";
import ReactPaginate from "react-paginate";
import { LanguageContext } from "../context/language";
import {
  getMOviesListUsingPage,
  getMOviesListUsingQuery,
  getMOviesListUsingLang
} from "../../redux/actions/Movies";
import { useDispatch, useSelector } from "react-redux";

export default function ListMovie() {
  const [page, setPage] = useState([]);
  const [pageCount, setPageCount] = useState(100);
  // const [movies, setMovies] = useState([]);
  const { lang, setLang } = useContext(LanguageContext);

  let movies = useSelector((state) => state.Movies.moviesList);
  const [pageQuery, setPageQuery] = useState([]);
  const dispatch = useDispatch();
  const handelPageClick = (data) => {
    let currentPage = data.selected + 1;
    setPage(currentPage);
  };
  useEffect(() => {
    dispatch(getMOviesListUsingPage(page));
    // axiosInstance
    //   .get("/movie/popular", {
    //     params: {
    //       page: page,
    //     },
    //   })
    //   .then((res) => {
    //     setMovies(res.data.results);
    //   })
    //   .catch((err) => console.log(err));
  }, [page]);
  useEffect(() => {
    dispatch(getMOviesListUsingQuery(pageQuery));
    // axiosInstance
    //   .get("/search/movie", {
    //     params: {
    //       query:pageQuery ,
    //     },
    //   })
    //   .then((res) => {
    //     // setPageCount(res.data.total_pages);
    //     setMovies(res.data.results);
    //   })
    //   .catch((err) => console.log(err));
  }, [pageQuery]);
  useEffect(() => {
    dispatch(getMOviesListUsingLang(lang));
  }, [lang]);
  return (
    <>
      <div id="movies" className={`container-fluid${lang === "en" ? "text-left" : "text-right"}`}
        dir={lang === "en" ? "ltr" : "rtl"} >
        <button
          onClick={() => {
            setLang(lang === "ar" ? "en" : "ar");
          }}
          className="btn btn-dark"
        >
          {lang}
        </button>
        <input
          className="input-group-text w-75 mb-3 ms-5"
          type={"search"}
          placeholder={"Search By Movie Name"}
          onChange={(ev) => setPageQuery(ev.target.value)}
        />
        <div className="row">
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="col-4">
                <Movie movie={movie} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-5">
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handelPageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
}
