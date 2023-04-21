import React from "react";

const About = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",

        margin: "20px 200px",
      }}
    >
      <div>
        <h2>About</h2>
        <img
          src=" https://avatars.githubusercontent.com/u/96439453?s=400&u=c8e84b6a8b9f4e740e9c4032dda86d91a438cb04&v=4"
          height={200}
          width={200}
          alt=""
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "20px 50px",
        }}
      >
        <div>
          <b>Name:</b>
          <span style={{ fontSize: "18px", color: "gray" }}>
            Ashutosh Kumar<br></br>
          </span>
          <div>
            <b>Email:</b>
            <span style={{ fontSize: "18px", color: "gray" }}>
              ashutoshkumar6.ak@gmail.com<br></br>
            </span>
          </div>
          <div>
            <b>Github id:</b>
            <span style={{ fontSize: "18px", color: "gray" }}>
              ashu1556<br></br>
            </span>
          </div>
          <div>
            <b>Phone no:-</b>
            <span style={{ fontSize: "18px", color: "gray" }}>
              9304268539<br></br>
            </span>
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "gray",
              width: "60%",
              wordSpacing: "5px",
            }}
          >
            I am Full Stack Developer and i know about html , css , javascript
            ,java ,React js , Node js, mongodb and i almot 10 to 15 project done
            on fornt part or also done 6 project on backend.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
