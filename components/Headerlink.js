import Link from "next/link";

function Headerlink({ url, value }) {
  return (
    <div className="font-semibold tracking-tight text-neutral-500 hover:text-neutral-900 transition-all ease-in-out	duration-100 px-4 py-2 rounded-lg">
      <Link href={url}>
        <a className="">{value}</a>
      </Link>
    </div>
  );
}

export default Headerlink;
