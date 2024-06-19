import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("/books.json")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.slice(0, 20));
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  const addToFavorites = (book) => {
    if (!favorites.some((favorite) => favorite.title === book.title)) {
      setFavorites([...favorites, book]);
    }
  };

  const removeFromFavorites = (book) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.title !== book.title
    );
    setFavorites(updatedFavorites);
  };

  return (
    <div className="App">
      <h1 className="page-title">Hello Reader!</h1>
      <div className="container">
        <div className="row">
          {/* Book Tab */}
          <div className={favorites.length > 0 ? "col-md-8" : "col-md-12"}>
            <div className="book-tab">
              <h2 className="mb-4">My Books 📖</h2>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {books.map((book, index) => (
                  <div key={index} className="col mb-4">
                    <div className="card h-100 d-flex">
                      <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-text" style={{ color: "grey" }}>
                          {book.author}
                        </p>
                        <p className="card-text" style={{ color: "grey" }}>
                          {book.pages} pages
                        </p>
                        <img
                          src={book.imageLink}
                          alt={book.title}
                          className="card-img-top"
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                          }}
                        />
                        <div>
                          <br />
                          <button
                            className="btn fav-button"
                            onClick={() => addToFavorites(book)}
                          >
                            👍🏽
                          </button>
                          <a href={book.link} className="btn">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Favorites Tab */}
          {favorites.length > 0 && (
            <div className="col-md-4">
              <div className="favorite-tab">
                <h2 className="mb-4">Favorite Books ❤️</h2>
                <div className="row row-cols-1 g-4">
                  {favorites.map((favorite, index) => (
                    <div key={index} className="col mb-4">
                      <div className="card h-100 d-flex">
                        <div className="card-body">
                          <h5 className="card-title">{favorite.title}</h5>
                          <p className="card-text" style={{ color: "grey" }}>
                            {favorite.author}
                          </p>
                          <p className="card-text" style={{ color: "grey" }}>
                            {favorite.pages} pages
                          </p>
                          <img
                            src={favorite.imageLink}
                            alt={favorite.title}
                            className="card-img-top"
                            style={{
                              width: "100%",
                              height: "200px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="mt-auto">
                          <button
                            className="btn remove-button"
                            onClick={() => removeFromFavorites(favorite)}
                          >
                            ❌
                          </button>
                          <a href={favorite.link} className="btn">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
