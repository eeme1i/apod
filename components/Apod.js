import Image from "next/image";

function Apod({ url }) {
  return (
    <div className="relative h-full w-full rounded-3xl">
      <div className="absolute rounded-3xl h-full w-full animate-pulse bg-neutral-200"></div>
      <Image
        src={url}
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="cover"
        className="rounded-3xl"
      />
    </div>
  );
}

export default Apod;
