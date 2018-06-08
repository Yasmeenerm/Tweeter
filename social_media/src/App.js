import React, { Component } from 'react';
import logo from './assets/icon.png';
import fam from './assets/fam.jpg';
import leia from './assets/leia.jpg'
import arrow from './assets/arrow-solid.svg'

import './App.css';

class App extends Component {
constructor(){
  super();
  this.state ={
    listOfCards:[
      {
        user: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-1/p200x200/11200805_10153889836504741_718631745012518813_n.jpg?_nc_cat=0&oh=42695b3b64fca687f1b9cc88cfecdc83&oe=5BC15A29",
        author: "Jack Sparrow",
        img: "http://screenfish.net/wp-content/uploads/2017/04/underboat.png",
        captionHeader:"Bad memories",
        caption:"Remembering when I had to babysit Legolas ",
        isLiked: false

      },
      {
        user:"https://i.pinimg.com/736x/cf/2e/d8/cf2ed846b97ff65f26a879727b5620e8.jpg",
        author: "Leia Organa",
        img: fam,
        captionHeader:"All Luke's fault",
        caption:"Family portrait before Ben became whiny Kylo ",
        isLiked: false
      },
      {
        user:"https://lastfm-img2.akamaized.net/i/u/174s/addd5c5099688e0d7eeca5f2781dd129.png",
        author: "ABBA",
        img: "https://gl-images.condecdn.net/image/64EkkA43VJQ/crop/1020/f/mamma4.jpg",
        captionHeader:"MAMMA MIA 2",
        caption:"Great to still be relevant. "
      }
    ]
  }
}

handleLike(i, event){
  let listOfCards = this.state.listOfCards;
  listOfCards[i].isLiked = !listOfCards[i].isLiked;
  this.setState({
    listOfCards
  })
}
handleComment(i, event){
  let listOfCards = this.state.listOfCards;
  this.setState({
    listOfCards
  })
}
  render() {
    const listOfCards = this.state.listOfCards;
    const display = listOfCards.map((list,i) => (
      <li key={i} >
        <div className="container">
          <div className="row">
            <div className="iconUser">
                <div className="col-xs-6 col-sm-4">
                  <img  className="user" src={list.user}></img><br/><br/><br/><br/>
                </div>
            </div>
              <h1>  {list.author}</h1> <br/>
          </div>

          <div className="imgCap">
            <img src= {list.img} className="imgPost" ></img><br/>
            <div className="capHeader">{list.captionHeader}</div><br/>
            <div className="caption">{list.caption}<br/></div>
            <br/>
          </div>
              <i className={(list.isLiked)? "fas fa-heart fa-2x" : "far fa-heart fa-2x"} onClick={this.handleLike.bind(this,i)}></i>
              <i className="far fa-comment-dots fa-2x"  onClick={this.handleComment.bind(this,i)}></i>


       </div>
      </li>

    ));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">Tweeter</h2>
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
          <form>
              <label>User url</label>
              <input type="url" name="User profile picture" />
              <br/>
              <label>Author</label>
              <input type="text" name="Author" />
              <br/>
              <label>Image url</label>
              <input type="img" name="Image" />
              <br/>
              <label>CaptionHeader</label>
              <input type="text" name="Caption header" />
              <br/>
              <label>Caption</label>
              <input type="text" name="Caption" />
              </form>
            </div>
            <div className="col-sm-4">
            <input className="submit" type="image" src={arrow} alt="Submit" />
          </div>
          </div>
          </div>
        <ul>
          {(display) ? display : null}
        </ul>
      </div>
    );
  }
}

export default App;
