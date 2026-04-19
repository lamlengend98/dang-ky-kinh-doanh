import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import PizZip from 'pizzip';

test.describe('Word Document Generation Tests', () => {

  test('Generate 2-member company docs and verify completeness', async ({ page }) => {
    // 1. Đi tới trang đăng ký doanh nghiệp 2 thành viên
    await page.goto('/dang-ky-kinh-doanh/doanh-nghiep-2-tv');

    // 2. Click nút Nhập dữ liệu mẫu
    await page.click('text=Nhập dữ liệu mẫu');

    // 3. Chuẩn bị để bắt lấy file download
    const downloadPromise = page.waitForEvent('download');

    // Click nút Tạo hồ sơ (Chữ trên nút: Tạo hồ sơ DN 2TV)
    await page.click('text=Tạo hồ sơ DN 2TV');

    // 4. Chờ tải xong và lưu vào file tạm
    const download = await downloadPromise;
    const downloadPath = await download.path();
    
    // Nếu không lấy được file, test fail
    expect(downloadPath).toBeTruthy();

    if (!downloadPath) return;

    // 5. Đọc file ZIP
    const zipData = fs.readFileSync(downloadPath);
    const zip = new PizZip(zipData);

    // Lấy ra danh sách các file docx bên trong
    const innerFiles = Object.keys(zip.files).filter(name => name.endsWith('.docx') && !name.startsWith('~$'));
    
    expect(innerFiles.length).toBeGreaterThan(0);

    let hasUndefinedOrMissing = false;
    const missingDetails: string[] = [];

    // 6. Quét từng file DOCX
    for (const filename of innerFiles) {
      const docxData = zip.file(filename)?.asNodeBuffer();
      if (!docxData) continue;
      
      const docxZip = new PizZip(docxData);
      const documentXml = docxZip.file("word/document.xml")?.asText();

      if (documentXml) {
        // Loại bỏ các thẻ XML (chỉ lấy text), hoặc có thể scan trực tiếp trên XML
        // Để check thẻ bị sót kiểu {ten_cong_ty}, nó thường nằm xen kẽ bằng thẻ XML nên cần lọc cẩn thận
        // Nhưng nếu là undefined thì nó là text thuần trong thẻ <w:t>
        
        // Kiểm tra xem có chứa từ "undefined" (của Javascript khi convert data lỗi) 
        if (documentXml.includes('undefined')) {
          hasUndefinedOrMissing = true;
          missingDetails.push(`[${filename}] Chứa chữ "undefined".`);
        }

        // Kiểm tra lỗi missing giá trị hoặc thẻ Docxtemplater chưa thay (ví dụ: { , } )
        // Tuy Docxtemplater có thể xóa tag nếu thiếu data, nhưng đôi khi ngoặc { xuất hiện do lỗi format
        if (documentXml.includes('{') || documentXml.includes('}')) {
          missingDetails.push(`[${filename}] Cảnh báo: Có thể có dấu ngoặc nhọn {...} chưa được parse.`);
        }

        // Kiểm tra dữ liệu mẫu "CÔNG TY TNHH ĐẦU TƯ ABC VIỆT NAM" có được truyền vô không
        expect(documentXml).toContain('ABC VIỆT NAM');
      }
    }

    if (hasUndefinedOrMissing) {
      console.error('Các lỗi thiếu dữ liệu được tìm thấy:\\n', missingDetails.join('\\n'));
    }

    expect(hasUndefinedOrMissing).toBe(false);
  });

  test('Generate 1-member company docs and verify completeness', async ({ page }) => {
    // 1. Đi tới trang đăng ký doanh nghiệp 1 thành viên
    await page.goto('/dang-ky-kinh-doanh/doanh-nghiep');

    // 2. Click nút Nhập dữ liệu mẫu
    await page.click('text=Nhập dữ liệu mẫu');

    // 3. Chuẩn bị để bắt lấy file download
    const downloadPromise = page.waitForEvent('download');

    // Mở đúng nút Tạo hồ sơ
    await page.locator('button', { hasText: /^Tạo hồ sơ$/ }).click();

    // 4. Chờ tải xong và lưu vào file tạm
    const download = await downloadPromise;
    const downloadPath = await download.path();
    
    expect(downloadPath).toBeTruthy();
    if (!downloadPath) return;

    // 5. Đọc file ZIP
    const zipData = fs.readFileSync(downloadPath);
    const zip = new PizZip(zipData);

    const innerFiles = Object.keys(zip.files).filter(name => name.endsWith('.docx') && !name.startsWith('~$'));
    expect(innerFiles.length).toBeGreaterThan(0);

    let hasUndefinedOrMissing = false;
    const missingDetails: string[] = [];

    // 6. Quét từng file DOCX
    for (const filename of innerFiles) {
      const docxData = zip.file(filename)?.asNodeBuffer();
      if (!docxData) continue;
      
      const docxZip = new PizZip(docxData);
      const documentXml = docxZip.file("word/document.xml")?.asText();

      if (documentXml) {
        if (documentXml.includes('undefined')) {
          hasUndefinedOrMissing = true;
          missingDetails.push(`[${filename}] Chứa chữ "undefined".`);
        }

        if (documentXml.includes('{') || documentXml.includes('}')) {
          missingDetails.push(`[${filename}] Cảnh báo: Có thể có dấu ngoặc nhọn {...} chưa được parse.`);
        }

        expect(documentXml).toContain('CÔNG NGHỆ ABC');
      }
    }

    if (hasUndefinedOrMissing) {
      console.error('Các lỗi thiếu dữ liệu được tìm thấy:\\n', missingDetails.join('\\n'));
    }

    expect(hasUndefinedOrMissing).toBe(false);
  });

});
