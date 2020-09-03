import React from 'react';
import {Link} from 'react-router-dom';



class AllItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items:[]
        }
    };
async componentDidMount() {
        const response = await fetch('./items');
        const data = await response.json();
        this.setState({
            items: data,
        }) 
}
//const itemLinks = data.v)
render() {
    return (
        <div className='car-images-container'>
            {this.state.items.map((item, i)=> <div className="car-images">
                <img src={item.imageUrl}></img>
                    <h3><Link key={i} to={{pathname:'/test'}}>{item.name}</Link></h3>
                    <p>Price: {item.price}</p>
            </div>)}
        </div>
        );
     }
}
 export default AllItems;