import React from 'react'
// import News from './News'

export default function NewsItem(props) {
    return (
        <>
            <div className="card my-5" style={{width:"18rem"}}>
                <img src={props.imgUrl!=null?props.imgUrl:"https://th.bing.com/th/id/OIP.-C1rBK_UqG-p6dsBS1Qd2QHaFH?w=285&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}...</h5>
                        <p className="card-text">{props.desc}...</p>
                        <a href={props.newsUrl} className="btn btn-sm btn-primary">Read More</a>
                        <p class="card-text my-3"><small class="text-body-secondary">By {props.author==null?"unknown author":props.author} on {Date(props.publishedAt)}</small></p>
                    </div>
            </div>
        </>
    )
}

