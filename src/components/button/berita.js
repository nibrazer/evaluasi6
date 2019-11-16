import React from 'react'
import './berita.css'

const Berita = ({ judul, tanggal, editor, gambar }) => {
    return (
        <div className="img">
            <img src={gambar} />
            <div className="berita">
                <h3>{judul}</h3>
                <p>{tanggal}</p>
                <p>{editor}</p>
            </div>
        </div>
    )
}


export default Berita;