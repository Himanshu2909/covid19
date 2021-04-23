import Footer from "../components/footer";
import Head from "../components/head";
import { Toast, ToastBody } from "react-bootstrap";
import { Offline } from "react-detect-offline";

export default function Blogs() {
  const description =
    "Find bloogs posted by various people here and enjoy expanding your thougts into their world.";
  const title = "covidresources | Blogs";
  const url = "https://www.covidresources.me/blogs";
  const images = "https://www.covidresources.me/logo.png";
  const alts = "logo of the covidresources website";
  const imagec = "https://www.covidresources.me/logo.png";
  const altc = "logo of the covidresources website";
  const tags =
    "blog, infinity, passionate bloggers, blogs, passionate, write, read, post, live thousand lives in one world,all,global";
  const card = "summary_large_image";
  return (
    <div>
      <Head
        description={description}
        title={title}
        url={url}
        images={images}
        alts={alts}
        imagec={imagec}
        altc={altc}
        tags={tags}
        card={card}
      ></Head>
      <main></main>
      <Footer></Footer>
    </div>
  );
}
