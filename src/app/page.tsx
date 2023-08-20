'use client';
import { useEffect, useState } from "react";
import axios from "../../node_modules/axios/index";
import dotenv from "../../node_modules/dotenv/lib/main";
import { VideoDetails } from "../../types/videoDetails";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


dotenv.config();

type VideoInfo = {
  id: string,
  title: string,
};


export default function Home() {
  const [videoDetails, setVideoDetails] = useState<VideoInfo[] | []>([]);

  async function loadWatchLaterPlaylist() {
    const response = await axios.get('/api/watch-later-playlist');
    return response.data.items;
  }

  function extractVideoDetails(videos: VideoDetails[]) {
    const tempVideoData: VideoInfo[] = [];
    videos.forEach(video => {
      const videoId = video.snippet.resourceId.videoId;
      const videoTitle = video.snippet.title;
      tempVideoData.push({ id: videoId, title: videoTitle });
    });

    setVideoDetails(tempVideoData);
  }

  useEffect(() => {
    (async () => {
      const videos = await loadWatchLaterPlaylist();
      extractVideoDetails(videos);
    })();

  }, []);

  return (
    <main className="">
      <h1>Welcome Boi</h1>
      {
        videoDetails.length > 0 &&
        videoDetails.map(video => <>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{video.title}</AccordionTrigger>
              <AccordionContent>
                <iframe id="ytplayer" width="640" height="360"
                  src={`https://www.youtube.com/embed/${video.id}`}
                ></iframe>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </>)
      }
    </main>
  );
}
