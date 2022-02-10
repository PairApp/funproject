import React, { Component } from 'react'
import RecSearch from '../Components/RecSearch'
import RecResults from '../Components/RecResults'
import { Card, Container } from 'semantic-ui-react'


class WineRec extends Component {

    renderWines = (wines) => {
        console.log(wines)
        if (Object.keys(wines).includes('status')) {
            return <p style={{ paddingTop: '50px', paddingLeft: '475px', fontSize: '1.5rem' }}>{wines.message}</p>
        } else if ((Object.keys(wines).includes('recommendedWines'))) {
            if (wines['recommendedWines'].length === 0) { return <p style={{ paddingTop: '50px', paddingLeft: '150px', fontSize: '1.5rem' }}>Sorry, we don't currently have recommendations for that varietal. Please try another varietal.</p> }
            else { return wines['recommendedWines'].map(wine => <RecResults key={wine.id} wine={wine} postWine={this.props.postWine} />) }
        }
        else { return undefined }
    }
    render() {
        return (
            <div className="rec-page">
                <Container>
                    <p style={{ paddingTop: '50px', fontFamily: 'Josefin Sans', fontSize: '3rem' }}>recommendations</p>
                    <div><RecSearch getWineRec={this.props.getWineRec} renderResultsList={this.renderResultsList} /></div>
                    <div>
                        <Card.Group itemsPerRow={3}>
                            {this.renderWines(this.props.wines)}
                        </Card.Group>
                    </div>
                </Container>
            </div>
        );
    }
}

export default WineRec;
