
import Top from "../cards/TopCard";
import Card from "../cards/MainCard";
import Artist from "../cards/ArtistCard";

export default function Main() {
  return (
    <div className="main">
      
      <div className="mainTop">
        <h1>Good afternoon</h1>
        <div className="topCardDisplay">
          <Top image="./images/likedsongs.JPG" title="Liked Songs" />
          <Top image="./images/timeforrest.jpg" title="time for rest 🍒" />
          <Top image="./images/summer.JPG" title="S U M M E R" />
          <Top image="./images/nightlife.jpg" title="nightlife 🫐" />
          <Top image="./images/van.jpg" title="sunny roadtrips 😎" />
          <Top image="./images/outdoorantics.jpg" title="outdoor antics" />
        </div>
      </div>
      <div className="cardCollection">
        <h2>Made For You</h2>
        <div className="cardDisplay">
          <Card
            image="./images/jonas.JPG"
            title="Release Radar"
            content="Catch all the latest music from artists you follow..."
          />
          <Card
            image="./images/civilwars.jpeg"
            title="Daily Mix 1"
            content="The Civil Wars, Axel Flovent, Nick Wilson..."
          />
          <Card
            image="./images/jacobcollier.jpeg"
            title="Daily Mix 2"
            content="Tom Misch, 9th Wonder and Anderson .Paak..."
          />
          <Card
            image="./images/charlieputh.jpeg"
            title="Daily Mix 3"
            content="Charlie Puth, Shawn Mendes, John Mayer..."
          />
          <Card
            image="./images/johnmayer.jpeg"
            title="Daily Mix 4"
            content="John Mayer, Tom Misch, Jordan Rakei and more"
          />
        </div>
        <h2>Your Top Mixes</h2>
        <div className="cardDisplay">
          <Card
            image="./images/axelflovent.jpeg"
            title="Chill Mix"
            content="Axel Flovent, Jacob Collier, Jordan Rakei..."
          />
          <Card
            image="./images/danielcaesar.jpeg"
            title="R&B Mix"
            content="Daniel Caesar, Rini, Dijon and more"
          />
          <Card 
            image="./images/parachute.jpeg"
            title="2000s Mix"
            content="Parachute Band, Ben Cantelon, Coldplay..."
          />
          <Card 
            image="./images/1975.png"
            title="The 1975 Mix"
            content="The 1975, Kodaline, Jeremy Zucker and more"
          />
          <Card 
            image="./images/harrystyles.jpeg"
            title="Moody Mix"
            content="Harry Styles, Noah Cyrus, Coldplay and more"
          />
        </div>
        <h2>Recently played</h2>
        <div className="cardDisplay">
          <Card 
            image="./images/jonasalbum.jpeg"
            title="The Album"
            content="Jonas Brothers"
          />
          <Card 
            image="./images/van.jpg"
            title="sunny roadtrips 😎"
            content="By Ethan Binnie"
          />
          <Card 
            image="./images/outdoorantics.jpg"
            title="outdoor antics"
            content="By Mike DeWet"
          />
          <Card 
            image="./images/nightlife.jpg"
            title="nightlife 🫐"
            content="By Harry Snell"
          />
          <Card 
            image="./images/summer.JPG"
            title="S U M M E R"
            content="By Noah Taylor"
          />
        </div>
        <h2>Jump back in</h2>
        <div className="cardDisplay">
          <Card 
            image="./images/postmalone.jpeg"
            title="Austin"
            content="Post Malone"
          />
          <Artist 
            image="./images/1975.png"
            title="The 1975"
            content="Artist"
          />
          <Card 
            image="./images/inmyroom.jpeg"
            title="In My Room"
            content="Jacob Collier"
          />
          <Card 
            image="./images/pjharding.jpeg"
            title="People Don't Change"
            content="Pj Harding"
          />
          <Artist 
            image="./images/brock.jpeg"
            title="BROCKHAMPTON"
            content="Artist"
          />
        </div>
      </div>
    </div>
  );
}
