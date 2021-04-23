import Footer from "../components/footer";
import Head from "../components/head";
import { Toast, ToastBody } from "react-bootstrap";
import { Offline } from "react-detect-offline";
export default function Tnc() {
  const description =
    "covidresources wants to be sure that you know what we are collecting from you and have therefore mentioned it all here.";
  const title = "covidresources | Terms and Conditions";
  const url = "https://www.covidresources.me/terms-and-conditions";
  const images = "https://www.covidresources.me/logo.png";
  const alts = "logo of the covidresources website";
  const imagec = "https://www.covidresources.me/logo.png";
  const altc = "logo of the covidresources website";
  const tags =
    "blog, infinity, passionate bloggers, blogs, passionate, write, read, post, Terms and Conditions,Terms And Conditions, terms, consitoons, Terms, Conditions, and, And";
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
