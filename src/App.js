import ArticlesArea from "./Components/ArticlesArea/ArticlesArea";
import Header from "./Components/Header/Header";
import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [queryString, setQueryString] = useState(
    `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&country=gb&language=en`
  );

  // const queryString = `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&country=gb&language=en`;

  useEffect(() => {
    setQueryString(
      `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&country=gb&language=en&q=${searchTerm}`
    );
  }, [searchTerm]);

  async function getArticles(queryString) {
    const response = await fetch(queryString);
    const data = await response.json();
    const results = data.results;
    console.log(results);
    setArticles(results);
  }

  useEffect(() => {
    getArticles(queryString);
  }, [queryString]);

  return (
    <div className="App">
      <Header />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      ></SearchBar>
      <ArticlesArea articles={articles} />
    </div>
  );
}

export default App;
