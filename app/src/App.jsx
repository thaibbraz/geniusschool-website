import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [books, setBooks] = useState([]); // Books initialized as an empty array. Holds a list of books with their respective details.
  const [favorites, setFavorites] = useState([]); // Favorites initialized as an empty array. Holds the list of books that the user has marked as favorites.

  // Purpose of this function: fetching data from the books.json.
  // useEffect runs after the first render of the page.
  // Fetches (AKA  gets the data) from books.json.
  // Data gives you back the result of the fetch operation.
  // Returns a copy of a part of the array, in this case from index 0 to 20.
  // This new sliced array is used to update books in the state variable on top.
  // [] ensures the function runs only once.
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

  // Purpose of this function: takes book as a parem and add it to the favorites state.
  // First I check the edge case: what does it mean?
  // I check if the book is not in the favorite list yet!
  // How is the checking working? .some compares the title of each book in favorites with
  // the title of the current book being added by the user.
  // If it is in the list it cannot be added twice.
  // If the book is not already added:
  // ... create new array containing all existing favorites (if any).
  // Adds book (which is book being added by the user) at the end of the array.
  // Updates setFavorites with the new array.
  const addToFavorites = (book) => {
    if (!favorites.some((favorite) => favorite.title === book.title)) {
      setFavorites([...favorites, book]);
    }
  };

  // Purpose of this function: remove a specific book from the favorites array.
  // updatedFavorites creates a new array by filtering.
  // This method is used to iterate (loop) though every favorite element of favorites.
  // Checks if the title of the current favorite does not match the title of the book passed to the function.
  // Basically, it "excludes" any favorite whose title matches the book's title (Which is the one that the user is clicking on).
  // Updates setFavorites with the new list.
  const removeFromFavorites = (book) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.title !== book.title
    );
    setFavorites(updatedFavorites);
  };

  // Key takeways of the return:
  // books.map() iterates over the books array, generating cards for each book.
  // favorites.map() iterates over favorites, generating cards for each favorite book.
  // The layout is structured to conditionally render the "Favorites Tab" based on whether there are any books in favorites.
  // Use bootstrap to create a responsive layout.
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
