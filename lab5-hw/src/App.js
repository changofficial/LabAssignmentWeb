import logo from './logo.svg';
import './App.css';
import Video from './Video';
// import axios from "./components/axios";
import axios from 'axios'
import React, {useState, useEffect} from 'react'



function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:9000/v2/posts")
      setVideos(res.data)
      
      return res
    }
    fetchData()
  }, [])
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(({url, channel, description, song, likes, shares, messages}) => (
          <Video
            key={url}
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            shares={shares}
            messages={messages}
          />
        ))}
      </div>
    </div>
  );
}

export default App;