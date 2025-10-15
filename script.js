// Set up event listener for when the user selects a genre
document.getElementById("genre").addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = document.getElementById("genre").value;

  // Create a variable to hold the movie list
  let movieList = [];

  // Add movies to the movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    // Add comedy movies directly to movieList
    movieList.push("The Mask");
    movieList.push("Superbad");
    movieList.push("Home Alone");
    movieList.push("Dumb and Dumber");
  } else if (selectedGenre === "Action") {
    // Add action movies directly to movieList
    movieList.push("Die Hard");
    movieList.push("Mad Max: Fury Road");
    movieList.push("John Wick");
    movieList.push("The Avengers");
  } else if (selectedGenre === "Drama") {
    // Add drama movies directly to movieList
    movieList.push("Forrest Gump");
    movieList.push("The Shawshank Redemption");
    movieList.push("A Beautiful Mind");
    movieList.push("The Pursuit of Happyness");
  } else if (selectedGenre === "Sci-Fi") {
    // Add sci-fi movies directly to movieList
    movieList.push("Interstellar");
    movieList.push("Inception");
    movieList.push("The Matrix");
    movieList.push("Star Wars: A New Hope");
  }

  // Display the list of movies on the page
  document.getElementById("movieRecommendations").innerText = `Enjoy: ${movieList.join(", ")}`;
});
