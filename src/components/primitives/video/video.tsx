type VideoType = "video/mp4" | "video/webm" | "video/ogg";

interface VideoProps {
  src: string;
  type?: VideoType;
  orientation?: "landscape" | "portrait";
}

export default function Video({
  src,
  type = "video/mp4",
  orientation = "landscape",
}: VideoProps) {
  return (
    <VideoWrapper orientation={orientation}>
      <video
        className="aspect-square h-full w-full md:aspect-video"
        playsInline={true}
        autoPlay={true}
        loop={true}
      >
        <source src={src} type={type} />
      </video>
    </VideoWrapper>
  );
}

interface VideoWrapperProps {
  children: React.ReactNode;
  orientation: VideoProps["orientation"];
}

function VideoWrapper({ orientation, children }: VideoWrapperProps) {
  if (orientation === "landscape") {
    return <div className="scale-[calc(16/9)] md:scale-100">{children}</div>;
  }

  return <div className="scale-[calc(9/16)] md:scale-100">{children}</div>;
}
