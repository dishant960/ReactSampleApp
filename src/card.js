import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = { likes: this.props.content.likes, dislikes: this.props.content.dislikes,likeLinkStyle: {color : 'grey'},dislikeLinkStyle: {color : 'grey'} };
        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
        this.action = 'none';
        this.imgUrl = process.env.PUBLIC_URL + '/assets/images/'+this.props.content.image;
        this.cardBackgroud= {background: 'url('+this.imgUrl+')', height: '200px', backgroundRepeat: 'no-repeat', backgroundSize:'cover'};
    }

    handleLike() {
        if (this.action === 'none') {
            this.setState((prevState, props) => ({
                likes: prevState.likes + 1,
                likeLinkStyle : { color: '#dc3c14'}
            }));
            this.action = 'liked'
        }
        else if (this.action === 'disliked') {
                this.setState((prevState, props) => ({
                    likes: prevState.likes + 1,
                    dislikes: prevState.dislikes - 1,
                    likeLinkStyle : { color: '#dc3c14'},
                    dislikeLinkStyle : { color: 'grey'}
                }));
                this.action = 'liked'
            }
            else {
                this.setState((prevState, props) => ({
                    likes: prevState.likes - 1,
                    likeLinkStyle : { color: 'grey'},
                }));
                
                this.action = 'none'
            }

        
    }

    handleDislike() {
        if (this.action === 'none') {
            this.setState((prevState, props) => ({
                dislikes: prevState.dislikes + 1,
                dislikeLinkStyle : { color: '#dc3c14'},
            }));
            this.action = 'disliked'
        }
        else if (this.action === 'liked') {
            this.setState((prevState, props) => ({
                likes: prevState.likes - 1,
                dislikes: prevState.dislikes + 1,
                dislikeLinkStyle : { color: '#dc3c14'},
                likeLinkStyle : { color: 'grey'},
            }));
            this.action = 'disliked'
        }
        else {
            this.setState((prevState, props) => ({
                dislikes: prevState.dislikes - 1,
                dislikeLinkStyle : { color: 'grey'},
            }));
            
            this.action = 'none'
        }
    }


    render() {

        let elememt = <div className='mdl-card mdl-shadow--3dp dataCard'>
            <div className="mdl-card__title" style={this.cardBackgroud}>

            </div>
            <div className='mdl-card__supporting-text'>
                <div className='cardTitle'>
                    <h5>{this.props.content.title}</h5>
                </div>
                <div className='cardDescription'>
                    {this.props.content.description}
                </div>
            </div>
            <div className="mdl-card__actions mdl-card--border cardAction">
                
                <button className='mdl-button mdl-js-button mdl-button--icon' onClick={this.handleLike}>
                    <i className="material-icons cardActionLink" style={this.state.likeLinkStyle}>thumb_up</i>
                </button>
                {this.state.likes}
                <button className='mdl-button mdl-js-button mdl-button--icon' onClick={this.handleDislike} style={{marginLeft: '10px'}}>
                    <i className="material-icons cardActionLink" style={this.state.dislikeLinkStyle}>thumb_down</i>
                </button>
                {this.state.dislikes}
            </div>
        </div>

        return elememt;
    }
}

export default Card;

