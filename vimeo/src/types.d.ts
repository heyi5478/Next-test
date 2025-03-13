declare module '@vimeo/player' {
  type PlayerOptions = {
    id?: number;
    url?: string;
    width?: number;
    height?: number;
    [key: string]: any;
  };

  class Player {
    constructor(element: HTMLElement | string | HTMLIFrameElement, options?: PlayerOptions);
    on(event: string, callback: (...args: any[]) => void): void;
    destroy(): void;
    setCurrentTime(seconds: number): Promise<void>;
    play(): Promise<void>;
    pause(): Promise<void>;
  }

  export default Player;
} 