import React from 'react';
//import ButtonBuy from './Components/ButtonBuy';
import { Card } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import ButtonBuy from './ButtonBuy';

//template des cartes pour les articles
class Cards extends React.Component {
    constructor(props) {
        super(props);
    }
   
    render() { 
        return ( 
                 <Card className="customCard" style={{  width: '20rem' }}>
                    <Card.Img variant="top" src={this.props.cover} />
                    <Card.Body>
                        <NavLink to="/detailProduct"><Card.Title>{this.props.name}</Card.Title></NavLink>
                        <Card.Text>
                            Type: {this.props.type}
                        </Card.Text>
                        <Card.Text>
                            Prix: {this.props.price} < img src="public/images/bells.jpg"></img>
                        </Card.Text>
                    <ButtonBuy />
                        
                    </Card.Body>
                </Card> 
         );
    }
}
 
export default Cards;