import {
  ArrowRightCircleIcon,
  ArrowsPointingOutIcon,
  DevicePhoneMobileIcon,
  MicrophoneIcon,
  PhotoIcon,
  QueueListIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowPathRoundedSquareIcon,
  ArrowsRightLeftIcon,
  BackwardIcon,
  ForwardIcon,
  HeartIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import { Component } from "react";
import Slowdancing from "../audioclips/slowdancing.mp3";
import { Howl, Howler } from "howler";

const audioClips = [{ sound: Slowdancing }];

class Track extends Component {
  SoundPlay = (src) => {
    const sound = new Howl({
      src,
    });
    sound.play();
  };

  RenderSound = () => {
    return audioClips.map((soundObj, index) => {
      return (
        <PlayIcon
          style={{
            width: 20,
            height: 20,
            padding: 6,
            borderRadius: 20,
            backgroundColor: "#f9f9f9",
          }}
          key={index}
          onClick={() => this.SoundPlay(soundObj.sound)}
        />
      );
    });
  };

  render() {
    Howler.volume(0.5);
    return (
      <div className="track">
        <div className="trackInfo">
          <img
            src="./images/slowdancing.jpeg"
            alt="trackimage"
            style={{ width: 55, height: 55, borderRadius: 5 }}
          />
          <div className="trackInfoTitles">
            <p
              style={{
                marginBottom: 2,
                color: "#f9f9f9",
                fontSize: 13,
                letterSpacing: 0.25,
              }}
            >
              Slow Dancing in a Burning Room
            </p>
            <p style={{ marginTop: 0, color: "#bebcbc", fontSize: 11 }}>
              John Mayer
            </p>
          </div>
          <HeartIcon
            style={{
              width: 20,
              height: 20,
              paddingLeft: 18,
              color: "rgb(54, 190, 54)",
            }}
          />
          <PhotoIcon
            style={{ width: 20, height: 20, paddingLeft: 12, color: "#bebcbc" }}
          />
        </div>
        <div className="trackControls">
          <div className="trackControlsTop">
            <ArrowsRightLeftIcon
              style={{ width: 20, height: 20, color: "#bebcbc" }}
            />
            <BackwardIcon style={{ width: 20, height: 20, color: "#bebcbc" }} />
            {this.RenderSound()}
            <ForwardIcon style={{ width: 20, height: 20, color: "#bebcbc" }} />
            <ArrowPathRoundedSquareIcon
              style={{ width: 20, height: 20, color: "#bebcbc" }}
            />
          </div>
          <div className="trackControlsBottom">
            <p style={{ paddingRight: 10, paddingBottom: 2 }}>0:00</p>
            <div
              style={{
                width: 460,
                height: 4,
                borderRadius: 20,
                backgroundColor: "rgb(74, 74, 74)",
              }}
            ></div>
            <p style={{ paddingLeft: 10, paddingBottom: 2 }}>4:02</p>
          </div>
        </div>
        <div className="trackIcons">
          <ArrowRightCircleIcon
            style={{ width: 20, height: 20, color: "#bebcbc" }}
          />
          <MicrophoneIcon style={{ width: 20, height: 20, color: "#bebcbc" }} />
          <QueueListIcon style={{ width: 20, height: 20, color: "#bebcbc" }} />
          <DevicePhoneMobileIcon
            style={{ width: 20, height: 20, color: "#bebcbc" }}
          />
          <SpeakerWaveIcon
            style={{ width: 20, height: 20, color: "#bebcbc" }}
          />
          <div
            style={{
              width: 95,
              height: 4,
              borderRadius: 20,
              backgroundColor: "#f9f9f9",
            }}
          ></div>
          <ArrowsPointingOutIcon
            style={{ width: 20, height: 20, color: "#bebcbc" }}
          />
        </div>
      </div>
    );
  }
}

export default Track;
