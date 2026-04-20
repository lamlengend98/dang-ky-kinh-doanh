import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, CheckCircle2, Plus, Trash2, Users } from 'lucide-react';
import { FormSection, FormField, Input, Select, CurrencyInput, MultiIndustrySelect, AddressSelector } from './form-components';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { IndustryOption, industryOptions } from '../data/industries';
import { convertNumberToVietnameseWords, formatCurrency, stripProvincePrefix, formatDate } from '../utils/number-to-words';
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";
import { useSettings } from '../context/SettingsContext';

interface Shareholder {
  id: string;
  hoTen: string;
  gioiTinh: string;
  ngaySinh: string;
  soDinhDanh: string;
  contact_chiTiet: string;
  contact_xaPhuong: string;
  contact_tinhThanh: string;
  soDienThoai: string;
  email: string;
  vonGop: string;
  tyLeGop: string;
  soCoPhan: string;
}

export function CongTyCoPhanForm() {
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
    tongSoCoPhan: '',
    menhGia: '10000',
  });

  const [shareholders, setShareholders] = useState<Shareholder[]>([
    {
      id: crypto.randomUUID(),
      hoTen: '',
      gioiTinh: '',
      ngaySinh: '',
      soDinhDanh: '',
      contact_chiTiet: '',
      contact_xaPhuong: '',
      contact_tinhThanh: '',
      soDienThoai: '',
      email: '',
      vonGop: '',
      tyLeGop: '',
      soCoPhan: '',
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

  const handleCompanyVonChange = (val: string) => {
    const vonNum = parseInt(val) || 0;
    const sharesNum = parseInt(formData.tongSoCoPhan) || 0;

    let newMenhGia = formData.menhGia;
    if (sharesNum > 0) {
      newMenhGia = Math.floor(vonNum / sharesNum).toString();
    }

    setFormData(prev => ({
      ...prev,
      von: val,
      menhGia: newMenhGia
    }));

    // Update shareholders vonGop based on their existing percentages
    setShareholders(prev => prev.map(s => {
      const percent = parseFloat(s.tyLeGop) || 0;
      if (percent > 0) {
        const newVon = Math.round((percent / 100) * vonNum).toString();
        // Keep shares count the same if possible, or recalculate based on new von and menhGia
        const mGia = parseInt(newMenhGia) || 10000;
        const newShares = Math.floor(parseInt(newVon) / mGia).toString();
        return { ...s, vonGop: newVon, soCoPhan: newShares };
      }
      return s;
    }));
  };

  const handleCompanySharesChange = (val: string) => {
    const sharesNum = parseInt(val) || 0;
    const vonNum = parseInt(formData.von) || 0;

    let newMenhGia = formData.menhGia;
    if (sharesNum > 0) {
      newMenhGia = Math.floor(vonNum / sharesNum).toString();
    }

    setFormData(prev => ({
      ...prev,
      tongSoCoPhan: val,
      menhGia: newMenhGia
    }));

    // Update shareholders soCoPhan based on their existing percentages of total shares
    setShareholders(prev => prev.map(s => {
      const percent = parseFloat(s.tyLeGop) || 0;
      if (percent > 0) {
        const newShares = Math.floor((percent / 100) * sharesNum).toString();
        // vonGop stays same as it's linked to total von
        return { ...s, soCoPhan: newShares };
      }
      return s;
    }));
  };

  const handleCompanyMenhGiaChange = (val: string) => {
    const menhGiaNum = parseInt(val) || 0;
    const vonNum = parseInt(formData.von) || 0;

    if (menhGiaNum > 0) {
      const soCoPhan = Math.floor(vonNum / menhGiaNum).toString();
      setFormData(prev => ({
        ...prev,
        menhGia: val,
        tongSoCoPhan: soCoPhan
      }));

      // Update shareholders shares based on new menhGia
      setShareholders(prev => prev.map(s => {
        const vGop = parseInt(s.vonGop) || 0;
        const newShares = Math.floor(vGop / menhGiaNum).toString();
        return { ...s, soCoPhan: newShares };
      }));
    } else {
      setFormData(prev => ({ ...prev, menhGia: val }));
    }
  };

  const handleShareholderChange = (id: string, field: keyof Shareholder, value: string) => {
    setShareholders(shareholders.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const handleShareholderShareChange = (id: string, type: 'von' | 'percent' | 'shares', value: string) => {
    const totalVon = parseInt(formData.von) || 0;

    setShareholders(prev => prev.map(s => {
      if (s.id !== id) return s;

      let newVon = s.vonGop;
      let newPercent = s.tyLeGop;
      let newShares = s.soCoPhan;

      if (type === 'von') {
        newVon = value;
        const valNum = parseInt(value) || 0;
        newPercent = totalVon > 0 ? ((valNum / totalVon) * 100).toFixed(2) : '0';
        newShares = Math.floor(valNum / (parseInt(formData.menhGia) || 10000)).toString();
      } else if (type === 'percent') {
        newPercent = value;
        const valNum = parseFloat(value) || 0;
        const calculatedVon = Math.round((valNum / 100) * totalVon);
        newVon = calculatedVon.toString();
        newShares = Math.floor(calculatedVon / (parseInt(formData.menhGia) || 10000)).toString();
      } else if (type === 'shares') {
        newShares = value;
        const valNum = parseInt(value) || 0;
        const calculatedVon = valNum * (parseInt(formData.menhGia) || 10000);
        newVon = calculatedVon.toString();
        newPercent = totalVon > 0 ? ((calculatedVon / totalVon) * 100).toFixed(2) : '0';
      }

      return { ...s, vonGop: newVon, tyLeGop: newPercent, soCoPhan: newShares };
    }));
  };

  const addShareholder = () => {
    setShareholders([...shareholders, {
      id: crypto.randomUUID(),
      hoTen: '',
      gioiTinh: '',
      ngaySinh: '',
      soDinhDanh: '',
      contact_chiTiet: '',
      contact_xaPhuong: '',
      contact_tinhThanh: '',
      soDienThoai: '',
      email: '',
      vonGop: '',
      tyLeGop: '',
      soCoPhan: '',
    }]);
  };

  const removeShareholder = (id: string) => {
    if (shareholders.length > 1) {
      setShareholders(shareholders.filter(s => s.id !== id));
    }
  };

  const fillSampleData = () => {
    setFormData({
      tenCongTy: 'CÔNG TY CỔ PHẦN CÔNG NGHỆ XYZ',
      diaChi_chiTiet: '456 Đường Giải Phóng',
      diaChi_xaPhuong: 'Phường Phương Liệt',
      diaChi_tinhThanh: 'Thành phố Hà Nội',
      website: 'https://xyz-tech.vn',
      soDienThoaiCT: '02431234567',
      email_ct: 'contact@xyz-tech.vn',
      von: '5000000000',
      tongSoCoPhan: '500000',
      menhGia: '10000',
    });

    setShareholders([
      {
        id: crypto.randomUUID(),
        hoTen: 'PHẠM VĂN C',
        gioiTinh: 'Nam',
        ngaySinh: '1980-01-01',
        soDinhDanh: '001080001234',
        contact_chiTiet: 'Số 10 Lý Thường Kiệt',
        contact_xaPhuong: 'Phường Phan Chu Trinh',
        contact_tinhThanh: 'Thành phố Hà Nội',
        soDienThoai: '0901234567',
        email: 'c.pham@xyz.com',
        vonGop: '2500000000',
        tyLeGop: '50',
        soCoPhan: '250000',
      },
      {
        id: crypto.randomUUID(),
        hoTen: 'LÊ THỊ D',
        gioiTinh: 'Nữ',
        ngaySinh: '1988-12-12',
        soDinhDanh: '001188005678',
        contact_chiTiet: '20 Hàng Bài',
        contact_xaPhuong: 'Phường Hàng Bài',
        contact_tinhThanh: 'Thành phố Hà Nội',
        soDienThoai: '0912348888',
        email: 'd.le@xyz.com',
        vonGop: '1500000000',
        tyLeGop: '30',
        soCoPhan: '150000',
      },
      {
        id: crypto.randomUUID(),
        hoTen: 'HOÀNG VĂN E',
        gioiTinh: 'Nam',
        ngaySinh: '1992-06-15',
        soDinhDanh: '001092009012',
        contact_chiTiet: '50 Trần Hưng Đạo',
        contact_xaPhuong: 'Phường Trần Hưng Đạo',
        contact_tinhThanh: 'Thành phố Hà Nội',
        soDienThoai: '0988777999',
        email: 'e.hoang@xyz.com',
        vonGop: '1000000000',
        tyLeGop: '20',
        soCoPhan: '100000',
      }
    ]);

    const sampleIndustry = industryOptions.find(opt => opt.classes?.some(c => c.code === '6202'))
      ?.classes?.find(c => c.code === '6202');

    if (sampleIndustry) {
      setSelectedIndustries([sampleIndustry]);
      setMainIndustry('6202');
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
      // NOTE: Template paths for Co Phan are placeholders for now
      const templates = [
        { name: "01. Điều lệ.docx", path: `${basePath}assets/cổ phần/01. Điều lệ.docx` },
        { name: "02. Giấy đề nghị.docx", path: `${basePath}assets/cổ phần/02. Giấy đề nghị.docx` },
        { name: "03. Danh sách cổ đông.docx", path: `${basePath}assets/cổ phần/03. Danh sách CĐSL.docx` },
        { name: "04. Giấy ủy quyền.docx", path: `${basePath}assets/cổ phần/04. Giấy ủy quyền.docx` },
        { name: "05. DSCSH hưởng lợi.docx", path: `${basePath}assets/cổ phần/05. DSCSH hưởng lợi.docx` },
      ];

      const mainZip = new PizZip();
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
        tong_co_phan: formatCurrency(formData.tongSoCoPhan),
        gia_co_phan: formatCurrency((parseInt(formData.von) / (parseInt(formData.tongSoCoPhan) || 1)).toString()),
        tru_so_chi_tiet: formData.diaChi_chiTiet || '',
        tru_so_xa_phuong: formData.diaChi_xaPhuong || '',
        tinh_thanh_tru_so: formData.diaChi_tinhThanh || '',
        tinh_thanh_ky: stripProvincePrefix(formData.diaChi_tinhThanh),
        tinh_ky: stripProvincePrefix(formData.diaChi_tinhThanh),
        ngay_lam_don: String(new Date().getDate()).padStart(2, '0'),
        thang_lam_don: String(new Date().getMonth() + 1).padStart(2, '0'),
        nam_lam_don: String(new Date().getFullYear()),
        ngay_ky: `ngày ${String(new Date().getDate()).padStart(2, '0')} tháng ${String(new Date().getMonth() + 1).padStart(2, '0')} năm ${String(new Date().getFullYear())}`,
        ngay_thanh_lap: `ngày ${String(new Date().getDate()).padStart(2, '0')} tháng ${String(new Date().getMonth() + 1).padStart(2, '0')} năm ${String(new Date().getFullYear())}`,

        ho_ten: (shareholders[0].hoTen || '').toUpperCase(),
        gioi_tinh: (shareholders[0].gioiTinh && shareholders[0].gioiTinh.charAt(0).toUpperCase() + shareholders[0].gioiTinh.slice(1)) || '',
        ngay_sinh: formatDate(shareholders[0].ngaySinh) || '',
        so_dinh_danh: shareholders[0].soDinhDanh || '',
        dia_chi_chi_tiet: shareholders[0].contact_chiTiet || '',
        dia_chi_xa_phuong: shareholders[0].contact_xaPhuong || '',
        dia_chi_tinh_thanh: shareholders[0].contact_tinhThanh || '',
        so_dien_thoai: shareholders[0].soDienThoai || '',
        email: shareholders[0].email || '',

        ho_ten_duoc_uy_quyen: uqInfo.hoTen || '',
        ngay_sinh_duoc_uy_quyen: formatDate(uqInfo.ngaySinh) || '',
        gioi_tinh_duoc_uy_quyen: uqInfo.gioiTinh || '',
        so_dinh_danh_duoc_uy_quyen: uqInfo.soDinhDanh || '',
        dia_chi_duoc_uy_quyen: uqInfo.contact_chiTiet || '',
        xa_phuong_duoc_uy_quyen: uqInfo.contact_xaPhuong || '',
        tinh_thanh_duoc_uy_quyen: uqInfo.contact_tinhThanh || '',
        sdt_duoc_uy_quyen: uqInfo.sdt || '',
        email_duoc_uy_quyen: uqInfo.email || '',

        thanh_vien: shareholders.map((s, idx) => {
          const tiLeGop = formData.von ? (parseInt(s.vonGop) / parseInt(formData.von)) * 100 : 0;
          return {
            stt: idx + 1,
            ho_ten: s.hoTen.toUpperCase(),
            gioi_tinh: s.gioiTinh,
            ngay_sinh: formatDate(s.ngaySinh),
            so_dinh_danh: s.soDinhDanh,
            dia_chi: `${s.contact_chiTiet}, ${s.contact_xaPhuong}, ${s.contact_tinhThanh}`,
            von_so: formatCurrency(s.vonGop),
            ty_le: String(tiLeGop).includes('.') ? tiLeGop.toFixed(2) : tiLeGop.toString(),
            so_co_phan: formatCurrency(Math.round(tiLeGop / 100 * (parseInt(formData.tongSoCoPhan) || 0)).toString()),
            gia_co_phan: formatCurrency((parseInt(formData.von) / (parseInt(formData.tongSoCoPhan) || 1)).toString()),
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

        ds_chu_ky: (() => {
          const names = shareholders.map(s => s.hoTen.toUpperCase());
          const rows = [];
          for (let i = 0; i < names.length; i += 2) {
            rows.push({
              ho_ten_1: names[i] || '',
              ho_ten_2: names[i + 1] || '',
            });
          }
          return rows;
        })(),
      };

      for (const template of templates) {
        try {
          const URI = encodeURI(template.path.normalize('NFC'));
          let res = await fetch(URI);

          if (!res.ok) {
            res = await fetch(template.path);
          }
          if (!res.ok) {
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
            console.error("Chi tiết lỗi template cho", template.name, ":", e.properties.errors);
            e.properties.errors.forEach((err: any) => {
              console.error("Thông báo:", err.message);
              console.error("Vị trí/Thuộc tính:", err.properties);
            });
          }
        }
      }

      if (Object.keys(mainZip.files).length > 0) {
        const finalBlob = mainZip.generate({ type: "blob", mimeType: "application/zip" });
        saveAs(finalBlob, `Ho_so_CP_${formData.tenCongTy.replace(/\s+/g, '_') || 'doanh_nghiep'}.zip`);
      } else {
        alert("Hiện tại chưa có bộ template cho Công ty Cổ phần trong hệ thống. Vui lòng liên hệ admin.");
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
            Hồ sơ đăng ký CTY Cổ phần của bạn đã được tạo.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-xl md:text-3xl font-bold mb-2 text-primary">Hồ sơ đăng ký CTY Cổ phần</h1>
          <p className="text-muted-foreground italic">
            Dành cho loại hình Công ty Cổ phần.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Thông tin doanh nghiệp */}
          <FormSection title="Thông tin công ty" icon={<Building2 className="w-5 h-5" />}>
            <FormField label="Tên công ty">
              <Input name="tenCongTy" placeholder="CÔNG TY CỔ PHẦN..." value={formData.tenCongTy} onChange={(e) => { e.target.value = e.target.value.toUpperCase(); handleChange(e); }} />
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

            <div className="grid md:grid-cols-3 gap-5">
              <FormField label="Vốn điều lệ (VNĐ)">
                <CurrencyInput placeholder="Vốn điều lệ" value={formData.von} onChange={handleCompanyVonChange} />
                {formData.von && <p className="mt-2 text-sm text-primary italic">Bằng chữ: {convertNumberToVietnameseWords(formData.von)}</p>}
              </FormField>
              <FormField label="Tổng số cổ phần">
                <Input type="number" name="tongSoCoPhan" placeholder="Số cổ phần" value={formData.tongSoCoPhan} onChange={(e) => handleCompanySharesChange(e.target.value)} />
              </FormField>
              <FormField label="Mệnh giá (VNĐ/CP)">
                <CurrencyInput placeholder="Mệnh giá" value={formData.menhGia} onChange={handleCompanyMenhGiaChange} />
              </FormField>
            </div>
          </FormSection>

          {/* Thông tin cổ đông */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                <h2 className="text-lg md:text-2xl font-bold">Danh sách cổ đông sáng lập</h2>
              </div>
              <button
                type="button"
                onClick={addShareholder}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-sm text-sm md:text-base"
              >
                <Plus className="w-4 h-4" />
                Thêm cổ đông
              </button>
            </div>

            <AnimatePresence mode="popLayout">
              {shareholders.map((shareholder, index) => (
                <motion.div
                  key={shareholder.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-border relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />

                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2 text-primary">
                      Cổ đông #{index + 1}
                    </h3>
                    {shareholders.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeShareholder(shareholder.id)}
                        className="p-2 text-destructive hover:bg-destructive/10 rounded-full transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <FormField label="Họ và tên">
                      <Input value={shareholder.hoTen} onChange={(e) => handleShareholderChange(shareholder.id, 'hoTen', e.target.value.toUpperCase())} placeholder="NGUYỄN VĂN A" />
                    </FormField>
                    <FormField label="Giới tính">
                      <Select
                        value={shareholder.gioiTinh}
                        onChange={(e) => handleShareholderChange(shareholder.id, 'gioiTinh', e.target.value)}
                        options={[{ value: 'Nam', label: 'Nam' }, { value: 'Nữ', label: 'Nữ' }]}
                        placeholder="Chọn giới tính"
                      />
                    </FormField>
                    <FormField label="Ngày sinh">
                      <Input type="date" value={shareholder.ngaySinh} onChange={(e) => handleShareholderChange(shareholder.id, 'ngaySinh', e.target.value)} />
                    </FormField>
                    <FormField label="Số định danh (CCCD)">
                      <Input value={shareholder.soDinhDanh} onChange={(e) => handleShareholderChange(shareholder.id, 'soDinhDanh', e.target.value)} placeholder="0..." />
                    </FormField>
                  </div>

                  <div className="space-y-5">
                    <AddressSelector
                      label="Địa chỉ liên lạc"
                      prefix="contact"
                      formData={shareholder}
                      onChange={(e: any) => handleShareholderChange(shareholder.id, e.target.name as keyof Shareholder, e.target.value)}
                    />
                  </div>

                  <div className="mt-6 pt-6 border-t border-dashed border-border">
                    <div className="grid md:grid-cols-3 gap-4">
                      <FormField label="Số vốn góp (VNĐ)">
                        <CurrencyInput
                          value={shareholder.vonGop}
                          onChange={(val) => handleShareholderShareChange(shareholder.id, 'von', val)}
                          placeholder="Nhập số vốn góp"
                        />
                      </FormField>
                      <FormField label="Tỷ lệ %">
                        <Input
                          type="number"
                          step="0.01"
                          value={shareholder.tyLeGop}
                          onChange={(e) => handleShareholderShareChange(shareholder.id, 'percent', e.target.value)}
                          placeholder="%"
                        />
                      </FormField>
                      <FormField label="Số cổ phần">
                        <Input
                          type="number"
                          value={shareholder.soCoPhan}
                          onChange={(e) => handleShareholderShareChange(shareholder.id, 'shares', e.target.value)}
                          placeholder="Số cổ phần"
                        />
                      </FormField>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Footer UI */}
          <div className="flex flex-col items-center gap-8 pt-8">
            <div className="flex justify-end gap-4 w-full">
              {import.meta.env.DEV && (
                <button
                  type="button"
                  className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/5 transition-colors"
                  onClick={fillSampleData}
                >
                  Nhập dữ liệu mẫu
                </button>
              )}
              <button
                type="button"
                className="px-6 py-3 rounded-lg border border-border hover:bg-accent transition-colors"
                onClick={() => {
                  setFormData({
                    tenCongTy: '',
                    diaChi_chiTiet: '', diaChi_xaPhuong: '', diaChi_tinhThanh: '',
                    website: '', soDienThoaiCT: '', email_ct: '',
                    von: '',
                    tongSoCoPhan: '',
                    menhGia: '10000',
                  });
                  setShareholders([{
                    id: crypto.randomUUID(),
                    hoTen: '', gioiTinh: '', ngaySinh: '', soDinhDanh: '',
                    contact_chiTiet: '', contact_xaPhuong: '', contact_tinhThanh: '',
                    soDienThoai: '', email: '', vonGop: '',
                    tyLeGop: '', soCoPhan: ''
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
                    Tạo hồ sơ CTY Cổ phần
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={8}>
                  <p>Hệ thống sẽ tổng hợp danh sách cổ đông và điền vào các mẫu hồ sơ.</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
