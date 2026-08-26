import Head from 'next/head'
const OpenGraphHead = () => (
  <Head>
    <title>Hoang Son — Mobile Engineer</title>
    <meta name="author" content="Le Tran Hoang Son" />
    <meta
      name="description"
      content="Mobile engineer focused on Android, Compose, design systems, and reliable product experiences."
    />
    <meta property="og:title" content="Hoang Son — Mobile Engineer" />
    <meta property="og:site_name" content="Hoang Son's Portfolio" />
    <meta property="og:image" content="/card.png" />
    <meta
      property="og:description"
      content="Android, Compose, and design systems shaped into reliable mobile products."
    />
    <meta property="og:type" content="profile" />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
)
export default OpenGraphHead
