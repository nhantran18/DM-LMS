import React ,{useState, useEffect, useRef, useCallback} from 'react';
import { learning_logApi } from '../../../../api/learning-log';
import { useAuth } from '../../../../hooks/use-auth';

// const PreviewVideo = ({lmId, valueRating}) => {
//     const [currentTime, setCurrentTime] = useState(0);
//     const [isSeeking, setIsSeeking] = useState(false);
//     const videoRef = useRef(null);
//     const {user} = useAuth();
//     console.log(valueRating);

//     // Refs to hold the latest values of currentTime and valueRating
//     const currentTimeRef = useRef(currentTime);
//     const valueRatingRef = useRef(valueRating);

//     // Update the refs when the state changes
//     useEffect(() => {
//       currentTimeRef.current = currentTime;
//     }, [currentTime]);

//     useEffect(() => {
//       valueRatingRef.current = valueRating;
//     }, [valueRating]);

//     const createVideoLog = async (lmId, user) => {
//       try {
//         const response = await learning_logApi.createLog(user.id, {
//           rating: valueRatingRef.current,
//           time: currentTimeRef.current, //chỗ này cần phải lấy time của lm sau đó gắn vào
//           attempts: 1,
//           learningMaterialId: lmId,
//         });
//         console.log(response);
  
//       } catch (err) {
//         console.error(err);
//       }
//     }
  
//     // const getFile = async (lmId) => {
//     //   const response = await fileApi.getFileFromGGDrive(lmId)
//     //   console.log(response)
//     //   return response.data
//     // }
  
//     console.log(valueRatingRef)

//     useEffect(() => {
//       // getFile(lmId)
//       setCurrentTime(0);
//       const handleLocationChange = () => {
//         createVideoLog(lmId, user)
//       };

//       window.addEventListener('popstate', handleLocationChange);
//     },[])

//     // const handleLocationChange = useCallback(() => {
//     //   createVideoLog(lmId, user)
//     // }, []);
//     // window.removeEventListener('popstate', handleLocationChange);

  
//     useEffect(() => {
//       const video = videoRef.current;
  
//       if (!video) {
//         return;
//       }
  
//       const updateCurrentTime = () => {
//         setCurrentTime(video.currentTime);
//       };
  
//       const handleSeekStart = () => {
//         setIsSeeking(true);
//       };
  
//       const handleSeekEnd = () => {
//         setIsSeeking(false);
//       };
  
//       video.addEventListener('timeupdate', updateCurrentTime);
//       video.addEventListener('seeking', handleSeekStart);
//       video.addEventListener('seeked', handleSeekEnd);
  
//       return () => {
//         video.removeEventListener('timeupdate', updateCurrentTime);
//         video.removeEventListener('seeking', handleSeekStart);
//         video.removeEventListener('seeked', handleSeekEnd);
//       };
//     }, [videoRef.current]);
  
//     const handleVideoSeek = (event) => {
//       const video = videoRef.current;
//       const time = parseFloat(event.target.value);
  
//       // Kiểm tra xem giá trị thời gian có hợp lệ không
//       if (!isNaN(time) && isFinite(time)) {
//         setCurrentTime(time);
//         if (video) {
//           video.currentTime = time;
//         }
//       }
//     };
  
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <video
//           ref={videoRef}
//           width="100%"
//           // height="70%"
//           controls
//           preload="none"
//           onTimeUpdate={handleVideoSeek}
//         >
//           <source src={`${process.env.NEXT_PUBLIC_SERVER_API}/learning-materials/${lmId}`} type="video/mp4" />
//           <track
//             src="/path/to/captions.vtt"
//             kind="subtitles"
//             srcLang="en"
//             label="English"
//           />
//           Your browser does not support the video tag.
//         </video>
//         {/* {!isSeeking && (
//           <p>Current Time: {currentTime.toFixed(2)} seconds</p>
//         )} */}
//       </div>
//         )
//   }

// export default PreviewVideo; 

import ReactPlayer from 'react-player'
import Video from 'next-video';
  // import awesomeVideo from "http://localhost:3000//learning-materials/531" 
const PreviewVideo = ({lmId, valueRating}) => {
  const playerRef = useRef(null);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleProgress = (state) => {
    setPlayed(state.played);
  };

  const handleSeekChange = (e) => {
    const newPlayed = parseFloat(e.target.value);
    setPlayed(newPlayed);
    playerRef.current.seekTo(newPlayed, 'fraction');
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        // url={`${process.env.NEXT_PUBLIC_SERVER_API}/learning-materials/${lmId}`}
        url="https://www.youtube.com/watch?v=GHTA143_b-s"
        playing={false}
        controls={true}
        onProgress={handleProgress}
        onDuration={handleDuration}
        width="100%"
        height="500px"
      />
      <input
        type="range"
        min={0}
        max={1}
        step='any'
        value={played}
        onChange={handleSeekChange}
      />
    </div>
  );
}

export default PreviewVideo;

