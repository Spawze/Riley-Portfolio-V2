import React from "react";
import ProjectCard from "./ProjectCard";
import dogBytesImage from '../images/dogbytes.png'
import reactionTimeImage from '../images/its-reaction-time.png'
export default function Portfolio(){
    const projects =[
        {
            name:"DogBytes",
            key:1,
            image: dogBytesImage,
            url: "https://navidliwa.github.io/dog-bytes/",
            github: "https://github.com/navidliwa/dog-bytes",
            description: "This was my first big project. I worked on it in a group with 4 other people. My primary job was implementing the Google Maps api and the functionality with the search bar, and also helping with functionality and design across the app.\nThe app allows the user to make profiles for their dogs, and helps them keep track of how much food to feed them. There is also a Google maps widget that will find dog parks or parks near you, provided a zip code. Then, just for fun, there is a random dog image generator that takes dog images from an API. The app has no back-end, and is mainly used to demonstrate uses of APIs and front-end design.",
        },
        {
            name:"It's Reaction Time!",
            key:2,
            image: reactionTimeImage,
            url: "https://its-reaction-time.herokuapp.com",
            github: "https://github.com/Spawze/Goofy-Wacky-Reaction-Time-Game",
            description: "This is my second project. I worked on it in a group with 2 other people. I was in charge of doing most of the back-end and front-end functionality, while my two team members did most of the styling and html layout. This app is a small game where you create an account, and test your reaction time against other people in the leaderboard. It uses heroku to host the server and database where accounts and scores are stored. Go ahead and give it a try!",
        }
    ]
    return (
        <div className="container">
            <div className="row">
                <h1 className="col s12">My Portfolio</h1>
                <div>
                    <ProjectCard projects = {projects}/>
                </div>
                
            </div>
        </div>
        )
}