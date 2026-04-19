import { createBrowserRouter, Outlet } from 'react-router';
import { Navbar } from './components/navbar';
import { SettingsProvider } from './context/SettingsContext';
import { LandingPage } from './components/landing-page';
import { HoKinhDoanhForm } from './components/ho-kinh-doanh-form';
import { DoanhNghiepForm } from './components/doanh-nghiep-form';
import { DoanhNghiep2TVForm } from './components/doanh-nghiep-2tv-form';

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
    ],
  },
], {
  basename: '/dang-ky-kinh-doanh/',
});