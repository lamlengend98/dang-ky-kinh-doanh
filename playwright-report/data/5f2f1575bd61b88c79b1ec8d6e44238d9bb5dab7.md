# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: generate-docs.spec.ts >> Word Document Generation Tests >> Generate 2-member company docs and verify completeness
- Location: tests/generate-docs.spec.ts:8:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForEvent: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for event "download"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e4]:
    - generic [ref=e6]:
      - generic [ref=e7]:
        - img "Logo" [ref=e9]
        - generic [ref=e10]: Đăng ký kinh doanh
      - generic [ref=e11]:
        - link "Trang chủ" [ref=e12] [cursor=pointer]:
          - /url: /dang-ky-kinh-doanh/
          - img [ref=e13]
          - text: Trang chủ
        - button "Tạo hồ sơ" [ref=e16]:
          - img [ref=e17]
          - text: Tạo hồ sơ
          - img [ref=e20]
      - button "Thiết lập" [ref=e23]:
        - img [ref=e24]
        - generic [ref=e27]: Thiết lập
    - generic [ref=e30]:
      - generic [ref=e31]:
        - generic [ref=e32]:
          - img [ref=e34]
          - generic [ref=e38]:
            - heading "Thiết lập" [level=2] [ref=e39]
            - paragraph [ref=e40]: Thông tin này sẽ được tự động điền vào các mẫu ủy quyền
        - button [ref=e41]:
          - img [ref=e42]
      - generic [ref=e45]:
        - generic [ref=e46]:
          - generic [ref=e47]:
            - img [ref=e48]
            - heading "Thông tin cá nhân" [level=4] [ref=e51]
          - generic [ref=e52]:
            - generic [ref=e53]:
              - generic [ref=e55]: Họ và tên
              - textbox "NGUYỄN VĂN A" [ref=e56]
            - generic [ref=e57]:
              - generic [ref=e59]: Sinh ngày
              - textbox [ref=e60]
          - generic [ref=e61]:
            - generic [ref=e62]:
              - generic [ref=e64]: Giới tính
              - combobox [ref=e65] [cursor=pointer]:
                - option "Chọn giới tính" [selected]
                - option "Nam"
                - option "Nữ"
            - generic [ref=e66]:
              - generic [ref=e68]: Số định danh cá nhân
              - textbox "001234567890" [ref=e69]
        - generic [ref=e70]:
          - generic [ref=e71]:
            - img [ref=e72]
            - heading "Địa chỉ liên lạc" [level=4] [ref=e75]
          - generic [ref=e76]:
            - generic [ref=e78]: Địa chỉ chi tiết
            - generic [ref=e79]:
              - generic [ref=e80]:
                - generic [ref=e82] [cursor=pointer]:
                  - generic [ref=e83]: Chọn Tỉnh/Thành phố
                  - img [ref=e84]
                - generic [ref=e87] [cursor=pointer]:
                  - generic [ref=e88]: Vui lòng chọn tỉnh trước
                  - img [ref=e89]
              - textbox "Số nhà/phòng, ngách/hẻm, ngõ/kiệt, đường/phố/đại lộ, tổ/xóm/ấp/thôn" [ref=e91]
        - generic [ref=e92]:
          - generic [ref=e93]:
            - img [ref=e94]
            - heading "Thông tin liên hệ" [level=4] [ref=e96]
          - generic [ref=e97]:
            - generic [ref=e98]:
              - generic [ref=e100]: Số điện thoại
              - generic [ref=e101]:
                - img [ref=e103]
                - textbox "0912345678" [ref=e105]
            - generic [ref=e106]:
              - generic [ref=e108]: Email
              - generic [ref=e109]:
                - img [ref=e111]
                - textbox "example@gmail.com" [ref=e114]
      - generic [ref=e115]:
        - button "Hủy bỏ" [ref=e116]
        - button "Lưu thông tin" [ref=e117]:
          - img [ref=e118]
          - text: Lưu thông tin
  - main [ref=e122]:
    - generic [ref=e124]:
      - generic [ref=e125]:
        - heading "Hồ sơ đăng ký doanh nghiệp hai thành viên trở lên" [level=1] [ref=e126]
        - paragraph [ref=e127]: Dành cho loại hình Công ty TNHH Hai thành viên trở lên.
      - generic [ref=e128]:
        - generic [ref=e129]:
          - generic [ref=e130]:
            - img [ref=e132]
            - heading "Thông tin công ty" [level=3] [ref=e136]
          - generic [ref=e137]:
            - generic [ref=e138]:
              - generic [ref=e140]: Tên công ty
              - textbox "CÔNG TY TNHH..." [ref=e141]: CÔNG TY TNHH ĐẦU TƯ ABC VIỆT NAM
            - generic [ref=e142]:
              - generic [ref=e144]: Trụ sở chính
              - generic [ref=e145]:
                - generic [ref=e146]:
                  - generic [ref=e148] [cursor=pointer]:
                    - generic [ref=e149]: Thành phố Hà Nội
                    - img [ref=e150]
                  - generic [ref=e153] [cursor=pointer]:
                    - generic [ref=e154]: Phường Láng
                    - img [ref=e155]
                - textbox "Số nhà/phòng, ngách/hẻm, ngõ/kiệt, đường/phố/đại lộ, tổ/xóm/ấp/thôn" [ref=e157]: 123 Đường Láng
            - generic [ref=e158]:
              - generic [ref=e159]:
                - generic [ref=e161]: Số điện thoại
                - textbox "09..." [ref=e162]: "02438889999"
              - generic [ref=e163]:
                - generic [ref=e165]: Email doanh nghiệp
                - textbox "email@company.com" [ref=e166]: office@abc-invest.vn
            - generic [ref=e167]:
              - generic [ref=e169]: Ngành nghề kinh doanh
              - button "Chọn ngành nghề kinh doanh" [ref=e172]:
                - generic [ref=e173]: Chọn ngành nghề kinh doanh
                - img [ref=e174]
            - generic [ref=e176]:
              - generic [ref=e178]: Vốn điều lệ
              - generic [ref=e179]:
                - textbox "Vốn điều lệ" [ref=e180]: 2.000.000.000
                - generic: VND
              - paragraph [ref=e181]: "Bằng chữ: Hai tỷ"
        - generic [ref=e182]:
          - generic [ref=e183]:
            - generic [ref=e184]:
              - img [ref=e185]
              - heading "Danh sách thành viên góp vốn" [level=2] [ref=e190]
            - button "Thêm thành viên" [ref=e191]:
              - img [ref=e192]
              - text: Thêm thành viên
          - generic [ref=e193]:
            - generic [ref=e195]:
              - 'heading "Thành viên #1" [level=3] [ref=e196]'
              - button [ref=e197]:
                - img [ref=e198]
            - generic [ref=e201]:
              - generic [ref=e202]:
                - generic [ref=e204]: Họ và tên
                - textbox "NGUYỄN VĂN A" [ref=e205]
              - generic [ref=e206]:
                - generic [ref=e208]: Giới tính
                - combobox [ref=e209] [cursor=pointer]:
                  - option "Chọn giới tính"
                  - option "Nam" [selected]
                  - option "Nữ"
              - generic [ref=e210]:
                - generic [ref=e212]: Ngày sinh
                - textbox [ref=e213]: 1985-05-15
              - generic [ref=e214]:
                - generic [ref=e216]: Số định danh (CCCD)
                - textbox "0..." [ref=e217]: "001085001234"
            - generic [ref=e218]:
              - generic [ref=e219]:
                - generic [ref=e221]: Địa chỉ thường trú
                - generic [ref=e222]:
                  - generic [ref=e223]:
                    - generic [ref=e225] [cursor=pointer]:
                      - generic [ref=e226]: Thành phố Hà Nội
                      - img [ref=e227]
                    - generic [ref=e230] [cursor=pointer]:
                      - generic [ref=e231]: Phường Phú Diễn
                      - img [ref=e232]
                  - textbox "Số nhà/phòng, ngách/hẻm, ngõ/kiệt, đường/phố/đại lộ, tổ/xóm/ấp/thôn" [ref=e234]: Số 1 Phú Diễn
              - generic [ref=e235]:
                - generic [ref=e237]: Địa chỉ liên lạc
                - generic [ref=e238]:
                  - generic [ref=e239]:
                    - generic [ref=e241] [cursor=pointer]:
                      - generic [ref=e242]: Thành phố Hà Nội
                      - img [ref=e243]
                    - generic [ref=e246] [cursor=pointer]:
                      - generic [ref=e247]: Phường Phú Diễn
                      - img [ref=e248]
                  - textbox "Số nhà/phòng, ngách/hẻm, ngõ/kiệt, đường/phố/đại lộ, tổ/xóm/ấp/thôn" [ref=e250]: Số 1 Phú Diễn
            - generic [ref=e252]:
              - generic [ref=e254]: Vốn góp
              - generic [ref=e255]:
                - generic [ref=e257]:
                  - textbox "Nhập số vốn góp" [ref=e258]: 1.600.000.000
                  - generic: VND
                - generic [ref=e259]:
                  - text: "Tỷ lệ:"
                  - generic [ref=e260]: 80.00%
          - generic [ref=e261]:
            - generic [ref=e263]:
              - 'heading "Thành viên #2" [level=3] [ref=e264]'
              - button [ref=e265]:
                - img [ref=e266]
            - generic [ref=e269]:
              - generic [ref=e270]:
                - generic [ref=e272]: Họ và tên
                - textbox "NGUYỄN VĂN A" [ref=e273]: TRẦN THỊ B
              - generic [ref=e274]:
                - generic [ref=e276]: Giới tính
                - combobox [ref=e277] [cursor=pointer]:
                  - option "Chọn giới tính"
                  - option "Nam"
                  - option "Nữ" [selected]
              - generic [ref=e278]:
                - generic [ref=e280]: Ngày sinh
                - textbox [ref=e281]: 1990-10-20
              - generic [ref=e282]:
                - generic [ref=e284]: Số định danh (CCCD)
                - textbox "0..." [ref=e285]: "001190005678"
            - generic [ref=e286]:
              - generic [ref=e287]:
                - generic [ref=e289]: Địa chỉ thường trú
                - generic [ref=e290]:
                  - generic [ref=e291]:
                    - generic [ref=e293] [cursor=pointer]:
                      - generic [ref=e294]: Thành phố Hà Nội
                      - img [ref=e295]
                    - generic [ref=e298] [cursor=pointer]:
                      - generic [ref=e299]: Phường Láng
                      - img [ref=e300]
                  - textbox "Số nhà/phòng, ngách/hẻm, ngõ/kiệt, đường/phố/đại lộ, tổ/xóm/ấp/thôn" [ref=e302]: 22 Láng
              - generic [ref=e303]:
                - generic [ref=e305]: Địa chỉ liên lạc
                - generic [ref=e306]:
                  - generic [ref=e307]:
                    - generic [ref=e309] [cursor=pointer]:
                      - generic [ref=e310]: Thành phố Hà Nội
                      - img [ref=e311]
                    - generic [ref=e314] [cursor=pointer]:
                      - generic [ref=e315]: Phường Láng
                      - img [ref=e316]
                  - textbox "Số nhà/phòng, ngách/hẻm, ngõ/kiệt, đường/phố/đại lộ, tổ/xóm/ấp/thôn" [ref=e318]: 22 Láng
            - generic [ref=e320]:
              - generic [ref=e322]: Vốn góp
              - generic [ref=e323]:
                - generic [ref=e325]:
                  - textbox "Nhập số vốn góp" [ref=e326]: 400.000.000
                  - generic: VND
                - generic [ref=e327]:
                  - text: "Tỷ lệ:"
                  - generic [ref=e328]: 20.00%
        - generic [ref=e330]:
          - button "Nhập dữ liệu mẫu" [ref=e331]
          - button "Đặt lại" [ref=e332]
          - button "Tạo hồ sơ DN 2TV" [active] [ref=e333]:
            - img [ref=e334]
            - text: Tạo hồ sơ DN 2TV
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import fs from 'fs';
  3   | import path from 'path';
  4   | import PizZip from 'pizzip';
  5   | 
  6   | test.describe('Word Document Generation Tests', () => {
  7   | 
  8   |   test('Generate 2-member company docs and verify completeness', async ({ page }) => {
  9   |     // 1. Đi tới trang đăng ký doanh nghiệp 2 thành viên
  10  |     await page.goto('/dang-ky-kinh-doanh/doanh-nghiep-2-tv');
  11  | 
  12  |     // 2. Click nút Nhập dữ liệu mẫu
  13  |     await page.click('text=Nhập dữ liệu mẫu');
  14  | 
  15  |     // 3. Chuẩn bị để bắt lấy file download
> 16  |     const downloadPromise = page.waitForEvent('download');
      |                                  ^ Error: page.waitForEvent: Test timeout of 30000ms exceeded.
  17  | 
  18  |     // Click nút Tạo hồ sơ (Chữ trên nút: Tạo hồ sơ DN 2TV)
  19  |     await page.click('text=Tạo hồ sơ DN 2TV');
  20  | 
  21  |     // 4. Chờ tải xong và lưu vào file tạm
  22  |     const download = await downloadPromise;
  23  |     const downloadPath = await download.path();
  24  |     
  25  |     // Nếu không lấy được file, test fail
  26  |     expect(downloadPath).toBeTruthy();
  27  | 
  28  |     if (!downloadPath) return;
  29  | 
  30  |     // 5. Đọc file ZIP
  31  |     const zipData = fs.readFileSync(downloadPath);
  32  |     const zip = new PizZip(zipData);
  33  | 
  34  |     // Lấy ra danh sách các file docx bên trong
  35  |     const innerFiles = Object.keys(zip.files).filter(name => name.endsWith('.docx') && !name.startsWith('~$'));
  36  |     
  37  |     expect(innerFiles.length).toBeGreaterThan(0);
  38  | 
  39  |     let hasUndefinedOrMissing = false;
  40  |     const missingDetails: string[] = [];
  41  | 
  42  |     // 6. Quét từng file DOCX
  43  |     for (const filename of innerFiles) {
  44  |       const docxData = zip.file(filename)?.asNodeBuffer();
  45  |       if (!docxData) continue;
  46  |       
  47  |       const docxZip = new PizZip(docxData);
  48  |       const documentXml = docxZip.file("word/document.xml")?.asText();
  49  | 
  50  |       if (documentXml) {
  51  |         // Loại bỏ các thẻ XML (chỉ lấy text), hoặc có thể scan trực tiếp trên XML
  52  |         // Để check thẻ bị sót kiểu {ten_cong_ty}, nó thường nằm xen kẽ bằng thẻ XML nên cần lọc cẩn thận
  53  |         // Nhưng nếu là undefined thì nó là text thuần trong thẻ <w:t>
  54  |         
  55  |         // Kiểm tra xem có chứa từ "undefined" (của Javascript khi convert data lỗi) 
  56  |         if (documentXml.includes('undefined')) {
  57  |           hasUndefinedOrMissing = true;
  58  |           missingDetails.push(`[${filename}] Chứa chữ "undefined".`);
  59  |         }
  60  | 
  61  |         // Kiểm tra lỗi missing giá trị hoặc thẻ Docxtemplater chưa thay (ví dụ: { , } )
  62  |         // Tuy Docxtemplater có thể xóa tag nếu thiếu data, nhưng đôi khi ngoặc { xuất hiện do lỗi format
  63  |         if (documentXml.includes('{') || documentXml.includes('}')) {
  64  |           missingDetails.push(`[${filename}] Cảnh báo: Có thể có dấu ngoặc nhọn {...} chưa được parse.`);
  65  |         }
  66  | 
  67  |         // Kiểm tra dữ liệu mẫu "CÔNG TY TNHH ĐẦU TƯ ABC VIỆT NAM" có được truyền vô không
  68  |         expect(documentXml).toContain('ABC VIỆT NAM');
  69  |       }
  70  |     }
  71  | 
  72  |     if (hasUndefinedOrMissing) {
  73  |       console.error('Các lỗi thiếu dữ liệu được tìm thấy:\\n', missingDetails.join('\\n'));
  74  |     }
  75  | 
  76  |     expect(hasUndefinedOrMissing).toBe(false);
  77  |   });
  78  | 
  79  |   test('Generate 1-member company docs and verify completeness', async ({ page }) => {
  80  |     // 1. Đi tới trang đăng ký doanh nghiệp 1 thành viên
  81  |     await page.goto('/dang-ky-kinh-doanh/doanh-nghiep');
  82  | 
  83  |     // 2. Click nút Nhập dữ liệu mẫu
  84  |     await page.click('text=Nhập dữ liệu mẫu');
  85  | 
  86  |     // 3. Chuẩn bị để bắt lấy file download
  87  |     const downloadPromise = page.waitForEvent('download');
  88  | 
  89  |     // Mở đúng nút Tạo hồ sơ
  90  |     await page.locator('button', { hasText: /^Tạo hồ sơ$/ }).click();
  91  | 
  92  |     // 4. Chờ tải xong và lưu vào file tạm
  93  |     const download = await downloadPromise;
  94  |     const downloadPath = await download.path();
  95  |     
  96  |     expect(downloadPath).toBeTruthy();
  97  |     if (!downloadPath) return;
  98  | 
  99  |     // 5. Đọc file ZIP
  100 |     const zipData = fs.readFileSync(downloadPath);
  101 |     const zip = new PizZip(zipData);
  102 | 
  103 |     const innerFiles = Object.keys(zip.files).filter(name => name.endsWith('.docx') && !name.startsWith('~$'));
  104 |     expect(innerFiles.length).toBeGreaterThan(0);
  105 | 
  106 |     let hasUndefinedOrMissing = false;
  107 |     const missingDetails: string[] = [];
  108 | 
  109 |     // 6. Quét từng file DOCX
  110 |     for (const filename of innerFiles) {
  111 |       const docxData = zip.file(filename)?.asNodeBuffer();
  112 |       if (!docxData) continue;
  113 |       
  114 |       const docxZip = new PizZip(docxData);
  115 |       const documentXml = docxZip.file("word/document.xml")?.asText();
  116 | 
```