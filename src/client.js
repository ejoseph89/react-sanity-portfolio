import sanityClient from "sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export default sanityClient({
  projectId: "jb1wzpaz",
  dataset: "production",
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);