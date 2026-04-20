import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Save, UserCheck, ShieldCheck, MapPin, Phone, Mail, Wand2 } from 'lucide-react';
import { FormField, Input, Select, AddressSelector } from './form-components';

interface AuthorizedPersonInfo {
  hoTen: string;
  ngaySinh: string;
  gioiTinh: string;
  soDinhDanh: string;
  // Contact Address
  contact_chiTiet: string;
  contact_xaPhuong: string;
  contact_tinhThanh: string;
  sdt: string;
  email: string;
}

const INITIAL_STATE: AuthorizedPersonInfo = {
  hoTen: '',
  ngaySinh: '',
  gioiTinh: '',
  soDinhDanh: '',
  contact_chiTiet: '',
  contact_xaPhuong: '',
  contact_tinhThanh: '',
  sdt: '',
  email: '',
};

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const [info, setInfo] = useState<AuthorizedPersonInfo>(INITIAL_STATE);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('authorized_person_info');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Migration/Safety check for new fields
        setInfo({
          ...INITIAL_STATE,
          ...parsed,
        });
      } catch (e) {
        console.error('Error parsing authorized person info:', e);
      }
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    localStorage.setItem('authorized_person_info', JSON.stringify(info));
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1500);
  };

  const handleLoadSampleData = () => {
    setInfo({
      hoTen: 'NGUYỄN VĂN MẪU',
      ngaySinh: '1990-01-01',
      gioiTinh: 'Nam',
      soDinhDanh: '001090123456',
      contact_chiTiet: 'Số 1, Phố Tràng Tiền',
      contact_xaPhuong: 'Phường Giảng Võ',
      contact_tinhThanh: 'Thành phố Hà Nội',
      sdt: '0912345678',
      email: 'nguyenvanmau@example.com',
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-white sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Thiết lập</h2>
                  <p className="text-sm text-muted-foreground text-sky-600 font-medium italic">Thông tin này sẽ được tự động điền vào các mẫu ủy quyền</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-accent rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto space-y-8">
              {/* Personal Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-semibold border-b border-primary/10 pb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <h4>Thông tin cá nhân</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField label="Họ và tên">
                    <Input name="hoTen" value={info.hoTen} onChange={(e) => { e.target.value = e.target.value.toUpperCase(); handleChange(e); }} placeholder="NGUYỄN VĂN A" />
                  </FormField>
                  <FormField label="Sinh ngày">
                    <Input type="date" name="ngaySinh" value={info.ngaySinh} onChange={handleChange} />
                  </FormField>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField label="Giới tính">
                    <Select
                      name="gioiTinh"
                      value={info.gioiTinh}
                      onChange={handleChange}
                      placeholder="Chọn giới tính"
                      options={[
                        { value: 'Nam', label: 'Nam' },
                        { value: 'Nữ', label: 'Nữ' },
                      ]}
                    />
                  </FormField>
                  <FormField label="Số định danh cá nhân">
                    <Input name="soDinhDanh" value={info.soDinhDanh} onChange={handleChange} placeholder="001234567890" />
                  </FormField>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-primary font-semibold border-b border-primary/10 pb-2">
                  <MapPin className="w-4 h-4" />
                  <h4>Địa chỉ liên lạc</h4>
                </div>
                <AddressSelector
                  label="Địa chỉ chi tiết"
                  prefix="contact"
                  formData={info}
                  onChange={handleChange}
                />
              </div>

              {/* Contact */}
              <div className="space-y-4 pb-4">
                <div className="flex items-center gap-2 text-primary font-semibold border-b border-primary/10 pb-2">
                  <Phone className="w-4 h-4" />
                  <h4>Thông tin liên hệ</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField label="Số điện thoại">
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        name="sdt"
                        value={info.sdt}
                        onChange={handleChange}
                        placeholder="0912345678"
                        className="w-full pl-10 pr-4 py-2.5 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>
                  </FormField>
                  <FormField label="Email">
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={info.email}
                        onChange={handleChange}
                        placeholder="example@gmail.com"
                        className="w-full pl-10 pr-4 py-2.5 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>
                  </FormField>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-border bg-gray-50 flex items-center justify-between gap-3">
              {import.meta.env.DEV && (
                <button
                  onClick={handleLoadSampleData}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-xl transition-colors"
                >
                  <Wand2 className="w-4 h-4" />
                  Nhập dữ liệu mẫu
                </button>
              )}
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Hủy bỏ
                </button>
                <button
                  onClick={handleSave}
                  disabled={saved}
                  className={`flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-semibold shadow-sm transition-all ${saved
                    ? 'bg-green-500 text-white'
                    : 'bg-primary text-primary-foreground hover:opacity-90'
                    }`}
                >
                  {saved ? (
                    <>
                      <UserCheck className="w-4 h-4" />
                      Đã lưu thành công
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Lưu thông tin
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
