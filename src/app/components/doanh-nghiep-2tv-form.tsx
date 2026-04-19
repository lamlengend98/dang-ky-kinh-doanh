import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Building2, CheckCircle2, Plus, Trash2, Users } from 'lucide-react';
import { FormSection, FormField, Input, Select, CurrencyInput, MultiIndustrySelect, AddressSelector } from './form-components';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { IndustryOption, industryOptions } from '../data/industries';
import { convertNumberToVietnameseWords, formatCurrency, stripProvincePrefix, formatDate } from '../utils/number-to-words';
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";
import { useSettings } from '../context/SettingsContext';

interface Member {
  id: string;
  hoTen: string;
  gioiTinh: string;
  ngaySinh: string;
  soDinhDanh: string;
  thuongTru_chiTiet: string;
  thuongTru_xaPhuong: string;
  thuongTru_tinhThanh: string;
  contact_chiTiet: string;
  contact_xaPhuong: string;
  contact_tinhThanh: string;
  soDienThoai: string;
  email: string;
  vonGop: string;
}

export function DoanhNghiep2TVForm() {
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
  });

  const [members, setMembers] = useState<Member[]>([
    {
      id: crypto.randomUUID(),
      hoTen: '',
      gioiTinh: '',
      ngaySinh: '',
      soDinhDanh: '',
      thuongTru_chiTiet: '',
      thuongTru_xaPhuong: '',
      thuongTru_tinhThanh: '',
      contact_chiTiet: '',
      contact_xaPhuong: '',
      contact_tinhThanh: '',
      soDienThoai: '',
      email: '',
      vonGop: '',
    }
  ]);

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

  const handleMemberChange = (id: string, field: keyof Member, value: string) => {
    setMembers(members.map(m => m.id === id ? { ...m, [field]: value } : m));
  };

  const addMember = () => {
    setMembers([...members, {
      id: crypto.randomUUID(),
      hoTen: '',
      gioiTinh: '',
      ngaySinh: '',
      soDinhDanh: '',
      thuongTru_chiTiet: '',
      thuongTru_xaPhuong: '',
      thuongTru_tinhThanh: '',
      contact_chiTiet: '',
      contact_xaPhuong: '',
      contact_tinhThanh: '',
      soDienThoai: '',
      email: '',
      vonGop: '',
    }]);
  };

  const removeMember = (id: string) => {
    if (members.length > 1) {
      setMembers(members.filter(m => m.id !== id));
    }
  };

  const fillSampleData = () => {
    setFormData({
      tenCongTy: 'CÔNG TY TNHH ĐẦU TƯ ABC VIỆT NAM',
      diaChi_chiTiet: '123 Đường Láng',
      diaChi_xaPhuong: 'Phường Láng',
      diaChi_tinhThanh: 'Thành phố Hà Nội',
      website: 'https://abc-invest.vn',
      soDienThoaiCT: '02438889999',
      email_ct: 'office@abc-invest.vn',
      von: '2000000000',
    });

    setMembers([
      {
        id: crypto.randomUUID(),
        hoTen: 'NGUYỄN VĂN A',
        gioiTinh: 'Nam',
        ngaySinh: '1985-05-15',
        soDinhDanh: '001085001234',
        thuongTru_chiTiet: 'Số 1 Phú Diễn',
        thuongTru_xaPhuong: 'Phường Phú Diễn',
        thuongTru_tinhThanh: 'Thành phố Hà Nội',
        contact_chiTiet: 'Số 1 Phú Diễn',
        contact_xaPhuong: 'Phường Phú Diễn',
        contact_tinhThanh: 'Thành phố Hà Nội',
        soDienThoai: '0988666777',
        email: 'a.nguyen@abc.com',
        vonGop: '1600000000',
      },
      {
        id: crypto.randomUUID(),
        hoTen: 'TRẦN THỊ B',
        gioiTinh: 'Nữ',
        ngaySinh: '1990-10-20',
        soDinhDanh: '001190005678',
        thuongTru_chiTiet: '22 Láng',
        thuongTru_xaPhuong: 'Phường Láng',
        thuongTru_tinhThanh: 'Thành phố Hà Nội',
        contact_chiTiet: '22 Láng',
        contact_xaPhuong: 'Phường Láng',
        contact_tinhThanh: 'Thành phố Hà Nội',
        soDienThoai: '0912345555',
        email: 'b.tran@abc.com',
        vonGop: '400000000', // 400M/2B = 20%
      }
    ]);

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
      // NOTE: Template paths for 2 members should be updated once available
      const templates = [
        { name: "01. Điều lệ.docx", path: `${basePath}assets/2 thành viên/01. Điều lệ.docx` },
        { name: "02. Giấy đề nghị.docx", path: `${basePath}assets/2 thành viên/02. Giấy đề nghị.docx` },
        { name: "03. Danh sách thành viên.docx", path: `${basePath}assets/2 thành viên/03. Danh sách thành viên.docx` },
        { name: "04. Giấy ủy quyền.docx", path: `${basePath}assets/2 thành viên/04. Giấy ủy quyền.docx` },
        { name: "05. DSCSH hưởng lợi.docx", path: `${basePath}assets/2 thành viên/05. DSCSH hưởng lợi.docx` },
      ];

      const mainZip = new PizZip();
      const storedUQ = localStorage.getItem('authorized_person_info');
      const uqInfo = storedUQ ? JSON.parse(storedUQ) : {};

      const totalVonGopValue = members.reduce((acc, m) => acc + (parseInt(m.vonGop) || 0), 0);

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


        ho_ten: (members[0].hoTen || '').toUpperCase(),
        gioi_tinh: (members[0].gioiTinh && members[0].gioiTinh.charAt(0).toUpperCase() + members[0].gioiTinh.slice(1)) || '',
        ngay_sinh: formatDate(members[0].ngaySinh) || '',
        so_dinh_danh: members[0].soDinhDanh || '',
        dia_chi_chi_tiet: members[0].thuongTru_chiTiet || '',
        dia_chi_xa_phuong: members[0].thuongTru_xaPhuong || '',
        dia_chi_tinh_thanh: members[0].thuongTru_tinhThanh || '',
        so_dien_thoai: members[0].soDienThoai || '',
        email: members[0].email || '',

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

        thanh_vien: members.map((m, idx) => {
          const tiLeGop = formData.von ? (parseInt(m.vonGop) / parseInt(formData.von)) * 100 : 0;
          return {
            stt: idx + 1,
            ho_ten: m.hoTen.toUpperCase(),
            gioi_tinh: m.gioiTinh,
            ngay_sinh: formatDate(m.ngaySinh),
            so_dinh_danh: m.soDinhDanh,
            dia_chi: `${m.thuongTru_chiTiet}, ${m.thuongTru_xaPhuong}, ${m.thuongTru_tinhThanh}`,
            von_so: formatCurrency(m.vonGop),
            ty_le: String(tiLeGop).includes('.') ? tiLeGop.toFixed(2) : tiLeGop.toString(),
            quyen_chi_phoi: tiLeGop < 25
              ? '\n-Bổ nhiệm, miễn nhiệm hoặc bãi nhiệm đa số hoặc tất cả thành viên hội đồng quản trị, giám đốc hoặc tổng giám đốc của doanh nghiệp\n-Sửa đổi, bổ sung điều lệ của doanh nghiệp\n-Thay đổi cơ cấu tổ chức quản lý công ty\n-Tổ chức lại, giải thể công ty'
              : '',
          };
        }),

        nganh_nghe: selectedIndustries.map((industry, i) => {
          return {
            stt: String(i + 1) + ".",
            ten_nganh: industry?.name,
            ma_nganh: industry?.code,
            nganh_chinh: industry?.code === mainIndustry ? "X" : "",
          };
        }),
      };

      for (const template of templates) {
        try {
          // Normalize paths to avoid Mac NFD vs NFC issues
          const URI = encodeURI(template.path.normalize('NFC'));
          let res = await fetch(URI);

          if (!res.ok) {
            // Fallback to literal path just in case
            res = await fetch(template.path);
          }
          if (!res.ok) {
            // Fallback to NFD
            res = await fetch(encodeURI(template.path.normalize('NFD')));
          }
          if (!res.ok) {
            console.warn(`Template ${template.name} không tải được (HTTP ${res.status}).`);
            continue;
          }

          const arrayBuffer = await res.arrayBuffer();
          const zip = new PizZip(arrayBuffer);
          const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });

          let renderData = data;
          // Áp dụng định dạng ẩn tỷ lệ < 25% ĐỘC QUYỀN cho file 05
          if (template.name.includes("05")) {
            renderData = {
              ...data,
              thanh_vien: data.thanh_vien.map(tv => ({
                ...tv,
                ty_le: parseFloat(tv.ty_le) >= 25 ? tv.ty_le : ''
              }))
            };
          }

          doc.render(renderData);

          const out = doc.getZip().generate({ type: "uint8array" });
          mainZip.file(template.name, out);
        } catch (e: any) {
          console.error(`Lỗi render template ${template.name}:`, e);
          if (e.properties && e.properties.errors) {
            console.error('Lỗi chi tiết từ docxtemplater:', e.properties.errors);
          }
        }
      }

      if (Object.keys(mainZip.files).length > 0) {
        const finalBlob = mainZip.generate({ type: "blob", mimeType: "application/zip" });
        saveAs(finalBlob, `Ho_so_2TV_${formData.tenCongTy.replace(/\s+/g, '_') || 'doanh_nghiep'}.zip`);
      } else {
        alert("Hiện tại chưa có bộ template cho DN 2 thành viên trong hệ thống. Vui lòng liên hệ admin.");
      }

    } catch (error) {
      console.error("Lỗi khi tạo hồ sơ:", error);
    }

    setTimeout(() => setSubmitted(false), 3000);
  };

  if (submitted) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center bg-white p-12 rounded-2xl shadow-xl max-w-md"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Tạo hồ sơ thành công!</h2>
          <p className="text-muted-foreground">
            Hồ sơ đăng ký doanh nghiệp hai thành viên của bạn đã được tạo.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-xl md:text-3xl font-bold mb-2 text-primary">Hồ sơ đăng ký doanh nghiệp hai thành viên trở lên</h1>
          <p className="text-muted-foreground italic">
            Dành cho loại hình Công ty TNHH Hai thành viên trở lên.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Thông tin doanh nghiệp */}
          <FormSection title="Thông tin công ty" icon={<Building2 className="w-5 h-5" />}>
            <FormField label="Tên công ty">
              <Input name="tenCongTy" placeholder="CÔNG TY TNHH..." value={formData.tenCongTy} onChange={(e) => { e.target.value = e.target.value.toUpperCase(); handleChange(e); }} />
            </FormField>

            <AddressSelector label="Trụ sở chính" prefix="diaChi" formData={formData} onChange={handleChange} />

            <div className="grid md:grid-cols-2 gap-5">
              <FormField label="Số điện thoại">
                <Input type="tel" name="soDienThoaiCT" placeholder="09..." value={formData.soDienThoaiCT} onChange={handleChange} />
              </FormField>
              <FormField label="Email doanh nghiệp">
                <Input type="email" name="email_ct" placeholder="email@company.com" value={formData.email_ct} onChange={handleChange} />
              </FormField>
            </div>

            <FormField label="Ngành nghề kinh doanh">
              <MultiIndustrySelect
                selected={selectedIndustries}
                onChange={setSelectedIndustries}
                options={industryOptions}
                mainIndustry={mainIndustry}
                onMainIndustryChange={setMainIndustry}
              />
            </FormField>

            <FormField label="Vốn điều lệ">
              <CurrencyInput placeholder="Vốn điều lệ" value={formData.von} onChange={(val) => setFormData({ ...formData, von: val })} />
              {formData.von && <p className="mt-2 text-sm text-primary italic">Bằng chữ: {convertNumberToVietnameseWords(formData.von)}</p>}
            </FormField>
          </FormSection>

          {/* Thông tin thành viên */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                <h2 className="text-lg md:text-2xl font-bold">Danh sách thành viên góp vốn</h2>
              </div>
              <button
                type="button"
                onClick={addMember}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-sm text-sm md:text-base"
              >
                <Plus className="w-4 h-4" />
                Thêm thành viên
              </button>
            </div>

            <AnimatePresence mode="popLayout">
              {members.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-border relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />

                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2 text-primary">
                      Thành viên #{index + 1}
                    </h3>
                    {members.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeMember(member.id)}
                        className="p-2 text-destructive hover:bg-destructive/10 rounded-full transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <FormField label="Họ và tên">
                      <Input value={member.hoTen} onChange={(e) => handleMemberChange(member.id, 'hoTen', e.target.value.toUpperCase())} placeholder="NGUYỄN VĂN A" />
                    </FormField>
                    <FormField label="Giới tính">
                      <Select
                        value={member.gioiTinh}
                        onChange={(e) => handleMemberChange(member.id, 'gioiTinh', e.target.value)}
                        options={[{ value: 'Nam', label: 'Nam' }, { value: 'Nữ', label: 'Nữ' }]}
                        placeholder="Chọn giới tính"
                      />
                    </FormField>
                    <FormField label="Ngày sinh">
                      <Input type="date" value={member.ngaySinh} onChange={(e) => handleMemberChange(member.id, 'ngaySinh', e.target.value)} />
                    </FormField>
                    <FormField label="Số định danh (CCCD)">
                      <Input value={member.soDinhDanh} onChange={(e) => handleMemberChange(member.id, 'soDinhDanh', e.target.value)} placeholder="0..." />
                    </FormField>
                  </div>

                  <div className="space-y-5">
                    <AddressSelector
                      label="Địa chỉ thường trú"
                      prefix="thuongTru"
                      formData={member}
                      onChange={(e: any) => handleMemberChange(member.id, e.target.name as keyof Member, e.target.value)}
                    />
                    <AddressSelector
                      label="Địa chỉ liên lạc"
                      prefix="contact"
                      formData={member}
                      onChange={(e: any) => handleMemberChange(member.id, e.target.name as keyof Member, e.target.value)}
                    />
                  </div>

                  <div className="mt-6 pt-6 border-t border-dashed border-border">
                    <FormField label="Vốn góp">
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <div className="flex-1">
                          <CurrencyInput
                            value={member.vonGop}
                            onChange={(val) => handleMemberChange(member.id, 'vonGop', val)}
                            placeholder="Nhập số vốn góp"
                          />
                        </div>
                        <div className="whitespace-nowrap bg-accent/50 px-4 py-2.5 rounded-lg border border-border text-center sm:text-left">
                          Tỷ lệ: <span className="font-bold text-primary">
                            {formData.von ? ((parseInt(member.vonGop) / parseInt(formData.von)) * 100).toFixed(2) : 0}%
                          </span>
                        </div>
                      </div>
                    </FormField>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Footer UI */}
          <div className="flex flex-col items-center gap-8 pt-8">

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
                    von: '',
                  });
                  setMembers([{
                    id: crypto.randomUUID(),
                    hoTen: '', gioiTinh: '', ngaySinh: '', soDinhDanh: '',
                    thuongTru_chiTiet: '', thuongTru_xaPhuong: '', thuongTru_tinhThanh: '',
                    contact_chiTiet: '', contact_xaPhuong: '', contact_tinhThanh: '',
                    soDienThoai: '', email: '', vonGop: '',
                  }]);
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
                    className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all shadow-lg flex items-center gap-3 font-semibold text-lg"
                  >
                    <CheckCircle2 className="w-6 h-6" />
                    Tạo hồ sơ DN 2TV
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={8}>
                  <p>Hệ thống sẽ tổng hợp danh sách thành viên và điền vào các mẫu hồ sơ.</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
