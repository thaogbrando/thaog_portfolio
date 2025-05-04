import type { Metadata } from "next";
import { Tektur } from "next/font/google";
import Navbar from '@/app/_components/Navbar/Navbar'
import "./globals.css";
import { ThemeProvider } from "@/hooks/themeProvider"
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Footer from './_components/Footer/Footer';
import Logo from "@/public/oglogo.png"

const inter = Tektur({
  subsets: ['latin'],
  weight: '400',
  display: 'auto'
})

export const metadata: Metadata = {
  title: "ThaOgBrando",
  description: "Just a hobbyist coder enjoying the little things in life. Sólo un programador oficionado que disfruta de las pequeñas cosas de la vida.",
  openGraph: {
    title: 'ThaOgBrando',
    description: 'Just a hobbyist coder enjoying the little things in life. Sólo un programador oficionado que disfruta de las pequeñas cosas de la vida.',
    url: 'https://thaogbrando.com',
    siteName: 'thaogbrando',
    images: [
      {
        url: 'https://thaogbrando.com/oglogo.png',
        width: 500,
        height: 500,
        alt: 'Your Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();
  const messages = await getMessages()

  return (
    <html suppressHydrationWarning lang={locale}>
      <body  data-new-gr-c-s-check-loaded data-gr-ext-installed className={`${inter.className} scroll-smooth bg-light-background dark:bg-dark-background selection:bg-dark-secondary dark:selection:bg-blue-primary`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
