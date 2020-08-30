import React, { useContext } from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { Button } from "@material-ui/core";
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";

export default function Products() {
    const [products] = useContext(DataContext);

    return (
      <div className="products">
        {
            products.map(product => (
                <div className="card" key={product._id}>
                    <Link to={`/products/${product._id}`}>
                    <img
                        src={product.images[0]} alt={product._id}/>
                    </Link>
                    <div className="box">
                        <h3 title={product.title}>
                            <Link to={`/products/${product._id}`}>{product.title}</Link>
                        </h3>
                        <p>{product.description}</p>
                        <h5 className="product-sales">$ {product.price + 200 }</h5>
                        <h4>$ {product.price}</h4>
                        <Button variant="contained" color="primary" startIcon={<AddBoxIcon />}>
                            Add to Card
                        </Button>
                    </div>
                </div>
            ))
        }
      </div>
    );
}
