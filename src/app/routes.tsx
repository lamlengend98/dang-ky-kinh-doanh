import { createBrowserRouter, Outlet } from 'react-router';
import { Navbar } from './components/navbar';
import { SettingsProvider } from './context/SettingsContext';
import { LandingPage } from './components/landing-page';
import { HoKinhDoanhForm } from './components/ho-kinh-doanh-form';
import { DoanhNghiepForm } from './components/doanh-nghiep-form';
import { DoanhNghiep2TVForm } from './components/doanh-nghiep-2tv-form';
import { CongTyCoPhanForm } from './components/cong-ty-co-phan-form';
import { WordToPdf } from './components/word-to-pdf';

function Layout() {
  return (
    <SettingsProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </SettingsProvider>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: LandingPage,
      },
      // {
      //   path: 'ho-kinh-doanh',
      //   Component: HoKinhDoanhForm,
      // },
      {
        path: 'doanh-nghiep',
        Component: DoanhNghiepForm,
      },
      {
        path: 'doanh-nghiep-2-tv',
        Component: DoanhNghiep2TVForm,
      },
      {
        path: 'cong-ty-co-phan',
        Component: CongTyCoPhanForm,
      },
      // {
      //   path: 'word-to-pdf',
      //   Component: WordToPdf,
      // },
    ],
  },
], {
  basename: '/dang-ky-kinh-doanh/',
});