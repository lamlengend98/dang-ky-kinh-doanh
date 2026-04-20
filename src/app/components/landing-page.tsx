import { Link } from 'react-router';
import { Building2, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function LandingPage() {
  const features = [
    'Quy trình đăng ký nhanh chóng, đơn giản',
    'Hướng dẫn chi tiết từng bước',
    'Hỗ trợ 24/7 qua Zalo',
    'Hoàn toàn miễn phí',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-2xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Đăng ký kinh doanh
            <span className="text-primary"> nhanh chóng</span> và{' '}
            <span className="text-primary">dễ dàng</span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8">
            Hệ thống hỗ trợ đăng ký doanh nghiệp trực tuyến nhanh chóng
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-left">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Registration Options */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Công ty Cổ phần */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <Link to="/cong-ty-co-phan">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 border-transparent hover:border-primary h-full flex flex-col">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-semibold mb-4">CTY Cổ phần</h2>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Đăng ký thành lập công ty cổ phần có ít nhất 03 cổ đông sáng lập, không giới hạn tối đa
                </p>
                <div className="flex items-center gap-2 text-primary mt-auto">
                  <span>Bắt đầu đăng ký</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Doanh nghiệp hai thành viên trở lên */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <Link to="/doanh-nghiep-2-tv">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 border-transparent hover:border-primary h-full flex flex-col">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-semibold mb-4">CTY TNHH 2 TV</h2>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Đăng ký công ty TNHH có từ 02 đến 50 thành viên góp vốn, có tư cách pháp nhân
                </p>
                <div className="flex items-center gap-2 text-primary mt-auto">
                  <span>Bắt đầu đăng ký</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Doanh nghiệp một thành viên */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <Link to="/doanh-nghiep">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 border-transparent hover:border-primary h-full flex flex-col">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-semibold mb-4">CTY TNHH 1 TV</h2>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Đăng ký công ty TNHH một thành viên, có tư cách pháp nhân độc lập
                </p>
                <div className="flex items-center gap-2 text-primary mt-auto">
                  <span>Bắt đầu đăng ký</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-sky-50 rounded-xl p-8 max-w-3xl mx-auto border border-sky-100">
            <h3 className="text-xl font-semibold mb-4">Cần hỗ trợ?</h3>
            <p className="text-muted-foreground mb-4">
              Liên hệ với chúng tôi qua Zalo <strong className="text-primary">0383381177</strong> hoặc email{' '}
              <strong className="text-primary">thanhlamkma@gmail.com</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              Giờ làm việc: 8:00 - 17:30 từ thứ 2 đến thứ 6
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
