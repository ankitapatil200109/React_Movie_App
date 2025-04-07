import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const SingleMovie = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=727bbdc1`);
                const data = await response.json();

                if (data.Response === "True") {
                    setMovie(data);
                    setError(null);
                } else {
                    setError("Movie not found.");
                }
            } catch (err) {
                setError("Failed to load movie data.");
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [id]);

    if (loading) {
        return <div className="text-center mt-5 text-light"><h4>Loading...</h4></div>;
    }

    if (error) {
        return <div className="text-center mt-5 text-danger"><h4>{error}</h4></div>;
    }

    return (
        <div className="movie-container d-flex justify-content-center align-items-center">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card movie-card shadow-lg p-4">
                            <div className="row">
                                {/* Movie Poster Section */}
                                <div className="col-md-4 text-center">
                                    <img
                                        src={movie.Poster}
                                        alt={movie.Title}
                                        className="img-fluid rounded movie-poster"
                                    />
                                </div>

                                {/* Movie Details Section */}
                                <div className="col-md-8">
                                    <h2 className="mb-3 text-primary">{movie.Title}</h2>
                                    <p><strong>🎭 Genre:</strong> {movie.Genre}</p>
                                    <p><strong>🎬 Director:</strong> {movie.Director}</p>
                                    <p><strong>🎭 Actors:</strong> {movie.Actors}</p>
                                    <p><strong>⭐ IMDB Rating:</strong> {movie.imdbRating}/10</p>
                                    <p className="text-muted"><strong>📜 Plot:</strong> {movie.Plot}</p>

                                    {/* IMDb Link Button */}
                                    <a
                                        href={`https://www.imdb.com/title/${id}`}
                                        className="btn btn-custom mt-3"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View on IMDb 🎬
                                    </a>
                                    {/* const navigate = useNavigate(); */}

                                    <button onClick={() => navigate("/")} className="btn btn-custom mt-3 pl-3">
                                        ⬅ Go Back
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Styling */}
            <style>{`
                .movie-container {
                    min-height: 100vh;
                    background: linear-gradient(135deg, #1c1c1c, #343a40);
                    padding: 40px 0;
                }

                .movie-card {
                    border-radius: 15px;
                    background: #fff;
                    transition: transform 0.3s ease-in-out;
                }

                .movie-card:hover {
                    transform: scale(1.02);
                }

                .movie-poster {
                    border-radius: 10px;
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
                    transition: transform 0.3s ease-in-out;
                }

                .movie-poster:hover {
                    transform: scale(1.05);
                }

                .btn-custom {
                    background-color: #ff6600;
                    color: white;
                    border-radius: 25px;
                    padding: 10px 20px;
                    font-size: 1.1rem;
                    transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
                }

                .btn-custom:hover {
                    background-color: #cc5500;
                    transform: scale(1.05);
                    .custom-back-button {
  background-color: #007bff; /* Bootstrap Primary Blue */
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.custom-back-button:hover {
  background-color: #0056b3; /* Darker Blue */
  transform: scale(1.05); /* Slightly Enlarges on Hover */
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
}
                }
            `}</style>
        </div>
    );
};

export default SingleMovie;
