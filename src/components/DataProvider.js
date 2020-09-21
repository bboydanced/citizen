import React, {createContext, useState, useEffect} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
{
    "_id": "1",
    "title": "PROMASTER NIGHTHAWK",
    "images": [
        "//embed.widencdn.net/img/citizenwatch/ssphjkzsob/1000px/Promaster%20Nighthawk-main.png?u=41zuoe",
        "//embed.widencdn.net/img/citizenwatch/ptaotwlmj2/1000px/Promaster%20Nighthawk-alternate.png?u=41zuoe",
        "//embed.widencdn.net/img/citizenwatch/fkia8xrag7/1000px/Promaster%20Nighthawk-profile.png?u=41zuoe",
        "//embed.widencdn.net/img/citizenwatch/xspxpiv60d/1000px/Promaster%20Nighthawk-back.png?u=41zuoe"
        ],
    "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
    "content": "Redefining a classic timepiece with a hint of style, the Citizen World Time Perpetual Calendar brings about a new confidence. A timepiece that's not only a solar watch, but powered by any light with Eco-Drive technology, featuring world time in 26 time zones, perpetual calendar and date. Seen here in a rose gold-tone stainless steel case, sleek black leather strap and black dial. Caliber number E784.",
    "colors": ["red", "black", "teal"],
    "sizes": ["XL", "L", "M", "XM", "LX"],
    "price": 340,
    "count": 1
},
{
    "_id": "2",
    "title": "PROMASTER TOUGH",
    "images": [
        "//embed.widencdn.net/img/citizenwatch/3l27nqo0to/1000px/Promaster%20Tough-main.png?u=41zuoe",
        "//embed.widencdn.net/img/citizenwatch/uxgk51w7dv/1000px/Promaster%20Tough-alternate.png?u=41zuoe",
        "//embed.widencdn.net/img/citizenwatch/tryo3rzpja/1000px/Promaster%20Tough-back.png?u=41zuoe",
        ],
    "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
    "content": "Ready, Set, Dive. An iconic name with a reinvented construction, the Citizen Promaster Aqualand ISO compliant watch with maximum depth memory, rapid ascent alarm, auto start dive mode and power reserve indicator with divers 200M, you won't want anything else when headed to the ocean. Stainless steel case compliment the ocean blue polyurethane strap and blue dial with blue and red bezel. Featuring our Eco-Drive technology – powered by light, any light. Never needs a battery. Caliber number J250.",
    "colors": ["red", "black", "teal"],
    "sizes": ["XL", "L", "M", "XM", "LX"],
    "price": 499,
    "count": 1
    
},
{
    "_id": "3",
    "title": "SATELLITE WAVE GPS FREEDOM",
    "images": [
        "http://embed.widencdn.net/img/citizenwatch/8f6qwyygqe/1000px/Satellite%20Wave%20GPS%20Freedom.png?u=41zuoe",
        "http://embed.widencdn.net/img/citizenwatch/sbiwcq3y9c/1000px/",
        "https://embed.widencdn.net/img/citizenwatch/s4ifiz0c9f/960px/Satellite%20Wave%20GPS%20Freedom-back.png?u=41zuoe",
        ],
    "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
    "content": "For avid marine sportsmen who value style as much as function, Citizen’s Promaster Sailhawk with Eco-Drive technology is the perfect combination of the two. With a blue polyurethane strap and numbering detail, offset with a stainless steel case, black aluminum bezel and dial, this watch isn’t blending into the background. And with features such as a yacht racing timer, a 99-minute countdown timer, two separate alarms, split lap times, the ability to show the time in 30 cities worldwide, and water resistance up to 200 meters, there is no water-based activity this timepiece can’t handle with ease.",
    "colors": ["red", "black", "teal"],
    "sizes": ["XL", "L", "M", "XM", "LX"],
    "price": 636.00,
    "count": 1
}
,
{
    "_id": "4",
    "title": "Wacth Product 04",
    "images": [
        "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
        ],
    "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    "colors": ["red", "black", "teal"],
    "sizes": ["XL", "L", "M", "XM", "LX"],
    "price": 101,
    "count": 1
},
{
    "_id": "5",
    "title": "Wacth Product 05",
    "images": [
        "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
        ],
    "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    "colors": ["red", "black", "teal"],
    "sizes": ["XL", "L", "M", "XM", "LX"],
    "price": 102,
    "count": 1
},
{
    "_id": "6",
    "title": "Wacth Product 06",
    "images": [
        "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img5.jpg"
        ],
    "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    "colors": ["red", "black", "teal"],
    "sizes": ["XL", "L", "M", "XM", "LX"],
    "price": 103,
    "count": 1
},
{
    "_id": "7",
    "title": "Wacth Product 07",
    "images": [
        "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img5.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img1.jpg"
        ],
    "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    "colors": ["red", "black", "teal"],
    "sizes": ["XL", "L", "M", "XM", "LX"],
    "price": 104,
    "count": 1
},
{
    "_id": "8",
    "title": "Wacth Product 08",
    "images": [
        "https://www.upsieutoc.com/images/2020/07/18/img5.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
        "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
        ],
    "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    "colors": ["red", "black", "teal"],
    "sizes": ["XL", "L", "M", "XM", "LX"],
    "price": 105
}]);

    const [cart, setCart] = useState([]);
    const addToCart = (id) => {

        const check = cart.every(item => {
            return item._id !== id;
        })
        if (check) 
        {
            const data = products.filter(product => {
                return product._id === id;
            })
            setCart([...cart, ...data])
        }
    }
    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if (dataCart) {
            setCart(dataCart);
        }
    },[]);

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart));
    },[cart]);

    

    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addToCart: addToCart
    }
    
    return (
        <DataContext.Provider value={value} >
            {props.children}
        </DataContext.Provider>
    )
}
