import { useEffect, useRef } from "react";

interface Props {
  src: string;
  tall?: boolean;
  poster?: string;
}

export function VideoPreview({ src, tall = false, poster }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`overflow-hidden border-b border-gray-100 bg-gray-50 ${
        tall ? "h-96" : "h-72"
      }`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover object-top"
        muted
        playsInline
        loop
        preload="metadata"
      />
    </div>
  );
}
