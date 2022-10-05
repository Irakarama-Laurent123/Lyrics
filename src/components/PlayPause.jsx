/* eslint-disable quotes */
/* eslint-disable no-confusing-arrow */
import { FaPauseCirlce, FaPlayCircle } from "react-icons";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCirlce size={35} className="text-gray-300 " onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300 " onClick={handlePlay} />
  );

export default PlayPause;
