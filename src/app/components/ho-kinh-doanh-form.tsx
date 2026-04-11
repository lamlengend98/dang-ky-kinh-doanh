import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { User, Building2, Phone, CheckCircle2 } from 'lucide-react';
import { FormSection, FormField, Input, Select, Textarea, CurrencyInput, MultiIndustrySelect, AddressSelector } from './form-components';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { IndustryOption, industryOptions } from '../data/industries';
import { convertNumberToVietnameseWords, formatCurrency, stripProvincePrefix, formatDate } from '../utils/number-to-words';
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";
import { useSettings } from '../context/SettingsContext';

export function HoKinhDoanhForm() {
  const [formData, setFormData] = useState({
    // Thông tin cá nhân
    hoTen: '',
    gioiTinh: '',
    ngaySinh: '',
    soDinhDanh: '',
    thuongTru_chiTiet: '',
    thuongTru_xaPhuong: '',
    thuongTru_tinhThanh: '',
    soDienThoai: '',
    email: '',

    // Thông tin hộ kinh doanh
    tenHoKinhDoanh: '',
    kinhDoanh_chiTiet: '',
    kinhDoanh_xaPhuong: '',
    kinhDoanh_tinhThanh: '',
    von: '',
    email_ct: '',
    nganhNghe: '',
  });

  const [selectedIndustries, setSelectedIndustries] = useState<IndustryOption[]>([]);
  const [mainIndustry, setMainIndustry] = useState<string>('');

  const [submitted, setSubmitted] = useState(false);
  const { openSettings, isConfigured } = useSettings();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleIndustryChange = (selected: IndustryOption[]) => {
    setSelectedIndustries(selected);
    setFormData({
      ...formData,
      nganhNghe: selected.map(s => s.name).join(', '),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isConfigured()) {
      openSettings();
      return;
    }

    setSubmitted(true);
    console.log('Form submitted:', formData);

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
    // Load authorized person info
    const storedUQ = localStorage.getItem('authorized_person_info');
    const uqInfo = storedUQ ? JSON.parse(storedUQ) : {};

    generateDocument({
      ho_ten: formData.hoTen || '',
      tuoi: formatDate(formData.ngaySinh) || '',
      so_dien_thoai_ct: formData.soDienThoai || '',
      dia_chi_chi_tiet: formData.thuongTru_chiTiet || '',
      dia_chi_xa_phuong: formData.thuongTru_xaPhuong || '',
      dia_chi_tinh_thanh: formData.thuongTru_tinhThanh || '',
      email: formData.email || '',
      email_ct: formData.email_ct || '',
      tru_so_chi_tiet: formData.kinhDoanh_chiTiet || '',
      tru_so_xa_phuong: formData.kinhDoanh_xaPhuong || '',
      tinh_thanh_tru_so: formData.kinhDoanh_tinhThanh || '',
      tinh_thanh_ky: stripProvincePrefix(formData.kinhDoanh_tinhThanh),
      tinh_ky: stripProvincePrefix(formData.kinhDoanh_tinhThanh),
      ngay_lam_don: String(new Date().getDate()).padStart(2, '0'),
      thang_lam_don: String(new Date().getMonth() + 1).padStart(2, '0'),
      nam_lam_don: String(new Date().getFullYear()),
      ngay_ky: `ngày ${String(new Date().getDate()).padStart(2, '0')} tháng ${String(new Date().getMonth() + 1).padStart(2, '0')} năm ${String(new Date().getFullYear())}`,
      von_so: formatCurrency(formData.von),
      von_chu: convertNumberToVietnameseWords(formData.von),

      // Authorized person info
      ho_ten_duoc_uy_quyen: uqInfo.hoTen || '',
      ngay_sinh_duoc_uy_quyen: formatDate(uqInfo.ngaySinh) || '',
      gioi_tinh_duoc_uy_quyen: (uqInfo.gioiTinh && uqInfo.gioiTinh.charAt(0).toUpperCase() + uqInfo.gioiTinh.slice(1)) || '',
      so_dinh_danh_duoc_uy_quyen: uqInfo.soDinhDanh || '',
      dia_chi_duoc_uy_quyen: uqInfo.contact_chiTiet || '',
      xa_phuong_duoc_uy_quyen: uqInfo.contact_xaPhuong || '',
      tinh_thanh_duoc_uy_quyen: uqInfo.contact_tinhThanh || '',
      sdt_duoc_uy_quyen: uqInfo.sdt || '',
      email_duoc_uy_quyen: uqInfo.email || '',
    });
  };


  const generateDocument = async (data: Record<string, string>) => {
    // Load template từ public/
    const res = await fetch("/assets/template.docx");
    const arrayBuffer = await res.arrayBuffer();

    const zip = new PizZip(arrayBuffer);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    // Fill data vào template
    doc.render(data);

    const blob = doc.getZip().generate({
      type: "blob",
      mimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });

    saveAs(blob, "output.docx");
  }

  if (submitted) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center bg-white p-12 rounded-2xl shadow-xl max-w-md"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Tạo hồ sơ thành công!</h2>
          <p className="text-muted-foreground">
            Hồ sơ đăng ký hộ kinh doanh của bạn đã được tạo. Bạn có thể kiểm tra tệp tải về.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Hồ sơ đăng ký hộ kinh doanh</h1>
          <p className="text-muted-foreground">
            Vui lòng điền thông tin bên dưới nếu có.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Thông tin hộ kinh doanh */}
          <FormSection title="Thông tin hộ kinh doanh" icon={<Building2 className="w-5 h-5" />}>
            <FormField label="Tên hộ kinh doanh">
              <Input
                name="tenHoKinhDoanh"
                placeholder="Hộ kinh doanh Nguyễn Văn A"
                value={formData.tenHoKinhDoanh}
                onChange={handleChange}

              />
            </FormField>

            <AddressSelector
              label="Địa chỉ kinh doanh"
              prefix="kinhDoanh"
              formData={formData}
              onChange={handleChange}
              tooltip="Chọn Tỉnh/Thành phố trước để tải danh mục Xã/Phường tương ứng."
            />

            <FormField label="Ngành nghề kinh doanh">
              <MultiIndustrySelect
                selected={selectedIndustries}
                onChange={setSelectedIndustries}
                options={industryOptions}
                mainIndustry={mainIndustry}
                onMainIndustryChange={setMainIndustry}

              />
            </FormField>

            <FormField label="Vốn">
              <CurrencyInput
                placeholder="10.000.000"
                value={formData.von}
                onChange={(value) => setFormData({ ...formData, von: value })}

              />
              {formData.von && (
                <p className="mt-2 text-sm text-primary font-medium italic">
                  Bằng chữ: {convertNumberToVietnameseWords(formData.von)}
                </p>
              )}
            </FormField>
            <FormField label="Email">
              <Input
                type="email"
                name="email_ct"
                placeholder="email@example.com"
                value={formData.email_ct}
                onChange={handleChange}

              />
            </FormField>
          </FormSection>

          {/* Thông tin cá nhân */}
          <FormSection title="Thông tin cá nhân" icon={<User className="w-5 h-5" />}>
            <div className="grid md:grid-cols-2 gap-5">
              <FormField label="Họ và tên">
                <Input
                  name="hoTen"
                  placeholder="Nguyễn Văn A"
                  value={formData.hoTen}
                  onChange={handleChange}

                />
              </FormField>

              <FormField label="Giới tính">
                <Select
                  name="gioiTinh"
                  value={formData.gioiTinh}
                  onChange={handleChange}
                  placeholder="Chọn giới tính"
                  options={[
                    { value: 'Nam', label: 'Nam' },
                    { value: 'Nữ', label: 'Nữ' },
                    { value: 'Khác', label: 'Khác' },
                  ]}

                />
              </FormField>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <FormField label="Ngày sinh">
                <Input
                  type="date"
                  name="ngaySinh"
                  value={formData.ngaySinh}
                  onChange={handleChange}

                />
              </FormField>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <FormField label="Số định danh">
                <Input
                  name="soDinhDanh"
                  placeholder="001234567890"
                  value={formData.soDinhDanh}
                  onChange={handleChange}

                />
              </FormField>

              <FormField label="Số điện thoại">
                <Input
                  type="tel"
                  name="soDienThoai"
                  placeholder="0912345678"
                  value={formData.soDienThoai}
                  onChange={handleChange}

                />
              </FormField>

              <FormField label="Email">
                <Input
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}

                />
              </FormField>
            </div>

            <AddressSelector
              label="Địa chỉ thường trú"
              prefix="thuongTru"
              formData={formData}
              onChange={handleChange}

            />
          </FormSection>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-end gap-4"
          >
            <button
              type="button"
              className="px-6 py-3 rounded-lg border border-border hover:bg-accent transition-colors"
              onClick={() => {
                setFormData({
                  hoTen: '', gioiTinh: '', ngaySinh: '',
                  soDinhDanh: '',
                  thuongTru_chiTiet: '', thuongTru_xaPhuong: '', thuongTru_tinhThanh: '',
                  soDienThoai: '', email: '', tenHoKinhDoanh: '',
                  kinhDoanh_chiTiet: '', kinhDoanh_xaPhuong: '', kinhDoanh_tinhThanh: '',
                  von: '', email_ct: '',
                  nganhNghe: '',
                });
                setSelectedIndustries([]);
                setMainIndustry('');
              }}
            >
              Đặt lại
            </button>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity shadow-md flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Tạo hồ sơ
                </button>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={8}>
                <p>Hệ thống sẽ điền dữ liệu vào mẫu đăng ký hộ kinh doanh và tải về dưới dạng tệp Word.</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        </form>
      </div>
    </div>
  );
}