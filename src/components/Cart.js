import React, {useState, useContext, useEffect } from 'react'
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { DataContext } from './DataProvider';
import BackHome from './BackHome';

export default function Cart() {
    // id product
    // data
    const value = useContext(DataContext)
    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.count);
            },0);
            setTotal(res);
        }
        getTotal();
    },[cart])

    const onReduce = id => {
        cart.forEach((item, index) => {
            if (item._id === id && item.count > 0) {
                item.count -= 1;
            }
            if(item.count <= 0) {
                cart.splice(index, 1);
            }
        })
        
        setCart([...cart]);
    }
    const onIncrease = id => {
        cart.forEach(item => {
            if (item._id === id) {
                item.count += 1;
            }
        })
        setCart([...cart]);
    }
    const onRemove = id => {
        if(window.confirm("Delete item ?")) {
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1);
                }
            })
        }   
        setCart([...cart]);
    }

    if (cart.length === 0) {
        return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2>
    }
    return (
        <div>
            {
            cart.map(product => (
                <div className="cart" key={product._id}>
                    <div    
                        className="img-container-cart" 
                        style={{backgroundImage: `url(${product.images[0]})`}}
                    >
                    </div>
                    <div className="box-detail-cart">
                        <h3 title={product.title} className="title-detail">
                            {product.title}
                        </h3>
                        <h4 className="price-detail">$ {product.price}</h4>
                        <div className="amount">
                            <Button variant="contained" color="primary" onClick={() => onReduce(product._id)} >-</Button>
                            <span className="cart-count">{product.count}</span>
                            <Button variant="contained" color="primary" onClick={() => onIncrease(product._id)}>+</Button>
                        </div>
                        <div className="delete">
                           <button onClick={() => onRemove(product._id)}>X</button>
                        </div>
                    </div>
                    
                </div>
            ))}
            <div className="payment">
                <Link to="/payment">Payment</Link>
                <h3>Total : ${total}</h3>
            </div>
            <BackHome />
        </div>
    )
}
