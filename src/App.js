
import ArticlesArea from "./Components/ArticlesArea/ArticlesArea";
import Header from "./Components/Header/Header";
import { useState, useEffect } from "react";
import "./App.css";
import Article from "./Components/Article/Article";


function App() {
  const [articles, setArticles] = useState([]);

  const url = `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&country=gb&language=en`;

  async function getArticles() {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    setArticles(results);
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="App">

      <Header />
      <ArticlesArea />
      {articles && articles.map((article) => <Article article={article} />)}

    </div>
  );
}

export default App;
