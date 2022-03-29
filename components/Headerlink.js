import Link from "next/link";

function Headerlink({ url, value }) {
  return (
    <div className="font-semibold tracking-tight text-neutral-500 hover:text-neutral-600 transition-all ease-in-out	duration-300 px-4 py-2 hover:bg-neutral-200 rounded-xl">
      <Link href={url}>
        <a className="">{value}</a>
      </Link>
    </div>
  );
}

export default Headerlink;
