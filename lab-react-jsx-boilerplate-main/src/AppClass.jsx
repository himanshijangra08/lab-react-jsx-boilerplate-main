import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render() {
    const data = this.imageData();

    return (
      <div className="App">
        <h1>Image Gallery</h1>
        <div className="image-container">
          {data.map((item) => (
            <div key={item.id} className="image-item">
              <img src={item.img} alt={`Image ${item.id}`} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
