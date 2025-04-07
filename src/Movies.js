import React from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./movies.css";

const Movies = () => {
  const { movie } = useGlobalContext();
  return (
    <section className="movie-page container py-4">
      <div className="row">
        {movie.map((curMovie) => {
          const { imdbID, Title, Poster } = curMovie;
          return (
            <div key={imdbID} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <NavLink to={`movie/${imdbID}`} className="text-decoration-none">
                <div className="card shadow-sm h-100">
                  <img
                    src={Poster}
                    alt={Title}
                    className="card-img-top"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{Title}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
