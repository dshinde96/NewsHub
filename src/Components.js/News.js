
import React, { Component, useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
let call = true;
const News = (props) => {

  const article = []
  const [articles, set_articles] = useState(article);
  const [page, set_page] = useState(1);
  const [totalResults, set_totalResults] = useState(0);
  const [loading, set_loading] = useState(false);

  //To use async await in useeffect you must declare the async function loacaaly in useeffect and then invoke upon requirement
  useEffect(() => {
    document.title=`${props.category.toUpperCase()} -NewsHub`
    const func = async () => {
      set_loading(true);
      let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b7803c6359c440298d210e0265edd7d6&page=1&pagesize=${props.pagesize}`);
      console.log(data);
      let parsedata = await data.json();
      set_articles(parsedata.articles);
      set_totalResults(parsedata.totalResults);
      set_loading(false);
      // console.log(parsedata.articles);
      // console.log(parsedata.totalResults);
      // call = false;
    }
    func();
  }, [])
  const handlePrev = async () => {
    // console.log("Prev");
    set_loading(true);
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b7803c6359c440298d210e0265edd7d6&page=${page - 1}&pagesize=${props.pagesize}`);
    // console.log(data);
    let parsedata = await data.json();
    // console.log(parsedata.articles);
    set_articles(parsedata.articles);
    set_page(page - 1);
    set_loading(false);
  }
  const handleNext = async () => {
    set_loading(true);
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b7803c6359c440298d210e0265edd7d6&page=${page + 1}&pagesize=${props.pagesize}`);
    console.log(data);
    let parsedata = await data.json();
    console.log(parsedata.articles);
    set_articles(parsedata.articles);
    set_page(page - 1);
    set_loading(false);
  }
  return (
    <>

      <div className="container" style={{marginTop:"70px"}}>
        <h2>Top Headlines{props.category != "general" ? `: ${props.category.toUpperCase()}` : ""}</h2>
        {loading && <Spinner />}  {/*This will check first if true then it will go for second */}
        <div className="row">
          {!loading && articles.map((element) => {
            return (
              <div key={element.url} className="col-md-4"><NewsItem title={element.title != null ? element.title.slice(0, 45) : ""} desc={element.description != null ? element.description.slice(0, 88) : ""} author={element.author} publishedAt={element.publishedAt} imgUrl={element.urlToImage} newsUrl={element.url} /></div>
            )
          })}
        </div>
        <div class="d-flex justify-content-between">
          <button disabled={page == 1} type="button" class="btn btn-primary" onClick={handlePrev}><i class="fa fa-backward"> Previous</i></button>
          <button disabled={page >= Math.ceil(totalResults / props.pagesize)} type="button" class="btn btn-primary" onClick={handleNext}>Next <i class="fa fa-forward"></i></button>
        </div>

      </div>
    </>
  )
}

News.defaultProps = {
  country: "in",
  pagesize: 20,
  category: "general"
}
export default News;