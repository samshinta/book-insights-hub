import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  author?: string;
  bookTitle?: string;
}

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "/og-image.jpg",
  ogType = "article",
  author,
  bookTitle,
}: SEOProps) => {
  const siteUrl = "https://melhoresprecos.shop";
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  // Schema.org structured data for book review
  const structuredData = bookTitle
    ? {
        "@context": "https://schema.org",
        "@type": "Review",
        itemReviewed: {
          "@type": "Book",
          name: bookTitle,
          author: {
            "@type": "Person",
            name: author,
          },
        },
        reviewBody: description,
        author: {
          "@type": "Organization",
          name: "MelhoresPrecos",
        },
      }
    : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="MelhoresPrecos" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
