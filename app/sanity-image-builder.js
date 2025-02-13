import client from "./client";
import ImageUrlBuilder from "@sanity/image-url";

function urlForThumbnail(source) {
  if (source) {
    return ImageUrlBuilder(client).image(source).width(300).url();
  }
}

export { urlForThumbnail };
