import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPage } from "@/components/v1/ProductPage";
import { productBySlug, products } from "@/components/v1/data";
import { Shell } from "@/components/v1/Shell";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/v4/mentis/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const p = productBySlug(slug);
  if (!p) return {};
  return { title: `${p.name} | BanjuBits`, description: `${p.headline}. ${p.summary}` };
}

export default async function MentisProduct(props: PageProps<"/v4/mentis/[slug]">) {
  const { slug } = await props.params;
  const product = productBySlug(slug);
  if (!product) notFound();
  return (
    <Shell>
      <ProductPage product={product} />
    </Shell>
  );
}
