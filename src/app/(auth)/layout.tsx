import HeroSection from '@/components/shared/left-container';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='bg-blue-900 min-h-screen flex flex-col lg:flex-row'>
        <div className='lg:basis-1/2'>
          <HeroSection />
        </div>
        <div className='bg-white lg:basis-1/2 flex-grow'>{children}</div>
      </div>
    </>
  );
}
