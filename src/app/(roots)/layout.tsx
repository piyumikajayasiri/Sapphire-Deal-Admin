import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import SideNavigationBarOrganization from '@/components/shared/sideNavigationBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex flex-1'>
        <div className='md:block md:flex-shrink-0'>
          <SideNavigationBarOrganization />
        </div>
        <main className='flex-1 overflow-auto p-4 md:ml-64'>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
