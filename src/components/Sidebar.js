import {
  ArrowRightIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  QueueListIcon,
} from "@heroicons/react/24/solid";
import ArtistSide from "../cards/ArtistSideCard";
import SideCard from "../cards/SideCard";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <div className="sidebarHeaderTop">
          <div className="sidebarHeaderContainer1">
            <QueueListIcon width={26} height={26} className="libraryIcon" />{" "}
            <p>Your Library</p>
          </div>
          <div className="sidebarHeaderContainer2">
            <PlusIcon width={20} height={20} />{" "}
            <ArrowRightIcon width={20} height={20} />
          </div>
        </div>
        <div className="sidebarHeaderContainer3">
          <p className="sidebarHeaderTitles">Playlists</p>
          <p className="sidebarHeaderTitles">Artists</p>
          <p className="sidebarHeaderTitles">Albums</p>
        </div>
      </div>
      <div className="sidebarScrollSection">
        <div className="scrollSectionTop">
          <MagnifyingGlassIcon width={19} height={19} /> <p>Recents ▼</p>
        </div>
        <div>
          <SideCard
            image="./images/greenpin.png"
            title="Liked Songs"
            info="Playlist • 2,500 songs"
          />
          <SideCard
            image="./images/van.jpg"
            title="sunny roadtrips 😎"
            info="Playlist • Ethan Binnie"
          />
          <ArtistSide
            image="./images/jonas.JPG"
            title="Jonas Brothers"
            info="Artist"
          />
          <ArtistSide
            image="./images/justin.JPG"
            title="Justin Timberlake"
            info="Artist"
          />
          <SideCard 
            image="./images/summer.JPG"
            title="summer"
            info="Playlist • Noah Taylor"
          />
          <ArtistSide 
            image="./images/rini.JPG"
            title="RINI"
            info="Artist"
          />
          <SideCard 
            image="./images/onrepeat.JPG"
            title="On Repeat"
            info="Playlist • Spotify"
          />
          <SideCard 
            image="/images/silksonic.JPG"
            title="Love's Train"
            info="Single"
          />
          <SideCard 
            image="./images/nightlife.jpg"
            title="nightlife"
            info="Playlist • Harry Snell"
          />
          <ArtistSide
            image="./images/brunomars.JPG"
            title="Bruno Mars"
            info="Artist"
          />
          <ArtistSide 
            image="images/mavcity.JPG"
            title="Maverick City Music"
            info="Artist"
          />
          <SideCard 
            image="./images/outdoorantics.jpg"
            title="outdoor antics"
            info="Playlist • Mike DeWet"
          />
          <SideCard 
            image="./images/housefires.JPG"
            title="Maverick City Music Vol. 3"
            info="Album"
          />
          <SideCard 
            image="./images/timeforrest.jpg"
            title="time for rest"
            info="Playlist • Ethan Binnie"
          />
        </div>
      </div>
    </div>
  );
}
