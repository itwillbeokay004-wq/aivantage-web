import { resourceArticlesByLocale } from "@/data/resources";

export {
  generateMetadata,
} from "../../../resources/[slug]/page";
export { default } from "../../../resources/[slug]/page";

export function generateStaticParams() {
  return resourceArticlesByLocale.en.map((article) => ({
    slug: article.slug,
  }));
}
