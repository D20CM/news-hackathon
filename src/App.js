import ArticlesArea from "./Components/ArticlesArea/ArticlesArea";
import Header from "./Components/Header/Header";
import { useState, useEffect } from "react";
import "./App.css";

import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const [queryString, setQueryString] = useState(
    `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&country=gb&language=en`
  );

  // const queryString = `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&country=gb&language=en`;

  useEffect(() => {
    setQueryString(
      `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&country=gb&language=en&q=${searchTerm}`
    );
  }, [searchTerm]);

  useEffect(() => {
    if (category !== "") {
      setQueryString(
        `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&category=${category}&country=gb&language=en`
      );
    }
  }, [category]);

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

  console.log("category", category);
  return (
    <div className="App">
      <Header category={category} setCategory={setCategory} />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      ></SearchBar>
      <ArticlesArea articles={articles} />
    </div>
  );
}

export default App;
