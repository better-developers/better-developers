import Script from "next/script";

export const GoogleAnalytcs = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-E65MNNFH4T"
      />
      <Script src="/analytics/google-analytics.js" />
    </>
  );
};
