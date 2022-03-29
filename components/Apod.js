import Image from "next/image";

function Apod({ url }) {
  return (
    <div className="h-full w-full">
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
