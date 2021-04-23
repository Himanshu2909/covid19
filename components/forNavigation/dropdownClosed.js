import { Dropdown } from "react-bootstrap";
import Link from "next/link";
import CustomToggleSecond from "./customToggleSecond";
export default function Dropdownse(status) {
  return (
    <div>
      <Dropdown id="navToggle">
        <Dropdown.Toggle as={CustomToggleSecond}></Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item key="home">
            <Link href="/">Home</Link>
          </Dropdown.Item>

          <Dropdown.Item key="about">
            <Link href="/about">About</Link>
          </Dropdown.Item>
        </Dropdown.Menu>{" "}
      </Dropdown>
    </div>
  );
}
