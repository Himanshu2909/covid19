import { connectToDatabase } from "../../../util/mongodb";
import xml from "xml";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  const posts = await db
    .collection("posts")
    .find({})
    .toArray()
    .then(async (e) => {
      let a = await e.map((e) => {
        return {
          url: [
            { loc: `https://www.arnavgupta.net/article/${e._id}` },
            { lastmod: `${e.dateUpdated}` },
          ],
        };
      });
      return a;
    })
    .then((e) => {
      e.push({
        _attr: { xlms: "http://www.sitemaps.org/schemas/sitemap/0.9" },
      });
      return e;
    })
    .then((e) =>
      res.setHeader("Content-Type", "text/xml").send(
        xml(
          [
            {
              urlset: e,
            },
          ],
          {
            declaration: {
              standalone: "yes",
              encoding: "UTF-16",
            },
          }
        )
      )
    );
};