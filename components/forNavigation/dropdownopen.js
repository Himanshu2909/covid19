import Link from "next/link";

export default function ddo({ status }) {
  return (
    <div id="inDropdown">
      <Link
        href="/"
        style={{
          display: "inherit",
          marginRight: "10px",
        }}
      >
        <button
          className="btn btn-4 btn-4c icon-arrow-right"
          style={{ marginRight: "5px" }}
          id={
            typeof window !== "undefined"
              ? window.location.pathname === "/" ||
                window.location.pathname === ""
                ? "active"
                : "data"
              : "data"
          }
          wfd-id="62"
        >
          Home
        </button>
      </Link>
      <Link
        href="/about"
        style={{
          display: "inherit",
          marginRight: "10px",
        }}
      >
        <button
          className="btn btn-4 btn-4c icon-arrow-right"
          style={{ marginRight: "5px" }}
          id={
            typeof window !== "undefined"
              ? window.location.pathname === "/about"
                ? "active"
                : "data"
              : "data"
          }
          wfd-id="62"
        >
          About
        </button>
      </Link>
    </div>
  );
}
