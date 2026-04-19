import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { User, Building2, CheckCircle2 } from 'lucide-react';
import { FormSection, FormField, Input, Select, CurrencyInput, MultiIndustrySelect, AddressSelector } from './form-components';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { IndustryOption, industryOptions } from '../data/industries';
import { convertNumberToVietnameseWords, formatCurrency, stripProvincePrefix, formatDate } from '../utils/number-to-words';
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";
import { useSettings } from '../context/SettingsContext';

export function DoanhNghiepForm() {
  const [formData, setFormData] = useState({
    // Thông tin doanh nghiệp
    tenCongTy: '',
    diaChi_chiTiet: '',
    diaChi_xaPhuong: '',
    diaChi_tinhThanh: '',
    website: '',
    soDienThoaiCT: '',
    email_ct: '',
    von: '',

    // Thông tin chủ doanh nghiệp
    hoTen: '',
    gioiTinh: '',
    ngaySinh: '',
    soDinhDanh: '',
    thuongTru_chiTiet: '',
    thuongTru_xaPhuong: '',
    thuongTru_tinhThanh: '',
    soDienThoai: '',
    email: '',
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
  };

  const fillSampleData = () => {
    setFormData({
      tenCongTy: 'CÔNG TY TNHH MTV CÔNG NGHỆ ABC',
      diaChi_chiTiet: '123 Đường Láng',
      diaChi_xaPhuong: 'Phường Láng',
      diaChi_tinhThanh: 'Thành phố Hà Nội',
      website: 'https://abc.com.vn',
      soDienThoaiCT: '02431234567',
      email_ct: 'contact@abc.com.vn',
      von: '1000000000',
      hoTen: 'NGUYỄN VĂN A',
      gioiTinh: 'Nam',
      ngaySinh: '1990-01-01',
      soDinhDanh: '012345678901',
      thuongTru_chiTiet: 'Số 1 Phú Diễn',
      thuongTru_xaPhuong: 'Phường Phú Diễn',
      thuongTru_tinhThanh: 'Thành phố Hà Nội',
      soDienThoai: '0912345678',
      email: 'a.nguyen@gmail.com',
    });

    const sampleIndustry = industryOptions.find(opt => opt.classes?.some(c => c.code === '6201'))
      ?.classes?.find(c => c.code === '6201');

    if (sampleIndustry) {
      setSelectedIndustries([sampleIndustry]);
      setMainIndustry('6201');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isConfigured()) {
      openSettings();
      return;
    }

    setSubmitted(true);

    try {
      // @ts-ignore - Vite specific env variable
      const basePath = (import.meta as any).env.BASE_URL || '/';
      const templates = [
        { name: "01. Giấy đề nghị.docx", path: `${basePath}assets/1 thành viên/01. Giấy đề nghị.docx` },
        { name: "02. Điều lệ.docx", path: `${basePath}assets/1 thành viên/02. Điều lệ.docx` },
        { name: "03. ủy quyền.docx", path: `${basePath}assets/1 thành viên/03. ủy quyền.docx` },
        { name: "04. Danh sách hưởng lợi.docx", path: `${basePath}assets/1 thành viên/04. DSCSH hưởng lợi.docx` },
      ];

      const mainZip = new PizZip();

      // Load authorized person info
      const storedUQ = localStorage.getItem('authorized_person_info');
      const uqInfo = storedUQ ? JSON.parse(storedUQ) : {};

      const data = {
        ten_cong_ty: (formData.tenCongTy || '').toUpperCase(),
        website: formData.website || '',
        so_dien_thoai_ct: formData.soDienThoaiCT || '',
        email_ct: formData.email_ct || '',
        von: formData.von || '',
        von_so: formatCurrency(formData.von),
        von_chu: convertNumberToVietnameseWords(formData.von),
        tru_so_chi_tiet: formData.diaChi_chiTiet || '',
        tru_so_xa_phuong: formData.diaChi_xaPhuong || '',
        tinh_thanh_tru_so: formData.diaChi_tinhThanh || '',
        tinh_thanh_ky: stripProvincePrefix(formData.diaChi_tinhThanh),
        tinh_ky: stripProvincePrefix(formData.diaChi_tinhThanh),
        ngay_lam_don: String(new Date().getDate()).padStart(2, '0'),
        thang_lam_don: String(new Date().getMonth() + 1).padStart(2, '0'),
        nam_lam_don: String(new Date().getFullYear()),
        ngay_ky: `ngày ${String(new Date().getDate()).padStart(2, '0')} tháng ${String(new Date().getMonth() + 1).padStart(2, '0')} năm ${String(new Date().getFullYear())}`,
        ho_ten: (formData.hoTen || '').toUpperCase(),
        gioi_tinh: (formData.gioiTinh && formData.gioiTinh.charAt(0).toUpperCase() + formData.gioiTinh.slice(1)) || '',
        ngay_sinh: formatDate(formData.ngaySinh) || '',
        so_dinh_danh: formData.soDinhDanh || '',
        dia_chi_chi_tiet: formData.thuongTru_chiTiet || '',
        dia_chi_xa_phuong: formData.thuongTru_xaPhuong || '',
        dia_chi_tinh_thanh: formData.thuongTru_tinhThanh || '',
        so_dien_thoai: formData.soDienThoai || '',
        email: formData.email || '',

        // Authorized person info
        ho_ten_duoc_uy_quyen: uqInfo.hoTen || '',
        ngay_sinh_duoc_uy_quyen: formatDate(uqInfo.ngaySinh) || '',
        gioi_tinh_duoc_uy_quyen: uqInfo.gioiTinh || '',
        so_dinh_danh_duoc_uy_quyen: uqInfo.soDinhDanh || '',
        dia_chi_duoc_uy_quyen: uqInfo.contact_chiTiet || '',
        xa_phuong_duoc_uy_quyen: uqInfo.contact_xaPhuong || '',
        tinh_thanh_duoc_uy_quyen: uqInfo.contact_tinhThanh || '',
        sdt_duoc_uy_quyen: uqInfo.sdt || '',
        email_duoc_uy_quyen: uqInfo.email || '',

        nganh_nghe: selectedIndustries.map((industry, i) => {
          return {
            stt: String(i + 1) + ".",
            ten_nganh: industry?.name,
            ma_nganh: industry?.code,
            nganh_chinh: industry?.code === mainIndustry ? "X" : "",
          };
        }),
      };

      console.log("nganh_nghe data:", JSON.stringify(data.nganh_nghe, null, 2));

      for (const template of templates) {
        const res = await fetch(template.path);
        if (!res.ok) throw new Error(`Không thể tải template: ${template.name}`);
        const arrayBuffer = await res.arrayBuffer();

        const zip = new PizZip(arrayBuffer);
        const doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
        });

        doc.render(data);

        const out = doc.getZip().generate({
          type: "uint8array"
        });

        mainZip.file(template.name, out);
      }

      const finalBlob = mainZip.generate({
        type: "blob",
        mimeType: "application/zip",
      });

      saveAs(finalBlob, `Ho_so_dang_ky_${formData.tenCongTy.replace(/\s+/g, '_') || 'doanh_nghiep'}.zip`);

    } catch (error) {
      console.error("Lỗi khi tạo hồ sơ:", error);
    }

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

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
            Hồ sơ đăng ký doanh nghiệp một thành viên của bạn đã được tạo. Bạn có thể kiểm tra tệp tải về.
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
          <h1 className="text-xl md:text-3xl font-bold mb-2">Hồ sơ đăng ký doanh nghiệp một thành viên</h1>
          <p className="text-muted-foreground">
            Vui lòng điền thông tin bên dưới nếu có.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Thông tin doanh nghiệp */}
          <FormSection title="Thông tin doanh nghiệp" icon={<Building2 className="w-5 h-5" />}>
            <FormField label="Tên công ty">
              <Input
                name="tenCongTy"
                placeholder="CÔNG TY TNHH MTV..."
                value={formData.tenCongTy}
                onChange={(e) => { e.target.value = e.target.value.toUpperCase(); handleChange(e); }}

              />
            </FormField>

            <AddressSelector
              label="Địa chỉ trụ sở"
              prefix="diaChi"
              formData={formData}
              onChange={handleChange}
              tooltip="Chọn Tỉnh/Thành phố trước để tải danh mục Xã/Phường tương ứng."
            />

            <div className="grid md:grid-cols-2 gap-5">
              <FormField label="Website" hint="Không bắt buộc">
                <Input
                  type="url"
                  name="website"
                  placeholder="https://example.com"
                  value={formData.website}
                  onChange={handleChange}
                />
              </FormField>

              <FormField label="Số điện thoại">
                <Input
                  type="tel"
                  name="soDienThoaiCT"
                  placeholder="0912345678"
                  value={formData.soDienThoaiCT}
                  onChange={handleChange}

                />
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
            </div>

            <FormField label="Ngành nghề kinh doanh">
              <MultiIndustrySelect
                selected={selectedIndustries}
                onChange={setSelectedIndustries}
                options={industryOptions}
                mainIndustry={mainIndustry}
                onMainIndustryChange={setMainIndustry}
                tooltip="Chọn các ngành nghề kinh doanh. Đừng quên nhấn vào nhãn ngành để chọn làm ngành chính."
              />
            </FormField>

            <FormField label="Vốn" hint="Không bắt buộc">
              <CurrencyInput
                placeholder="1.000.000.000"
                value={formData.von}
                onChange={(value) => setFormData({ ...formData, von: value })}
              />
              {formData.von && (
                <p className="mt-2 text-sm text-primary font-medium italic">
                  Bằng chữ: {convertNumberToVietnameseWords(formData.von)}
                </p>
              )}
            </FormField>
          </FormSection>

          {/* Thông tin chủ doanh nghiệp */}
          <FormSection title="Thông tin chủ doanh nghiệp" icon={<User className="w-5 h-5" />}>
            <div className="grid md:grid-cols-2 gap-5">
              <FormField label="Họ và tên">
                <Input
                  name="hoTen"
                  placeholder="NGUYỄN VĂN A"
                  value={formData.hoTen}
                  onChange={(e) => { e.target.value = e.target.value.toUpperCase(); handleChange(e); }}

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
            className="flex flex-col items-center gap-6"
          >


            <div className="flex justify-end gap-4 w-full">
              <button
                type="button"
                className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/5 transition-colors"
                onClick={fillSampleData}
              >
                Nhập dữ liệu mẫu
              </button>
              <button
                type="button"
                className="px-6 py-3 rounded-lg border border-border hover:bg-accent transition-colors"
                onClick={() => {
                  setFormData({
                    tenCongTy: '',
                    diaChi_chiTiet: '', diaChi_xaPhuong: '', diaChi_tinhThanh: '',
                    website: '', soDienThoaiCT: '', email_ct: '',
                    von: '', hoTen: '', gioiTinh: '',
                    ngaySinh: '', soDinhDanh: '',
                    thuongTru_chiTiet: '', thuongTru_xaPhuong: '', thuongTru_tinhThanh: '',
                    soDienThoai: '', email: '',
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
                  <p>Hệ thống sẽ điền dữ liệu vào bộ hồ sơ (Giấy đề nghị, Điều lệ...) và tải về dưới dạng ZIP.</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </motion.div>
        </form>
      </div>
    </div>
  );
}