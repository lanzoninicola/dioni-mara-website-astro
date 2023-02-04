import type { PayloadCollection } from "./types";
import qs from "qs";
import type { Post } from "@/payload/payload-types";

function apiFetch(url: string, options: any = {}) {
  console.log(url);

  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };

  return fetch(url, mergedOptions).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(
      `Error fetching page data: ${res.statusText} (${res.status})}`
    );
  });
}

export async function getPosts(
  query: any = null
): Promise<PayloadCollection<Post>> {
  const stringifiedQuery = qs.stringify(query, { addQueryPrefix: true });
  console.log("🚀 ~ file: api.ts:33 ~ stringifiedQuery", stringifiedQuery);

  const data = await apiFetch(
    `${import.meta.env.PAYLOAD_URL}/api/posts${stringifiedQuery}`
  );
  return data;
}

export async function findAll(slug: string): Promise<Post[]> {
  const data = await apiFetch(
    `${import.meta.env.PAYLOAD_URL}/api/posts?where[slug]=${slug}`
  );
  console.log("🚀 ~ file: api.ts:45 ~ findAll ~ data.docs", data.docs);

  return data.docs || null;
}
