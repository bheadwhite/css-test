import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="backImage">
          {
            //54J 54C-1 54C-2 54C-3
          }
          <p>
            Best <span>Coding</span> Videos On The Interwebs
          </p>
        </div>
        {
          //54D-1
        }
        <article className="backgroundImages">
          {
            //54E-1 54F-1 54F-2
          }
          <h1>Videos</h1>
          <h2>Are cool!</h2>
          {
            //54G
          }
          <img src={process.env.PUBLIC_URL + "/assets/compGuy.png"} alt="compGuy" />
        </article>
        {
          //54D-2
        }
        <section className="videoDiv">
          <video
            controls
            src={process.env.PUBLIC_URL + "/assets/vid1.mp4"}
            height="300"
            width="500"
            type="video/mp4"
          >
            Your browser doesnt support this video.
          </video>
          <ul>
            {
              //54E-2 54H
            }
            <li>check</li>
            <li>it</li>
            <li>
              <a href="http://www.google.com" target="_blank" >GO HOME</a>
            </li>
          </ul>
        </section>
        <section className="videoDiv">
          <video
            controls
            src={process.env.PUBLIC_URL + "/assets/vid2.mp4"}
            height="300"
            width="500"
            type="video/mp4"
          >
            Your browser doesnt support this video.
          </video>
        </section>
        <section className="videoDiv">
          <video
            controls
            src={process.env.PUBLIC_URL + "/assets/vid3.mp4"}
            height="300"
            width="500"
            type="video/mp4"
          >
            Your browser doesnt support this video.
          </video>
        </section>
        <section className="videoDiv">
          <video
            controls
            src={process.env.PUBLIC_URL + "/assets/vid4.mp4"}
            height="300"
            width="500"
            type="video/mp4"
          >
            Your browser doesnt support this video.
          </video>
        </section>
        <section className="videoDiv">
          <video
            controls
            src={process.env.PUBLIC_URL + "/assets/kittens-puppies.mp4"}
            height="300"
            width="500"
            type="video/mp4"
          >
            Your browser doesnt support this video.
          </video>
        </section>
        {
          //54D-3
        }
        <footer>&copy;testingCopys 2018</footer>
      </div>
    );
  }
}

export default App;