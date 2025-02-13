import { useEffect, useState } from "react";
import { getLink, LinkType } from "@utils/getLinks";

export function useLink(slug: LinkType) {
  const [link, setLink] = useState("#");

  useEffect(() => {
    getLink(slug).then(setLink);
  }, [slug]);

  return link;
}
