// pages/index.js
import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

type VimeoPlayerProps = {
  videoId: string;
};

const VimeoPlayer =  ({ videoId }: VimeoPlayerProps) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const [player, setPlayer] = useState<Player | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  useEffect(() => {
    if (!playerRef.current) return;

    const vimeoPlayer = new Player(playerRef.current, {
      id: Number(videoId),
      width: 640,
    });

    setPlayer(vimeoPlayer);

    // 只設定播放起點，但不自動播放
    vimeoPlayer.on("loaded", async () => {
      await vimeoPlayer.setCurrentTime(10);
    });

    // 監聽時間變化，在 20 秒時重置回 10 秒，實現循環播放
    vimeoPlayer.on("timeupdate", async (data) => {
      if (data.seconds >= 20 && isLooping) {
        // 設置回 10 秒繼續播放
        await vimeoPlayer.setCurrentTime(10);
        console.log("已回到 10 秒，繼續播放");
      }
    });

    return () => {
      vimeoPlayer.destroy();
    };
  }, [videoId, isLooping]);

  // 處理播放按鈕點擊
  const handlePlayClick = async () => {
    if (!player) return;
    
    if (isPlaying) {
      await player.pause();
    } else {
      await player.play();
      setIsLooping(true); // 開始播放時啟用循環
    }
    
    setIsPlaying(!isPlaying);
  };

  // 處理循環開關點擊
  const handleLoopToggle = () => {
    setIsLooping(!isLooping);
  };

  return (
    <div className="max-w-2xl w-full mx-auto">
      <div ref={playerRef} className="shadow-lg rounded-lg overflow-hidden" />
      <div className="mt-4 text-center">
        <button 
          onClick={handlePlayClick} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          {isPlaying ? '暫停' : '播放'}
        </button>
        <button 
          onClick={handleLoopToggle} 
          className={`${isLooping ? 'bg-green-500 hover:bg-green-700' : 'bg-gray-500 hover:bg-gray-700'} text-white font-bold py-2 px-4 rounded`}
        >
          循環播放: {isLooping ? '開' : '關'}
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <VimeoPlayer videoId="1062288466" />
    </div>
  );
}
