import React from 'react';
import './App.css';


let posts = [
  {
  date: 'Jan. 30, 2018',
  paraText1: "THE SHIFT",
  paraText2: "Kodak’s Dubious Cryptocurrency Gamble",
  paraText3: "What’s a 130-year-old photo company doing dabbling in cryptocurrency? Either revolutionizing digital rights management or trying to make a quick buck.",
  paraText4: "By KEVIN ROOSE",
  image: "http://bit.ly/32hKYuz",
},
{
  date: 'Jan. 30, 2018',
  paraText1: "",
  paraText2: "Taiwan Retaliates Against Chinese Airlines, Hampering Lunar New Year Travel",
  paraText3: "Taiwan, pushing back over encroachment on Taiwan Strait airspace, may leave thousands without flights home for the holiday.",
  paraText4: "By CHRIS HORTON",
  image: "http://bit.ly/35x3eC6",
},
{
  date: 'Jan. 30, 2018',
  paraText1: "",
  paraText2: "New Jersey Embraces an Idea it Once Rejected: Make Utilities Pay to Emit Carbon",
  paraText3: "Democratic governors nationwide are taking steps to tax or price emissions within their own borders, even as Trump dismantles federal climate policy.",
  paraText4: "By BRAD PLUMER",
  image: "http://bit.ly/35JX0z0",
},
]

function App() {
  return (
    <div>
      <Profile date={posts[0].date} paraText1={posts[0].paraText1} paraText2={posts[0].paraText2} paraText3={posts[0].paraText3} paraText4={posts[0].paraText4} image={posts[0].image}/>
      <Profile date={posts[1].date} paraText1={posts[1].paraText1} paraText2={posts[1].paraText2} paraText3={posts[1].paraText3} paraText4={posts[1].paraText4} image={posts[1].image}/>
      <Profile date={posts[2].date} paraText1={posts[2].paraText1} paraText2={posts[2].paraText2} paraText3={posts[2].paraText3} paraText4={posts[2].paraText4} image={posts[2].image}/>
    </div>  
  );
}

function Profile(props) {
  return (
    <div className="Profile">
      <div className="date">
      <p>{props.date}</p>
      </div>
      <div className="para">
      <div className="para1">
        <p>{props.paraText1}</p>
      </div>
      <div className="p23">
        <h1>{props.paraText2}</h1>
        <p>{props.paraText3}</p>
      </div>
      <div className="p4">
        <p>{props.paraText4}</p>
      </div>
      </div>
    <div className="image">
      <img src={props.image} width="360" height="200" alt="a news pic"/>
    </div>
    </div>    
  );
}

export default App;
