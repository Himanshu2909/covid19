import { Toast, ToastBody } from "react-bootstrap";
import { Offline } from "react-detect-offline";
import Footer from "../components/footer";
import Head from "../components/head";

export default function About() {
  const description =
    "COVID RESOURCES - Platform created to share covid details temporarily | Live thousand lives in one wordl | covidresources is both like a website and a diary. A place where all people across the globe get a chance to put their views and talent in front of everyone.";
  const title = "covidresources | About";
  const url = "https://www.covidresources.me/about";
  const images = "https://www.covidresources.me/logo.png";
  const alts = "logo of the covidresources website";
  const imagec = "https://www.covidresources.me/logo.png";
  const altc = "logo of the covidresources website";
  const tags =
    "blog, infinity, passionate bloggers, blogs, passionate, write, read, post, live thousand lives in one world,about";
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
      <main>
        <h1>Help people by sharing all the latest covid info at one place</h1>
      </main>
      <Footer></Footer>
    </div>
  );
}
