import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Item, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


export default class CustomSlide extends Component {
    wine = this.props.wine 

    handleDelete = () => {
        this.props.deleteWine(this.props.wine.id)
    }

    handleClick = () => {
        this.props.setWineInfo(this.props.wine)
    }

    renderRating = () => {
        if (this.wine.averageRating < 0.4) {
            return <div><Icon name='star' size='small' /></div>
        } else if (this.wine.averageRating >= 0.4 && this.wine.averageRating < 0.6) {
            return <div><Icon name='star' size='small' /><Icon name='star' size='small' /></div>
        } else if (this.wine.averageRating >= 0.6 && this.wine.averageRating < 0.8) {
            return <div><Icon name='star' size='small' /><Icon name='star' size='small' /><Icon name='star' size='small' /></div>
        } else if (this.wine.averageRating >= 0.8 && this.wine.averageRating < 1) {
            return <div><Icon name='star' size='small' /><Icon name='star' size='small' /><Icon name='star' size='small' /><Icon name='star' size='small' /></div>
        } else if (this.wine.averageRating >= 1) {
            return <div><Icon name='star' size='small' /><Icon name='star' size='small' /><Icon name='star' size='small' /><Icon name='star' size='small' /><Icon name='star' size='small' /></div>
        } else {
            return 'currently unavailable'
        }
    }

    renderPrice = () => {
        if (this.wine.price.charAt(4) === '0') {
            let evenPrice = this.wine.price.substr(0, this.wine.price.length - 2)
            return evenPrice
        } else {return this.wine.price}
    }

    render() {
        // const { index, ...props } = this.props;
        let wine = this.props.wine
        return (
            <div className="saved-slide" id='saved-slide'>
                {/* <Grid.Column> */}
                <Item.Group>
                    <Item className='saved-wine'>
                        <Item.Image className='item-image' size='tiny' src={wine.imageUrl} />
                        <Item.Content>
                            <Item.Header>{wine.title}</Item.Header>
                            <Item.Meta>
                                Rating: {this.renderRating()} <br /> {this.renderPrice()}
                            </Item.Meta>
                            <Item.Description>
                                {wine.description}
                            </Item.Description>
                            <Item.Extra>
                                <button onClick={this.handleDelete}>remove</button>
                                <Link to="/wine_info"><button onClick={this.handleClick}>info</button></Link>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>
                {/* </Grid.Column> */}
                {/* <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{wine.title}</Card.Title> */}
                {/* <Card.Text>
                            {wine.description}
                        </Card.Text> */}
                {/* </Card.Body>
                    <Card.Img variant="top" src={wine.imageUrl} alt={wine.title} /> */}

                {/* <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup> */}
                {/* <Card.Footer>
                        <Card.Link href="#"><button onClick={this.handleDelete}>remove</button></Card.Link>
                        <Link to="/wine_info"><button onClick={this.handleClick}>info</button></Link>
                    </Card.Footer>
                </Card> */}
            </div>
        );
    }
}