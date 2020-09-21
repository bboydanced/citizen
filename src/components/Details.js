import React, {useState, useContext, useRef} from 'react'
import {useParams} from 'react-router-dom';
import AddBoxIcon from "@material-ui/icons/AddBox";
import { Button } from '@material-ui/core';
import { DataContext } from './DataProvider';
import Colors from './Colors';
import Sizes from './Sizes';
import DetailsThumnail from './DetailsThumnail';
import BackHome from './BackHome';


export default function Details(props) {
    const {id} = useParams();

    const [products] = useContext(DataContext);
    const [index, setIndex] = useState(0);
    const imgDiv = useRef();

    const detail = products.filter((product, index) => {
        return product._id === id ;
    })
    const handleMouseMove = (e) => {
        const {left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100; 
        const y = (e.pageY - top) / height * 100; 
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
    }
    return (
        <div>
            {
            detail.map(product => (
                <div className="card-detail" key={product._id}>
                    <div    
                        className="img-container" 
                        style={{backgroundImage: `url(${product.images[index]})`}}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => imgDiv.current.style.backgroundPosition = "center"}
                        ref={imgDiv}
                    >
                    </div>
                    <div className="box-detail">
                        <h3 title={product.title} className="title-detail">
                            {product.title}
                        </h3>
                        <Colors colors={product.colors} />
                        <Sizes sizes={product.sizes}/>
                        <h4 className="price-detail">$ {product.price}</h4>
                        <p>{product.description}</p>
                        <p>{product.content}</p>
                        <DetailsThumnail images={product.images} setIndex={setIndex} />
                        <Button variant="contained" color="secondary" startIcon={<AddBoxIcon />}>
                            Giỏ hàng
                        </Button>  
                    </div>
                </div>
            ))}
            <BackHome />
        </div>
    )
}
