import { useDispatch, useSelector } from "react-redux";
import { playSong, pauseSong } from "../redux/slices/playerSlice";
import { chooseNextSong, upvoteSong } from "../redux/slices/queueSlice";

const PlayerControls = () => {
  const dispatch = useDispatch();
  const { queue } = useSelector(state => state.queue);
  const { isPlaying, currentSong } = useSelector(state => state.player);
  const { isDJMode } = useSelector(state => state.auth); // ✅ Get DJ Mode from `authSlice`

  // Select Next Song Based on Upvotes (Auto-Mode)
  const getNextSong = () => {
    if (queue.length === 0) return null;
    return isDJMode
      ? queue[0] // DJ selects manually (handled via UI)
      : [...queue].sort((a, b) => b.upvotes - a.upvotes)[0]; // Auto mode: highest upvotes
  };

  // Play Next Song
  const handleNextSong = () => {
    const nextSong = getNextSong();
    if (nextSong) {
      dispatch(playSong(nextSong));
      dispatch(chooseNextSong(nextSong.id)); // Remove from queue
    } else {
      dispatch(pauseSong());
    }
  };

  return (
    <div>
      <h3>Now Playing: {currentSong ? currentSong.title : "None"}</h3>

      {/* Upvote Feature */}
      {queue.map(song => (
        <div key={song.id}>
          <span>{song.title} ({song.upvotes} upvotes)</span>
          <button onClick={() => dispatch(upvoteSong(song.id))}>Upvote</button>
        </div>
      ))}

      {/* Controls */}
      <button onClick={handleNextSong}>Next</button>
      <button onClick={() => dispatch(isPlaying ? pauseSong() : playSong(currentSong))}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};
