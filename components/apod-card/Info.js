import Image from "next/image";

function Info({ title, date }) {
  return (
    <div className="text-5xl font-semibold tracking-tighter space-y-2">
      <p className="text-base font-normal tracking-normal text-neutral-500">
        {date}
      </p>
      <p>{title}</p>
    </div>
  );
}

export default Info;
