import SearchCard from "../cards/SearchCard";
import ArtistSearch from "../cards/ArtistSearchCard";
import Genre from "../cards/GenreCard";

export default function Search() {
  return (
    <div className="search">
      <div className="cardCollection">
        <h2>Recent searches</h2>
        <div className="cardDisplay">
          <SearchCard
            image="./images/silksonic.JPG"
            title="Love's Train"
            content="2022 • Bruno Mars, Anderson .Paak, Silk..."
          />
          <ArtistSearch
            image="./images/rini.JPG"
            title="RINI"
            content="Artist"
          />
          <SearchCard
            image="./images/jonasalbum.jpeg"
            title="The Album"
            content="2023 • Jonas Brothers"
          />
          <ArtistSearch
            image="./images/1975.png"
            title="The 1975"
            content="Artist"
          />
          <ArtistSearch
            image="./images/justin.JPG"
            title="Justin Timberlake"
            content="Artist"
          />
        </div>
        <h2>Browse all</h2>
        <div className="genreCollection">
          <Genre color="red" title="Podcasts" />
          <Genre color="#2A3EC0" title="Audiobooks" />
          <Genre color="#8971DA" title="Live Events" />
          <Genre color="#19285D" title="Made For You" />
          <Genre color="#E74665" title="New releases" />
          <Genre color="#298C21" title="Pop" />
          <Genre color="#BE6719" title="Hip-Hop" />
          <Genre color="#391F41" title="Country" />
          <Genre color="red" title="Rock" />
          <Genre color="#A571BC" title="Charts" />
          <Genre color="#00D4D6" title="Indie" />
          <Genre color="#EF0BB2" title="Fresh Finds" />
          <Genre color="#2D8B4A" title="Summer" />
          <Genre color="#246638" title="Reggae" />
          <Genre color="#8A54B0" title="Discover" />
          <Genre color="#486A9D" title="Party" />
          <Genre color="#E70DB1" title="Mood" />
          <Genre color="#687887" title="Workout" />
          <Genre color="#407D5C" title="Chill" />
          <Genre color="#1B2464" title="Sleep" />
        </div>
      </div>
    </div>
  );
}
