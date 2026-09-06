import { Helmet } from '@dr.pogodin/react-helmet';
import { type ReactElement } from 'react';
import { ScrollRestoration } from "react-router";
import Footer from '@/layouts/parts/Footer';
import Header from '@/layouts/parts/Header';
import Website from '@/layouts/Website';
interface RootLayoutProps {
  children: ReactElement;
}
export default function RootLayout({
  children
}: RootLayoutProps) {
  return <Website>
      <Helmet>
        <title>CALLESIL — Premium Graphic T-Shirts</title>
        <meta name="description" content="CALLESIL is an independent premium apparel brand specializing in high-quality graphic T-shirts designed for those who value simplicity, creativity, and timeless style." />
      </Helmet>
      <ScrollRestoration />
      <Header />
      {children}
      <Footer />
    </Website>;
}
