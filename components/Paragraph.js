import Image from "next/image";

function Paragraph({ text }) {
  return (
    <div className="tracking-tight text-md text-neutral-800">
      <p>{text}</p>
    </div>
  );
}

export default Paragraph;
