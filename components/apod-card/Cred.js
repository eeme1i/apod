import Image from "next/image";
import Link from "next/link";

function Creds({ credit, url }) {
  return (
    <div className="tracking-tight text-neutral-500">
      <div className="">
        <p>Image Credit & Copyright:</p>
        <Link href={url}>
          <a className="hover:underline">{credit}</a>
        </Link>
      </div>
    </div>
  );
}

export default Creds;
