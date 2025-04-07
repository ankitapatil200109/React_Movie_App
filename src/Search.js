import React from "react";
import { useGlobalContext } from "./context";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap for styling

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();

  return (
    <section className="search-container">
      {/* Title */}
      <h2 className="search-title">Search Your Favorite Movie 🎬</h2>

      {/* Search Bar */}
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Type here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </form>

     

      {/* Custom Styling */}
      <style>{`
        .search-container {
          text-align: center;
          margin: 50px auto;
          background: linear-gradient(135deg, #222, #444);
          padding: 40px 20px;
          border-radius: 15px;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4);
          color: white;
          max-width: 600px;
        }

        .search-title {
          font-size: 2rem;
          font-weight: bold;
          color: #ff6600;
          margin-bottom: 20px;
        }

        .search-form {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .search-box {
          width: 100%;
          max-width: 500px;
        }

        .search-input {
          width: 100%;
          padding: 12px 20px;
          font-size: 1.2rem;
          border: 2px solid #ff6600;
          border-radius: 25px;
          outline: none;
          background: #fff;
          color: #333;
          transition: all 0.3s ease-in-out;
        }

        .search-input:focus {
          border-color: #cc5500;
          box-shadow: 0px 0px 10px rgba(255, 102, 0, 0.5);
        }

        .error-box {
          margin-top: 20px;
          font-size: 1.1rem;
          border-radius: 10px;
          padding: 10px;
          background-color: rgba(255, 0, 0, 0.1);
          color: white;
        }
      `}</style>
    </section>
  );
};

export default Search;
