import React, { useState, useEffect } from 'react'




export const GameItem = ({title, desc, img, url, id}) => {

  return (

        <div key={id} className="card mb-3" id='carta' style={{width: "18rem"}}>
            <a className='details' href={`/details/${id}`} target="__blank">  
                  <img src={img} className="card-img-top"  />
                  <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <a target="__Blank" href={url} className="btn DownloadBtn">Download</a>
                  </div>
            </a>
        </div>

  )
}




