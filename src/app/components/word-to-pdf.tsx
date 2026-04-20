import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileType, Upload, Download, FileText, Loader2, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

declare global {
  interface Window {
    mammoth: any;
    html2pdf: any;
  }
}

export function WordToPdf() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  // Load scripts dynamically
  useEffect(() => {
    const scripts = [
      'https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
    ];

    scripts.forEach(src => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const script = document.createElement('script');
        script.src = src;
        script.async = false; // Load sequentially
        document.body.appendChild(script);
      }
    });
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.name.endsWith('.docx')) {
        setFile(selectedFile);
        setError(null);
        setIsDone(false);
      } else {
        setError('Vui lòng chọn file định dạng .docx');
        setFile(null);
      }
    }
  };

  const convertToPdf = async () => {
    if (!file || !previewRef.current) return;

    setIsProcessing(true);
    setError(null);

    try {
      if (!window.mammoth || !window.html2pdf) {
        throw new Error('Hệ thống đang tải thư viện, vui lòng đợi giây lát và thử lại.');
      }

      // 1. Convert DOCX to HTML using Mammoth with Style Map for alignment
      const arrayBuffer = await file.arrayBuffer();
      const options = {
        styleMap: [
          "p[style-name='Center'] => p.center",
          "p[style-name='center'] => p.center",
          "p[style-name='Centered'] => p.center",
          "p[style-name='Center Text'] => p.center"
        ]
      };
      const result = await window.mammoth.convertToHtml({ arrayBuffer: arrayBuffer }, options);
      
      if (!result.value) {
        throw new Error('Không thể đọc được nội dung file Word.');
      }

      // Update preview for user feedback
      previewRef.current.innerHTML = result.value;

      // 2. Convert to PDF using the HTML string directly (more robust)
      const opt = {
        margin: 10,
        filename: file.name.replace('.docx', '.pdf'),
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2, 
          useCORS: true, 
          logging: false,
          scrollY: 0,
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      // Wrap with minimal spacing styles
      const styledHtml = `
        <div style="font-family: 'Times New Roman', serif; padding: 15mm; color: black; background: white;">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            p { margin-bottom: 0px; line-height: 1.2; text-align: justify; min-height: 1.2em; }
            .center { text-align: center !important; }
            h1, h2, h3 { margin-top: 10px; margin-bottom: 5px; font-weight: bold; }
            table { border-collapse: collapse; width: 100%; margin: 10px 0; }
            table, th, td { border: 1px solid black; padding: 4px; }
            img { max-width: 100%; height: auto; }
          </style>
          ${result.value}
        </div>
      `;

      await window.html2pdf().set(opt).from(styledHtml).save();
      
      setIsDone(true);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Có lỗi xảy ra trong quá trình chuyển đổi.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-100 text-red-600 mb-4 shadow-sm">
            <FileType className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Chuyển đổi Word sang PDF</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Công cụ bảo mật, xử lý trực tiếp trên trình duyệt của bạn.
            Không có file nào được tải lên máy chủ của chúng tôi.
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-orange-500" />

          <div className="space-y-8">
            {/* Upload Area */}
            {!file ? (
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-200 rounded-2xl cursor-pointer hover:bg-red-50/30 hover:border-red-200 transition-all group">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <div className="p-4 rounded-full bg-red-50 text-red-500 group-hover:scale-110 transition-transform duration-300 mb-4">
                    <Upload className="w-8 h-8" />
                  </div>
                  <p className="mb-2 text-sm text-gray-700">
                    <span className="font-semibold text-red-600">Nhấn để tải lên</span> hoặc kéo thả file vào đây
                  </p>
                  <p className="text-xs text-gray-500 italic">Định dạng hỗ trợ: .docx (Tối đa 10MB)</p>
                </div>
                <input type="file" className="hidden" accept=".docx" onChange={handleFileChange} />
              </label>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-between p-6 bg-red-50/50 rounded-2xl border border-red-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 truncate max-w-[200px] md:max-w-xs">{file.name}</h3>
                    <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
                <button
                  onClick={() => { setFile(null); setIsDone(false); }}
                  className="text-sm font-medium text-red-600 hover:underline"
                >
                  Thay đổi
                </button>
              </motion.div>
            )}

            {error && (
              <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                {error}
              </div>
            )}

            {/* Action Button */}
            <div className="flex flex-col gap-4">
              <button
                disabled={!file || isProcessing}
                onClick={convertToPdf}
                className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-3 transition-all ${!file || isProcessing
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'
                  : 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:opacity-90 active:scale-[0.98]'
                  }`}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Đang xử lý...
                  </>
                ) : isDone ? (
                  <>
                    <CheckCircle2 className="w-6 h-6" />
                    Chuyển đổi thành công
                  </>
                ) : (
                  <>
                    <FileType className="w-6 h-6" />
                    Chuyển sang PDF ngay
                  </>
                )}
              </button>

              {isDone && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <p className="text-green-600 font-medium flex items-center justify-center gap-2 mb-4">
                    <CheckCircle2 className="w-4 h-4" />
                    File PDF đã được tải xuống tự động
                  </p>
                  <button
                    onClick={() => { setFile(null); setIsDone(false); }}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 font-medium transition-colors"
                  >
                    Tiếp tục chuyển đổi file khác
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Processing Overlay */}
          <AnimatePresence>
            {isProcessing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] bg-white/90 backdrop-blur-sm flex flex-col items-center justify-start overflow-y-auto py-12"
              >
                <div className="text-center mb-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 z-10 sticky top-0">
                  <Loader2 className="w-12 h-12 animate-spin text-red-600 mx-auto mb-4" />
                  <h2 className="text-xl font-bold text-gray-900">Đang tạo PDF...</h2>
                  <p className="text-gray-500">Vui lòng không đóng trình duyệt</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hidden preview div - Always in DOM but hidden when not processing */}
          <div
            ref={previewRef}
            className={`hidden-docx-preview bg-white ${isProcessing ? 'visible' : 'invisible'}`}
            style={{
              position: 'absolute',
              left: '0',
              top: '0',
              width: '210mm',
              minHeight: '297mm',
              padding: '20mm',
              backgroundColor: 'white',
              zIndex: -1,
              overflow: 'visible'
            }}
          />
        </div>

        {/* Security Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, title: 'Bảo mật tuyệt đối', desc: 'Dữ liệu không rời khỏi máy tính của bạn.' },
            { icon: FileText, title: 'Giữ nguyên định dạng', desc: 'Chuyển đổi chính xác văn bản và hình ảnh.' },
            { icon: Download, title: 'Tải xuống tức thì', desc: 'Xử lý nhanh chóng chỉ trong vài giây.' }
          ].map((item, i) => (
            <div key={i} className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white flex flex-col items-center text-center">
              <item.icon className="w-6 h-6 text-red-500 mb-3" />
              <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hidden-docx-preview {
          font-family: 'Times New Roman', Times, serif;
          color: #000;
          background-color: #fff;
        }
        .hidden-docx-preview p {
          margin-bottom: 0px;
          line-height: 1.2;
        }
        .hidden-docx-preview .center {
          text-align: center !important;
        }
        .hidden-docx-preview table {
          border-collapse: collapse;
          width: 100%;
        }
        .hidden-docx-preview td {
          border: 1px solid black;
          padding: 4px;
        }
      `}</style>
    </div>
  );
}
