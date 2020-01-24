import React from 'react';
import tachyons from 'tachyons';

const NewsList = (props) => {
 const news =   props.articles.map((article) => {
        return <div>
        <img src={article.urlToImage} alt={article.title}/>
      <h5> {article.title} </h5>  
    <p> {article.description}</p>
        
    </div>
     })



return (
        <div>
            <h2 className="tc">Latest news on Tech Today</h2>
                  <div className=" tc ma4">{news}   </div>
                             

        </div>
    )
}

export default NewsList;