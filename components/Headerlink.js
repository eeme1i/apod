import Link from "next/link";

function Headerlink({ url, value }) {
  return (
    <div className="font-semibold tracking-tight text-neutral-500 hover:text-neutral-800 transition duration-200">
      <Link href={url}>
        <a>{value}</a>
      </Link>
    </div>
  );
}

export default Headerlink;
