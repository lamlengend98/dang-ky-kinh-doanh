import { Link, useLocation } from 'react-router';
import { Home, Settings, Menu, X, Users, Building2, ChevronDown, FileText, FileType } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { SettingsModal } from './settings-modal';
import { useSettings } from '../context/SettingsContext';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function Navbar() {
  const location = useLocation();
  const { isSettingsOpen, openSettings, closeSettings } = useSettings();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileNavItems = [
    { path: '/', label: 'Trang chủ', icon: Home, external: false },
    { path: '/doanh-nghiep', label: 'Hồ sơ CTY TNHH 1 TV', icon: Building2, external: false },
    { path: '/doanh-nghiep-2-tv', label: 'Hồ sơ CTY TNHH 2 TV', icon: Users, external: false },
    { path: '/cong-ty-co-phan', label: 'Hồ sơ CTY Cổ phần', icon: Users, external: false },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg overflow-hidden border border-primary/10 shadow-sm flex-shrink-0">
              <img src="logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="hidden sm:inline text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-sky-600">Đăng ký kinh doanh</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-3 items-center">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors text-sm font-medium ${location.pathname === '/'
                ? 'bg-accent text-foreground shadow-sm'
                : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                }`}
            >
              <Home className="w-4 h-4" />
              Trang chủ
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors text-sm font-medium shadow-sm ${location.pathname !== '/'
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}>
                  <FileText className="w-4 h-4" />
                  Tạo hồ sơ
                  <ChevronDown className="w-4 h-4 opacity-70" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuItem asChild>
                  <Link to="/doanh-nghiep" className="cursor-pointer w-full flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-sky-500" />
                    <span>CTY TNHH 1 TV</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/doanh-nghiep-2-tv" className="cursor-pointer w-full flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span>CTY TNHH 2 TV</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/cong-ty-co-phan" className="cursor-pointer w-full flex items-center gap-2">
                    <Users className="w-4 h-4 text-indigo-500" />
                    <span>CTY Cổ phần</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right side: tools + settings + mobile hamburger */}
          <div className="flex items-center gap-2">


            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={openSettings}
                  className="p-2 md:p-2.5 rounded-xl bg-accent/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20 flex items-center gap-2"
                >
                  <Settings className="w-5 h-5" />
                  <span className="text-sm font-medium hidden md:inline">Thiết lập</span>
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={8}>
                <p>Cấu hình thông tin người được ủy quyền để tự động điền vào hồ sơ.</p>
              </TooltipContent>
            </Tooltip>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-accent/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-border bg-white"
          >
            <div className="container mx-auto px-4 py-2 flex flex-col gap-1">
              {mobileNavItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                return item.external ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-red-600 bg-red-50 hover:bg-red-100"
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={closeSettings}
      />
    </nav>
  );
}
