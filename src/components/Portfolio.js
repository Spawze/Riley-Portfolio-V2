import React from "react";
import ProjectCard from "./ProjectCard";
import dogBytesImage from '../images/dogbytes.png'
import reactionTimeImage from '../images/its-reaction-time.png'
import semiSnitchImage from '../images/semi-snitch.png'
// import placeholderImage from '../images/placeholder.png'
import weatherDashboardImage from '../images/weather-dashboard.png'
export default function Portfolio(){
    const projects =[

        {
            name: "Semi Snitch",
            key:6,
            image: semiSnitchImage,
            url: "https://infinite-meadow-71565.herokuapp.com",
            github: "https://github.com/greg4949/Semi-Snitch",
            description: "Semi Snitch is my final group project from the bootcamp. I made it with 5 other people. The app will take semi truck idle events- which are when a semi truck idles for too long- and will compare that event to the outside temperature at the time of the event. The user can then decide whether or not to coach the driver of the truck. All of the info on idle events is stored in a database, so the user can access from anywhere.",
            imgAlt: "Image of the Semi-Snitch website. Shows rows of semi truck idle event information"
        },
        {
            name:"DogBytes",
            key:1,
            image: dogBytesImage,
            url: "https://navidliwa.github.io/dog-bytes/",
            github: "https://github.com/navidliwa/dog-bytes",
            description: "This was my first big project. I worked on it in a group with 4 other people. My primary job was implementing the Google Maps api and the functionality with the search bar, and also helping with functionality and design across the app.\nThe app allows the user to make profiles for their dogs, and helps them keep track of how much food to feed them. There is also a Google maps widget that will find dog parks or parks near you, provided a zip code. Then, just for fun, there is a random dog image generator that takes dog images from an API. The app has no back-end, and is mainly used to demonstrate uses of APIs and front-end design.",
            imgAlt: "Image of the DogBytes webpage. Shows a dog, and some info about the dog and how much to feed it."
        },
        {
            name:"It's Reaction Time!",
            key:2,
            image: reactionTimeImage,
            url: "https://its-reaction-time.herokuapp.com",
            github: "https://github.com/Spawze/Goofy-Wacky-Reaction-Time-Game",
            description: "This is my second project. I worked on it in a group with 2 other people. I was in charge of doing most of the back-end and front-end functionality, while my two team members did most of the styling and html layout. This app is a small game where you create an account, and test your reaction time against other people in the leaderboard. It uses heroku to host the server and database where accounts and scores are stored. Go ahead and give it a try!",
            imgAlt: "Image of the It's Reaction Time game page. There is a red square, and instructions saying to click it when it turns green."
        },
        {
            name: "Weather Dashboard",
            key:3,
            image: weatherDashboardImage,
            url: "https://spawze.github.io/Weather-Dashboard/",
            github: "https://github.com/Spawze/Weather-Dashboard",
            description: "A simple weather forecast dashboard. I made this by myself in the early days of my bootcamp. It uses the information provided by the user to call the OpenWeather API to get the information, and then will display. This app uses only HTML, JS, and CSS.",
            imgAlt: "Placeholder image"
        },
        // {
        //     name: "Placeholder",
        //     key:4,
        //     image: placeholderImage,
        //     url: "#!",
        //     github: "#!",
        //     description: "Placeholder project :3",
        //     imgAlt: "Placeholder image"
        // },
        // {
        //     name: "Placeholder",
        //     key:5,
        //     image: placeholderImage,
        //     url: "#!",
        //     github: "#!",
        //     description: "Placeholder project :3",
        //     imgAlt: "Placeholder image"
        // },
        
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