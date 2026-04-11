import { Link, useLocation } from 'react-router';
import { FileText, Home, Settings } from 'lucide-react';
import { motion } from 'motion/react';
import { SettingsModal } from './settings-modal';
import { useSettings } from '../context/SettingsContext';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export function Navbar() {
  const location = useLocation();
  const { isSettingsOpen, openSettings, closeSettings } = useSettings();

  const navItems = [
    { path: '/', label: 'Trang chủ', icon: Home },
    { path: '/ho-kinh-doanh', label: 'Hộ kinh doanh', icon: FileText },
    { path: '/doanh-nghiep', label: 'Doanh nghiệp', icon: FileText },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-primary/10 shadow-sm">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-sky-600">Đăng ký kinh doanh</span>
          </div>

          <div className="flex gap-1 bg-accent/50 p-1 rounded-lg">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-4 py-2 rounded-md transition-colors duration-200"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white shadow-sm rounded-md"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className={`relative z-10 flex items-center gap-2 transition-colors ${
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}>
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={openSettings}
                className="p-2.5 rounded-xl bg-accent/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20 flex items-center gap-2"
              >
                <Settings className="w-5 h-5" />
                <span className="text-sm font-medium hidden md:inline">Thiết lập</span>
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom" sideOffset={8}>
              <p>Cấu hình thông tin người được ủy quyền để tự động điền vào hồ sơ.</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={closeSettings}
      />
    </nav>
  );
}
