export interface IndustryOption {
  code: string;
  name: string;
  description: string;
  classes?: IndustryOption[];
}

export const industryOptions: IndustryOption[] = [
  {
    "code": "A",
    "name": "NÔNG NGHIỆP, LÂM NGHIỆP VÀ THỦY SẢN",
    "description": "",
    "classes": [
      {
        "code": "0111",
        "name": "Trồng lúa",
        "description": ""
      },
      {
        "code": "0112",
        "name": "Trồng ngô và cây lương thực có hạt khác",
        "description": ""
      },
      {
        "code": "0113",
        "name": "Trồng cây lấy củ có chất bột",
        "description": ""
      },
      {
        "code": "0114",
        "name": "Trồng cây mía",
        "description": ""
      },
      {
        "code": "0115",
        "name": "Trồng cây thuốc lá, thuốc lào",
        "description": ""
      },
      {
        "code": "0116",
        "name": "Trồng cây lấy sợi",
        "description": ""
      },
      {
        "code": "0117",
        "name": "Trồng cây có hạt chứa dầu",
        "description": ""
      },
      {
        "code": "0118",
        "name": "Trồng rau, đậu các loại và trồng hoa",
        "description": ""
      },
      {
        "code": "0119",
        "name": "Trồng cây hàng năm khác",
        "description": ""
      },
      {
        "code": "0121",
        "name": "Trồng cây ăn quả",
        "description": ""
      },
      {
        "code": "0122",
        "name": "Trồng cây lấy quả chứa dầu",
        "description": ""
      },
      {
        "code": "0123",
        "name": "Trồng cây điều",
        "description": ""
      },
      {
        "code": "0124",
        "name": "Trồng cây hồ tiêu",
        "description": ""
      },
      {
        "code": "0125",
        "name": "Trồng cây cao su",
        "description": ""
      },
      {
        "code": "0126",
        "name": "Trồng cây cà phê",
        "description": ""
      },
      {
        "code": "0127",
        "name": "Trồng cây chè",
        "description": ""
      },
      {
        "code": "0128",
        "name": "Trồng cây gia vị, cây dược liệu, cây hương liệu lâu năm",
        "description": ""
      },
      {
        "code": "0129",
        "name": "Trồng cây lâu năm khác",
        "description": ""
      },
      {
        "code": "0130",
        "name": "Nhân và chăm sóc cây giống nông nghiệp",
        "description": ""
      },
      {
        "code": "0141",
        "name": "Chăn nuôi trâu, bò và sản xuất giống trâu, bò",
        "description": ""
      },
      {
        "code": "0142",
        "name": "Chăn nuôi ngựa, lừa, la và sản xuất giống ngựa, lừa",
        "description": ""
      },
      {
        "code": "0144",
        "name": "Chăn nuôi dê, cừu, hươu, nai và sản xuất giống dê, cừu, hươu, nai",
        "description": ""
      },
      {
        "code": "0145",
        "name": "Chăn nuôi lợn và sản xuất giống lợn",
        "description": ""
      },
      {
        "code": "0146",
        "name": "Chăn nuôi gia cầm",
        "description": ""
      },
      {
        "code": "0149",
        "name": "Chăn nuôi khác",
        "description": ""
      },
      {
        "code": "0150",
        "name": "Trồng trọt, chăn nuôi hỗn hợp",
        "description": ""
      },
      {
        "code": "0161",
        "name": "Hoạt động dịch vụ trồng trọt",
        "description": ""
      },
      {
        "code": "0162",
        "name": "Hoạt động dịch vụ chăn nuôi",
        "description": ""
      },
      {
        "code": "0163",
        "name": "Hoạt động dịch vụ sau thu hoạch",
        "description": ""
      },
      {
        "code": "0164",
        "name": "Xử lý hạt giống để nhân giống",
        "description": ""
      },
      {
        "code": "0170",
        "name": "Săn bắt, đánh bẫy và hoạt động dịch vụ có liên quan",
        "description": ""
      },
      {
        "code": "0210",
        "name": "Trồng rừng, chăm sóc rừng và ươm giống cây lâm nghiệp",
        "description": "Nhóm này gồm các hoạt động nhằm phát triển, duy trì và bảo tồn đa dạng sinh học các loại rừng; gồm hoạt động trồng rừng tập trung, khoanh nuôi tái sinh kết hợp trồng rừng, chăm sóc rừng mới trồng chưa đạt tiêu chuẩn rừng, cắt tỉa cây, dọn thực bì... Các hoạt động trên được thực hiện ở rừng sản xuất, rừng phòng hộ và rừng đặc dụng. Nhóm này còn bao gồm các hoạt động chuyên ươm giống cây lâm nghiệp; trồng cây lâm nghiệp phân tán có mục đích thương mại tại những diện tích có quy mô chưa đạt tiêu chuẩn rừng."
      },
      {
        "code": "0220",
        "name": "Khai thác gỗ",
        "description": ""
      },
      {
        "code": "0230",
        "name": "Khai thác, thu nhặt lâm sản trừ gỗ",
        "description": ""
      },
      {
        "code": "0240",
        "name": "Hoạt động dịch vụ lâm nghiệp",
        "description": ""
      },
      {
        "code": "0311",
        "name": "Khai thác thủy sản biển",
        "description": ""
      },
      {
        "code": "0312",
        "name": "Khai thác thủy sản nội địa",
        "description": ""
      },
      {
        "code": "0321",
        "name": "Nuôi trồng thủy sản biển",
        "description": "Nhóm này gồm: Nuôi trồng các loại thủy sản ở môi trường nước mặn (bãi triều, ven biển, biển khơi)."
      },
      {
        "code": "0322",
        "name": "Nuôi trồng thủy sản nội địa",
        "description": "Nhóm này gồm nuôi trồng các loại thủy sản ở khu nước ngọt như ao, hồ, đập, sông, suối, ruộng... trong đất liền); nuôi trồng các loại thủy sản khác ở môi trường nước lợ (đầm, phá, cửa sông) là nơi môi trường nước dao động giữa nước mặn và nước ngọt do những biến đổi của thủy triều. Nhóm này gồm: 03221: Nuôi cá 03222: Nuôi tôm 03223: Nuôi thủy sản khác gồm nuôi các loại thủy sản giáp xác (cua...); nhuyễn thể hai mảnh và các động vật thân mềm khác (ốc...) và các loại thủy sản khác. 03224: Sản xuất giống thủy sản nội địa Nhóm này gồm các hoạt động tạo giống, ươm giống và thuần dưỡng giống các loại thủy sản (cá, tôm, thủy sản khác) nhằm mục đích bán để nuôi thương phẩm, nuôi làm cảnh, nuôi giải trí trong các môi trường nước ngọt, lợ. Nhóm này cũng gồm: - Nuôi cá cảnh; - Nuôi ba ba, ếch, cá sấu. 03221    Nuôi cá 03222    Nuôi tôm"
      },
      {
        "code": "0331",
        "name": "Hoạt động dịch vụ hỗ trợ khai thác thủy sản",
        "description": ""
      },
      {
        "code": "0332",
        "name": "Hoạt động dịch vụ hỗ trợ nuôi trồng thủy sản",
        "description": ""
      }
    ]
  },
  {
    "code": "B",
    "name": "KHAI KHOÁNG",
    "description": "",
    "classes": [
      {
        "code": "0510",
        "name": "Khai thác và thu gom than cứng",
        "description": ""
      },
      {
        "code": "0520",
        "name": "Khai thác và thu gom than non",
        "description": ""
      },
      {
        "code": "0610",
        "name": "Khai thác dầu thô",
        "description": ""
      },
      {
        "code": "0620",
        "name": "Khai thác khí đốt tự nhiên",
        "description": ""
      },
      {
        "code": "0710",
        "name": "Khai thác quặng sắt",
        "description": ""
      },
      {
        "code": "0721",
        "name": "Khai thác quặng uranium và quặng thorium",
        "description": ""
      },
      {
        "code": "0729",
        "name": "Khai thác quặng kim loại khác không chứa sắt",
        "description": ""
      },
      {
        "code": "0730",
        "name": "Khai thác quặng kim loại quý hiếm",
        "description": ""
      },
      {
        "code": "0810",
        "name": "Khai thác đá, cát, sỏi, đất sét",
        "description": ""
      },
      {
        "code": "0891",
        "name": "Khai thác khoáng hóa chất và khoáng phân bón",
        "description": ""
      },
      {
        "code": "0892",
        "name": "Khai thác và thu gom than bùn",
        "description": ""
      },
      {
        "code": "0893",
        "name": "Khai thác muối",
        "description": ""
      },
      {
        "code": "0899",
        "name": "Khai khoáng khác chưa được phân vào đâu",
        "description": ""
      },
      {
        "code": "0910",
        "name": "Hoạt động dịch vụ hỗ trợ khai thác dầu thô và khí tự nhiên",
        "description": ""
      },
      {
        "code": "0990",
        "name": "Hoạt động dịch vụ hỗ trợ khai khoáng khác",
        "description": ""
      }
    ]
  },
  {
    "code": "C",
    "name": "CÔNG NGHIỆP CHẾ BIẾN, CHẾ TẠO",
    "description": "",
    "classes": [
      {
        "code": "1010",
        "name": "Chế biến, bảo quản thịt và các sản phẩm từ thịt",
        "description": "Nhóm này gồm: Các hoạt động chế biến, bảo quản thịt và các sản phẩm từ thịt."
      },
      {
        "code": "1020",
        "name": "Chế biến, bảo quản thủy sản và các sản phẩm từ thủy sản",
        "description": "Nhóm này gồm: - Chế biến và bảo quản cá, tôm, cua và loài thân mềm; làm lạnh, sấy khô, hun khói, ướp muối, ngâm trong nước muối, đóng gói...; - Sản xuất các sản phẩm cá, tôm cua và các loài động vật thân mềm; cá nấu chín, cá khúc, cá rán, trứng cá muối, phụ phẩm trứng cá muối...; - Sản xuất các thức ăn cho người hoặc súc vật từ cá; - Sản xuất các thức ăn từ cá và các động vật sống dưới nước khác không dùng cho người. Nhóm này cũng gồm: - Hoạt động của các tàu không tham gia vào việc đánh bắt mà chỉ tham gia việc chế biến, bảo quản thủy sản; - Chế biến rong biển; - Bỏ đầu cá, lấy ruột, cắt cá thành từng miếng rồi cho đông lạnh."
      },
      {
        "code": "1030",
        "name": "Chế biến và bảo quản rau quả",
        "description": ""
      },
      {
        "code": "1040",
        "name": "Sản xuất dầu, mỡ động, thực vật",
        "description": "Nhóm này gồm: Các hoạt động chế biến, bảo quản dầu mỡ động, thực vật thô và tinh luyện."
      },
      {
        "code": "1050",
        "name": "Chế biến sữa và các sản phẩm từ sữa",
        "description": ""
      },
      {
        "code": "1061",
        "name": "Xay xát và sản xuất bột thô",
        "description": ""
      },
      {
        "code": "1062",
        "name": "Sản xuất tinh bột và các sản phẩm từ tinh bột",
        "description": ""
      },
      {
        "code": "1071",
        "name": "Sản xuất các loại bánh từ bột",
        "description": ""
      },
      {
        "code": "1072",
        "name": "Sản xuất đường",
        "description": ""
      },
      {
        "code": "1073",
        "name": "Sản xuất ca cao, sôcôla và bánh kẹo",
        "description": ""
      },
      {
        "code": "1074",
        "name": "Sản xuất mì ống, mỳ sợi và sản phẩm tương tự",
        "description": ""
      },
      {
        "code": "1075",
        "name": "Sản xuất món ăn, thức ăn chế biến sẵn",
        "description": "Nhóm này gồm: Sản xuất các thức ăn và món ăn chế biến sẵn (đã chế biến và nấu chín) và được bảo quản (chẳng hạn bảo quản ở dạng đông lạnh hoặc đóng hộp). Các món ăn này thường được đóng gói và dán nhãn để bán lại, nhóm này không bao gồm món ăn tiêu dùng ngay như trong nhà hàng. Các món ăn phải chứa ít nhất hai thành phần chính riêng biệt (trừ gia vị,...)."
      },
      {
        "code": "1076",
        "name": "Sản xuất chè",
        "description": ""
      },
      {
        "code": "1077",
        "name": "Sản xuất cà phê",
        "description": ""
      },
      {
        "code": "1079",
        "name": "Sản xuất thực phẩm khác chưa được phân vào đâu",
        "description": ""
      },
      {
        "code": "1080",
        "name": "Sản xuất thức ăn gia súc, gia cầm và thủy sản",
        "description": ""
      },
      {
        "code": "1101",
        "name": "Chưng, tinh cất và pha chế các loại rượu mạnh",
        "description": ""
      },
      {
        "code": "1102",
        "name": "Sản xuất rượu vang",
        "description": ""
      },
      {
        "code": "1103",
        "name": "Sản xuất bia",
        "description": ""
      },
      {
        "code": "1104",
        "name": "Sản xuất mạch nha ủ men bia",
        "description": ""
      },
      {
        "code": "1105",
        "name": "Sản xuất đồ uống không cồn, nước khoáng",
        "description": ""
      },
      {
        "code": "1200",
        "name": "Sản xuất sản phẩm thuốc lá",
        "description": "Ngành này gồm: Chế biến nông sản lá thuốc lá thành các loại sản phẩm thuốc lá, thuốc hút khác."
      },
      {
        "code": "1311",
        "name": "Sản xuất sợi",
        "description": ""
      },
      {
        "code": "1312",
        "name": "Sản xuất vải dệt thoi",
        "description": ""
      },
      {
        "code": "1313",
        "name": "Hoàn thiện sản phẩm dệt",
        "description": ""
      },
      {
        "code": "1391",
        "name": "Sản xuất vải dệt kim, vải đan móc và vải không dệt khác",
        "description": ""
      },
      {
        "code": "1392",
        "name": "Sản xuất hàng dệt sẵn (trừ trang phục)",
        "description": ""
      },
      {
        "code": "1393",
        "name": "Sản xuất thảm, chăn, đệm",
        "description": ""
      },
      {
        "code": "1394",
        "name": "Sản xuất các loại dây bện và lưới",
        "description": ""
      },
      {
        "code": "1399",
        "name": "Sản xuất các loại hàng dệt khác chưa được phân vào đâu",
        "description": ""
      },
      {
        "code": "1410",
        "name": "Sản xuất trang phục (trừ trang phục từ da lông thú)",
        "description": ""
      },
      {
        "code": "1420",
        "name": "Sản xuất sản phẩm từ da lông thú",
        "description": ""
      },
      {
        "code": "1430",
        "name": "Sản xuất trang phục đan móc",
        "description": ""
      },
      {
        "code": "1511",
        "name": "Thuộc, sơ chế da; sơ chế và nhuộm da lông thú",
        "description": ""
      },
      {
        "code": "1512",
        "name": "Sản xuất vali, túi xách và các loại tương tự, sản xuất yên đệm",
        "description": ""
      },
      {
        "code": "1520",
        "name": "Sản xuất giày, dép",
        "description": ""
      },
      {
        "code": "1610",
        "name": "Cưa, xẻ, bào gỗ và bảo quản gỗ",
        "description": "Nhóm này gồm: Cưa, xẻ, bào gỗ và bảo quản gỗ."
      },
      {
        "code": "1621",
        "name": "Sản xuất gỗ dán, gỗ lạng, ván ép và ván mỏng khác",
        "description": ""
      },
      {
        "code": "1622",
        "name": "Sản xuất đồ gỗ xây dựng",
        "description": ""
      },
      {
        "code": "1623",
        "name": "Sản xuất bao bì bằng gỗ",
        "description": ""
      },
      {
        "code": "1701",
        "name": "Sản xuất bột giấy, giấy và bìa",
        "description": ""
      },
      {
        "code": "1702",
        "name": "Sản xuất giấy nhăn, bìa nhăn, bao bì từ giấy và bìa",
        "description": ""
      },
      {
        "code": "1709",
        "name": "Sản xuất các sản phẩm khác từ giấy và bìa chưa được phân vào đâu",
        "description": ""
      },
      {
        "code": "1811",
        "name": "In ấn",
        "description": ""
      },
      {
        "code": "1812",
        "name": "Dịch vụ liên quan đến in",
        "description": ""
      },
      {
        "code": "1820",
        "name": "Sao chép bản ghi các loại",
        "description": ""
      },
      {
        "code": "1910",
        "name": "Sản xuất than cốc",
        "description": ""
      },
      {
        "code": "1920",
        "name": "Sản xuất sản phẩm dầu mỏ tinh chế; sản xuất sản phẩm nhiên liệu hóa thạch",
        "description": "Nhóm này gồm: Sản xuất nhiên liệu lỏng hoặc nhiên liệu khí hoặc các sản phẩm khác từ dầu thô, khoáng bitum hoặc các sản phẩm phân đoạn của chúng. Tinh luyện dầu gồm một hoặc nhiều các hoạt động sau: phân đoạn, chưng cất thẳng từ dầu thô, cracking. Cụ thể: - Sản xuất nhiên liệu ô tô, máy bay...: xăng, dầu lửa...; - Sản xuất nhiên liệu: Dầu nhiên liệu nặng, nhẹ, trung bình, khí tinh chế như etan, propan, butan...; - Sản xuất dầu mỡ bôi trơn từ dầu, kể cả từ dầu thải; - Sản xuất các sản phẩm cho ngành hóa dầu và cho ngành sản xuất chất phủ đường; - Sản xuất các sản phẩm khác: cồn trắng, vaseline, sáp paraphin, nhớt...; - Sản xuất các sản phẩm từ chất thải dầu mỏ, ví dụ như nhớt thải; - Sản xuất than bánh từ than bùn; - Sản xuất than bánh từ than non, than cốc; - Sản xuất than bánh từ dầu mỏ; - Trộn nhiên liệu sinh học, tức là trộn cồn với dầu hỏa."
      },
      {
        "code": "2021",
        "name": "Sản xuất thuốc trừ sâu và sản phẩm hóa chất khác dùng trong nông nghiệp",
        "description": "Nhóm này gồm: - Sản xuất thuốc trừ sâu, thuốc diệt nấm, thuốc diệt côn trùng gặm nhấm, thuốc diệt cỏ,...; - Sản xuất các sản phẩm chống mọc mầm, máy điều chỉnh tốc độ phát triển của cây; - Sản xuất chất tẩy uế (cho nông nghiệp và cho các mục đích sử dụng khác); - Sản xuất các sản phẩm hóa nông khác chưa phân vào đâu."
      },
      {
        "code": "2022",
        "name": "Sản xuất sơn, véc ni và các chất sơn, quét tương tự; sản xuất mực in và ma tít",
        "description": ""
      },
      {
        "code": "2029",
        "name": "Sản xuất sản phẩm hóa chất khác chưa được phân vào đâu",
        "description": ""
      },
      {
        "code": "2030",
        "name": "Sản xuất sợi nhân tạo",
        "description": ""
      },
      {
        "code": "2100",
        "name": "Sản xuất thuốc, hóa dược và dược liệu",
        "description": "Nhóm này gồm: Sản xuất các sản phẩm dược liệu cơ bản và các chế phẩm dược, sản xuất sản phẩm thuốc và hóa dược."
      },
      {
        "code": "2211",
        "name": "Sản xuất săm, lốp cao su; đắp và tái chế lốp cao su",
        "description": ""
      },
      {
        "code": "2219",
        "name": "Sản xuất sản phẩm khác từ cao su",
        "description": ""
      },
      {
        "code": "2220",
        "name": "Sản xuất sản phẩm từ plastic",
        "description": ""
      },
      {
        "code": "2310",
        "name": "Sản xuất thủy tinh và sản phẩm từ thủy tinh",
        "description": "Nhóm này gồm: Hoạt động sản xuất thủy tinh ở mọi loại hình, mọi phương thức và tất cả các sản phẩm như:"
      },
      {
        "code": "2391",
        "name": "Sản xuất sản phẩm chịu lửa",
        "description": ""
      },
      {
        "code": "2392",
        "name": "Sản xuất vật liệu xây dựng từ đất sét",
        "description": ""
      },
      {
        "code": "2393",
        "name": "Sản xuất sản phẩm gốm sứ khác",
        "description": ""
      },
      {
        "code": "2394",
        "name": "Sản xuất xi măng, vôi và thạch cao",
        "description": "Nhóm này gồm: - Sản xuất clanh ke và xi măng cứng trong nước, bao gồm xi măng pooc lăng, xi măng alumin, xi măng xỉ và xi măng supe phốt phát; - Sản xuất vôi nhanh, vôi tôi, vôi ngâm trong nước; - Sản xuất dolomit can xi; - Sản xuất vữa từ thạch cao hoặc sun phát can xi."
      },
      {
        "code": "2395",
        "name": "Sản xuất bê tông và các sản phẩm từ bê tông, xi măng và thạch cao",
        "description": ""
      },
      {
        "code": "2396",
        "name": "Cắt, tạo dáng và hoàn thiện đá",
        "description": ""
      },
      {
        "code": "2399",
        "name": "Sản xuất sản phẩm từ chất khoáng phi kim loại khác chưa được phân vào đâu",
        "description": "Nhóm này gồm: - Sản xuất đá nghiền, đá mài, đá mài dạng hình tròn và tương tự, không có khung, dùng để nghiền, mài, đánh bóng, giũa hoặc cắt, đá mài hoặc đá đánh bóng bằng tay; - Sản xuất bột mài, hạt mài tự nhiên hoặc nhân tạo, có nền bằng vật liệu dệt, giấy, bìa hoặc các vật liệu khác, đã hoặc chưa cắt thành hình hoặc đã khâu hoặc hoàn thiện bằng cách khác; - Sản xuất sợi và tấm dệt khoáng phi kim loại, quần áo, mũ, giày, dép, giấy, dây bện, dây thừng... - Sản xuất các nguyên liệu mài và các đồ không lắp khung của các sản phẩm đó với nguyên liệu khoáng hoặc xen lu lô; - Sản xuất vật liệu cách điện khoáng sản như: Sản xuất len xi, len đá, len khoáng sản tương tự, chất khoáng bón cây, đất sét và các nguyên liệu cách âm, cách nhiệt, thẩm âm; - Sản xuất các sản phẩm từ khoáng khác như: Mica và các sản phẩm từ mica, than bùn, than chì (không phải sản phẩm điện); - Sản xuất các sản phẩm từ asphát và nguyên liệu tương tự, ví dụ: nhựa đường, xỉ than; - Sản xuất sợi các bon và graphit và các sản phẩm từ sợi các bon (trừ các thiết bị điện); - Sản xuất corundun nhân tạo. Nhóm này cũng gồm: - Nung cao lanh; - Sấy khô và nghiền đất sét thành bột đất sét."
      },
      {
        "code": "2410",
        "name": "Sản xuất sắt, thép, gang",
        "description": ""
      },
      {
        "code": "2420",
        "name": "Sản xuất kim loại quý và kim loại màu",
        "description": ""
      },
      {
        "code": "2431",
        "name": "Đúc sắt, thép",
        "description": ""
      },
      {
        "code": "2432",
        "name": "Đúc kim loại màu",
        "description": ""
      },
      {
        "code": "2511",
        "name": "Sản xuất các cấu kiện kim loại",
        "description": ""
      },
      {
        "code": "2512",
        "name": "Sản xuất thùng, bể chứa và dụng cụ chứa đựng bằng kim loại",
        "description": ""
      },
      {
        "code": "2513",
        "name": "Sản xuất nồi hơi (trừ nồi hơi trung tâm)",
        "description": ""
      },
      {
        "code": "2520",
        "name": "Sản xuất vũ khí và đạn dược",
        "description": ""
      },
      {
        "code": "2591",
        "name": "Rèn, dập, ép và cán kim loại; luyện bột kim loại",
        "description": ""
      },
      {
        "code": "2592",
        "name": "Gia công cơ khí; xử lý và tráng phủ kim loại",
        "description": ""
      },
      {
        "code": "2593",
        "name": "Sản xuất dao kéo, dụng cụ cầm tay và đồ kim loại thông dụng",
        "description": ""
      },
      {
        "code": "2599",
        "name": "Sản xuất sản phẩm khác bằng kim loại chưa được phân vào đâu",
        "description": ""
      },
      {
        "code": "2611",
        "name": "Sản xuất pin mặt trời, tấm pin mặt trời và bộ biến tần quang điện",
        "description": ""
      },
      {
        "code": "2619",
        "name": "Sản xuất linh kiện điện tử khác",
        "description": ""
      },
      {
        "code": "2620",
        "name": "Sản xuất máy tính và thiết bị ngoại vi của máy tính",
        "description": ""
      },
      {
        "code": "2630",
        "name": "Sản xuất thiết bị truyền thông",
        "description": ""
      },
      {
        "code": "2640",
        "name": "Sản xuất sản phẩm điện tử dân dụng",
        "description": ""
      },
      {
        "code": "2651",
        "name": "Sản xuất thiết bị đo lường, kiểm tra, định hướng và điều khiển",
        "description": ""
      },
      {
        "code": "2652",
        "name": "Sản xuất đồng hồ",
        "description": ""
      },
      {
        "code": "2660",
        "name": "Sản xuất thiết bị bức xạ, thiết bị điện tử trong y học, điện liệu pháp",
        "description": ""
      },
      {
        "code": "2670",
        "name": "Sản xuất thiết bị và dụng cụ quang học",
        "description": ""
      },
      {
        "code": "2680",
        "name": "Sản xuất băng, đĩa từ tính và quang học",
        "description": ""
      },
      {
        "code": "2710",
        "name": "Sản xuất mô tơ, máy phát, biến thế điện, thiết bị phân phối và điều khiển điện",
        "description": "Nhóm này gồm: Sản xuất các máy biến thế điện, phân phối và các máy biến thế chuyên dùng; máy phát điện, tập trung; bộ chuyển mạch và tổng đài; rơle và điều khiển công nghiệp. Thiết bị điện trong nhóm này phân theo mức độ điện trở."
      },
      {
        "code": "2720",
        "name": "Sản xuất pin và ắc quy",
        "description": ""
      },
      {
        "code": "2731",
        "name": "Sản xuất dây cáp, sợi cáp quang học",
        "description": ""
      },
      {
        "code": "2732",
        "name": "Sản xuất dây, cáp điện và điện tử khác",
        "description": ""
      },
      {
        "code": "2733",
        "name": "Sản xuất thiết bị dây dẫn điện các loại",
        "description": ""
      },
      {
        "code": "2740",
        "name": "Sản xuất thiết bị điện chiếu sáng",
        "description": ""
      },
      {
        "code": "2750",
        "name": "Sản xuất đồ điện dân dụng",
        "description": ""
      },
      {
        "code": "2790",
        "name": "Sản xuất thiết bị điện khác",
        "description": ""
      },
      {
        "code": "2811",
        "name": "Sản xuất động cơ, tua bin (trừ động cơ máy bay, ô tô, mô tô và xe máy)",
        "description": ""
      },
      {
        "code": "2812",
        "name": "Sản xuất thiết bị sử dụng năng lượng chiết lưu",
        "description": ""
      },
      {
        "code": "2813",
        "name": "Sản xuất máy bơm, máy nén, vòi và van khác",
        "description": ""
      },
      {
        "code": "2814",
        "name": "Sản xuất bi, bánh răng, hộp số, các bộ phận điều khiển và truyền chuyển động",
        "description": "Nhóm này gồm: - Sản xuất bi rời, ổ bi, vòng bi tròn và các chi tiết khác; - Sản xuất thiết bị truyền tải năng lượng cơ khí như: + Trục truyền động, bao gồm: trục cam, trục khuỷu và tay biên, + Thân ổ và gối đỡ trục dùng ổ trượt. - Sản xuất bánh răng, hệ thống bánh răng và hộp số, các hộp thay đổi tốc độ khác; - Sản xuất ly hợp và khớp nối trục; - Sản xuất bánh đà và ròng rọc; - Sản xuất dây xích có khớp nối; - Sản xuất dây xích chuyển động bằng năng lượng."
      },
      {
        "code": "2815",
        "name": "Sản xuất lò nướng, lò luyện và lò nung",
        "description": ""
      },
      {
        "code": "2816",
        "name": "Sản xuất các thiết bị nâng, hạ và bốc xếp",
        "description": ""
      },
      {
        "code": "2818",
        "name": "Sản xuất dụng cụ cầm tay chạy bằng mô tơ hoặc khí nén",
        "description": ""
      },
      {
        "code": "2819",
        "name": "Sản xuất máy thông dụng khác",
        "description": ""
      },
      {
        "code": "2821",
        "name": "Sản xuất máy nông nghiệp và lâm nghiệp",
        "description": ""
      },
      {
        "code": "2822",
        "name": "Sản xuất máy công cụ và máy tạo hình kim loại",
        "description": ""
      },
      {
        "code": "2823",
        "name": "Sản xuất máy móc, thiết bị cho ngành luyện kim",
        "description": ""
      },
      {
        "code": "2824",
        "name": "Sản xuất máy khai thác mỏ và xây dựng",
        "description": ""
      },
      {
        "code": "2825",
        "name": "Sản xuất máy chế biến thực phẩm, đồ uống và thuốc lá",
        "description": ""
      },
      {
        "code": "2826",
        "name": "Sản xuất máy cho ngành dệt, may và da",
        "description": ""
      },
      {
        "code": "2829",
        "name": "Sản xuất máy chuyên dụng khác",
        "description": "Nhóm này gồm: Sản xuất các máy sử dụng đặc biệt chưa được phân vào đâu."
      },
      {
        "code": "2910",
        "name": "Sản xuất ô tô và xe có động cơ khác",
        "description": ""
      },
      {
        "code": "2920",
        "name": "Sản xuất thân xe ô tô và xe có động cơ khác, rơ moóc và bán rơ moóc",
        "description": ""
      },
      {
        "code": "2930",
        "name": "Sản xuất phụ tùng và bộ phận phụ trợ cho xe ô tô và xe có động cơ khác",
        "description": ""
      },
      {
        "code": "3011",
        "name": "Đóng tàu và cấu kiện nổi",
        "description": ""
      },
      {
        "code": "3012",
        "name": "Đóng thuyền, xuồng thể thao và giải trí",
        "description": ""
      },
      {
        "code": "3030",
        "name": "Sản xuất máy bay, tàu vũ trụ và máy móc liên quan",
        "description": ""
      },
      {
        "code": "3040",
        "name": "Sản xuất xe cơ giới chiến đấu dùng trong quân đội",
        "description": ""
      },
      {
        "code": "3091",
        "name": "Sản xuất mô tô, xe máy",
        "description": ""
      },
      {
        "code": "3092",
        "name": "Sản xuất xe đạp và xe cho người khuyết tật",
        "description": ""
      },
      {
        "code": "3099",
        "name": "Sản xuất phương tiện và thiết bị vận tải khác chưa được phân vào đâu",
        "description": ""
      },
      {
        "code": "3101",
        "name": "Sản xuất giường, tủ, bàn, ghế bằng gỗ",
        "description": ""
      },
      {
        "code": "3102",
        "name": "Sản xuất giường, tủ, bàn, ghế bằng kim loại",
        "description": ""
      },
      {
        "code": "3109",
        "name": "Sản xuất giường, tủ, bàn, ghế bằng vật liệu khác",
        "description": ""
      },
      {
        "code": "3211",
        "name": "Sản xuất đồ kim hoàn và chi tiết liên quan",
        "description": ""
      },
      {
        "code": "3212",
        "name": "Sản xuất đồ giả kim hoàn và chi tiết liên quan",
        "description": ""
      },
      {
        "code": "3220",
        "name": "Sản xuất nhạc cụ",
        "description": ""
      },
      {
        "code": "3230",
        "name": "Sản xuất dụng cụ thể dục, thể thao",
        "description": ""
      },
      {
        "code": "3240",
        "name": "Sản xuất đồ chơi, trò chơi",
        "description": ""
      },
      {
        "code": "3250",
        "name": "Sản xuất thiết bị, dụng cụ y tế, nha khoa, chỉnh hình và phục hồi chức năng",
        "description": "Nhóm này gồm: Sản xuất các dụng cụ và đồ đạc thí nghiệm, dụng cụ y tế và phẫu thuật, các thiết bị và dụng cụ phẫu thuật, thiết bị nha khoa, răng giả và các dụng cụ chỉnh răng, dụng cụ chỉnh hình và phục hồi chức năng."
      },
      {
        "code": "3290",
        "name": "Sản xuất khác chưa được phân vào đâu",
        "description": ""
      },
      {
        "code": "3311",
        "name": "Sửa chữa, bảo dưỡng các sản phẩm kim loại đúc sẵn",
        "description": ""
      },
      {
        "code": "3312",
        "name": "Sửa chữa, bảo dưỡng máy móc, thiết bị",
        "description": ""
      },
      {
        "code": "3313",
        "name": "Sửa chữa, bảo dưỡng thiết bị điện tử và quang học",
        "description": ""
      },
      {
        "code": "3314",
        "name": "Sửa chữa, bảo dưỡng thiết bị điện",
        "description": ""
      },
      {
        "code": "3319",
        "name": "Sửa chữa, bảo dưỡng thiết bị khác",
        "description": ""
      },
      {
        "code": "3320",
        "name": "Lắp đặt máy móc và thiết bị công nghiệp",
        "description": ""
      }
    ]
  },
  {
    "code": "D",
    "name": "SẢN XUẤT VÀ PHÂN PHỐI ĐIỆN, KHÍ ĐỐT, NƯỚC NÓNG, HƠI NƯỚC VÀ ĐIỀU HOÀ KHÔNG KHÍ",
    "description": "",
    "classes": [
      {
        "code": "3511",
        "name": "Sản xuất điện từ nguồn năng lượng không tái tạo",
        "description": "Nhóm này gồm: Sản xuất điện từ các nguồn không tái tạo, ví dụ như khí tự nhiên, than đá, các sản phẩm dầu mỏ, than bùn và các nhiên liệu hóa thạch khác và các nguồn không tái tạo không phát thải như hạt nhân."
      },
      {
        "code": "3512",
        "name": "Sản xuất điện từ nguồn năng lượng tái tạo",
        "description": "Nhóm này gồm: Sản xuất điện từ các nguồn tái tạo, ví dụ như khí sinh học, thủy điện, gió, năng lượng mặt trời, địa nhiệt, thủy triều, sóng biển..."
      },
      {
        "code": "3513",
        "name": "Truyền tải và phân phối điện",
        "description": "Nhóm này gồm: Việc chuyển điện từ nơi sản xuất đến các trung tâm phân phối và phân phối đến người sử dụng cuối cùng."
      },
      {
        "code": "3520",
        "name": "Sản xuất khí đốt, phân phối nhiên liệu khí bằng đường ống",
        "description": "Nhóm này gồm: - Sản xuất khí đốt, lưu trữ và phân phối khí tự nhiên hoặc tổng hợp tới người tiêu dùng cuối cùng thông qua một hệ thống đường ống chính; - Các hoạt động cung cấp gas riêng biệt bằng đường ống dẫn khí, chủ yếu là khoảng cách dài, nối người sản xuất với nhà phân phối khí hoặc giữa thành thị với nông thôn được phân vào nhóm hoạt động vận tải đường ống."
      },
      {
        "code": "3540",
        "name": "Hoạt động trung gian hoặc đại lý điện, khí đốt",
        "description": ""
      }
    ]
  },
  {
    "code": "E",
    "name": "CUNG CẤP NƯỚC; HOẠT ĐỘNG QUẢN LÝ VÀ XỬ LÝ RÁC THẢI, NƯỚC THẢI",
    "description": "",
    "classes": [
      {
        "code": "3600",
        "name": "Khai thác, xử lý và cung cấp nước",
        "description": ""
      },
      {
        "code": "3700",
        "name": "Thoát nước và xử lý nước thải",
        "description": "Ngành này gồm: Hoạt động của hệ thống thoát nước hoặc cơ sở xử lý nước thải để thu dọn, xử lý và tiêu hủy nước thải. Ngành này cũng gồm: Hoạt động của các cơ sở xử lý nước thải để tái sử dụng, ví dụ như xử lý nước thải nông nghiệp, công nghiệp, nước rửa đường, nước mưa,..."
      },
      {
        "code": "3811",
        "name": "Thu gom rác thải không độc hại",
        "description": ""
      },
      {
        "code": "3812",
        "name": "Thu gom rác thải độc hại",
        "description": "- Nhóm này gồm: Việc thu gom rác thải độc hại ở dạng rắn hoặc dạng khác như chất gây nổ, chất gỉ sét, chất dễ cháy, chất độc, chất kích thích, chất gây ung thư, chất phá hủy dần, chất lây nhiễm và các chất khác có hại cho sức khỏe con người và môi trường. Nó có thể được phân loại, xử lý, đóng gói và dán nhãn chất thải cho mục đích vận chuyển. - Nhóm này cũng gồm: + Thu gom chất thải nguy hiểm có nguồn gốc từ động vật; + Thu gom chất thải hạt nhân; + Thu gom dược phẩm hết hạn sử dụng,..."
      },
      {
        "code": "3821",
        "name": "Xử lý và tiêu hủy rác thải không độc hại",
        "description": "Nhóm này gồm: Việc xử lý trước khi tiêu hủy và xử lý khác đối với các chất thải rắn và không rắn không độc hại, như: - Hoạt động của các khu đất dùng cho tiêu hủy rác thải không độc hại; - Tiêu hủy rác thải không độc hại bằng cách đốt cháy hoặc thiêu hủy hoặc bằng các phương pháp khác có hoặc không có dẫn đến sản xuất điện hoặc hơi nước, các nhiên liệu thay thế, khí đốt sinh học, tro, tro bay hoặc các sản phẩm cho mục đích sử dụng khác; - Xử lý rác thải hữu cơ để tiêu hủy; - Xử lý rác thải hữu cơ để chôn lấp hoặc lưu trữ vĩnh viễn; - Sản xuất phân com pốt từ chất thải hữu cơ. Nhóm này cũng gồm: - Lưu trữ ngầm vĩnh viễn chất thải trong khoang địa chất sâu như mỏ muối hoặc mỏ kali; - Lưu trữ khí CO2 đã thu giữ."
      },
      {
        "code": "3822",
        "name": "Xử lý và tiêu hủy rác thải độc hại",
        "description": "Nhóm này gồm: Việc lọc bỏ xử lý trước khi đưa vào tiêu hủy các chất thải độc hại dạng rắn và không rắn, gồm các chất thải như chất gây nổ, chất gỉ sét, dễ cháy, chất độc, kích thích, chất gây ung thư, chất phá hủy dần, chất lây nhiễm và các chất khác có hại cho sức khỏe con người và môi trường."
      },
      {
        "code": "3830",
        "name": "Tái chế phế liệu",
        "description": "Nhóm này gồm: Quá trình chế biến các loại phế liệu, phế thải từ kim loại và phi kim loại thành dạng nguyên liệu thô thứ cấp để sử dụng vào các mục đích khác nhau. Quá trình chế biến được sử dụng kỹ thuật cơ học hoặc hóa học. Gồm việc tái chế các nguyên liệu từ các chất thải theo dạng là lọc và phân loại những nguyên liệu có thể tái chế từ các chất thải không độc hại (như là rác nhà bếp) hoặc lọc và phân loại các nguyên liệu có thể tái chế ở dạng hỗn hợp, ví dụ như giấy, nhựa, hộp đựng đồ uống đã qua sử dụng và kim loại thành các nhóm riêng."
      },
      {
        "code": "3900",
        "name": "Xử lý ô nhiễm và hoạt động quản lý chất thải khác",
        "description": ""
      }
    ]
  },
  {
    "code": "F",
    "name": "XÂY DỰNG",
    "description": "",
    "classes": [
      {
        "code": "4101",
        "name": "Xây dựng nhà để ở",
        "description": ""
      },
      {
        "code": "4102",
        "name": "Xây dựng nhà không để ở",
        "description": ""
      },
      {
        "code": "4211",
        "name": "Xây dựng công trình đường sắt",
        "description": ""
      },
      {
        "code": "4212",
        "name": "Xây dựng công trình đường bộ",
        "description": ""
      },
      {
        "code": "4221",
        "name": "Xây dựng công trình điện",
        "description": ""
      },
      {
        "code": "4222",
        "name": "Xây dựng công trình cấp, thoát nước",
        "description": ""
      },
      {
        "code": "4223",
        "name": "Xây dựng công trình viễn thông, thông tin liên lạc",
        "description": ""
      },
      {
        "code": "4229",
        "name": "Xây dựng công trình công ích khác",
        "description": ""
      },
      {
        "code": "4291",
        "name": "Xây dựng công trình thủy",
        "description": ""
      },
      {
        "code": "4292",
        "name": "Xây dựng công trình khai khoáng",
        "description": ""
      },
      {
        "code": "4293",
        "name": "Xây dựng công trình chế biến, chế tạo",
        "description": ""
      },
      {
        "code": "4299",
        "name": "Xây dựng công trình kỹ thuật dân dụng khác",
        "description": ""
      },
      {
        "code": "4311",
        "name": "Phá dỡ",
        "description": ""
      },
      {
        "code": "4312",
        "name": "Chuẩn bị mặt bằng",
        "description": ""
      },
      {
        "code": "4321",
        "name": "Lắp đặt hệ thống điện",
        "description": ""
      },
      {
        "code": "4322",
        "name": "Lắp đặt hệ thống cấp, thoát nước, hệ thống sưởi và điều hoà không khí",
        "description": "Nhóm này gồm: Lắp đặt, sửa chữa và bảo dưỡng hệ thống đường ống nước, hệ thống sưởi và điều hòa không khí trong nhà hoặc tại các công trình xây dựng khác, kể cả mở rộng, thay đổi, cụ thể: - Lắp đặt, sửa chữa và bảo dưỡng: + Hệ thống sưởi (điện, gas, dầu), ví dụ như máy bơm nhiệt, bộ thu nhiệt mặt trời, + Lò sưởi, tháp làm lạnh, + Thiết bị cấp, thoát nước và thiết bị vệ sinh, + Thiết bị thông gió, làm lạnh hoặc điều hòa không khí, + Thiết bị khí đốt (gas), + Đường ống dẫn hơi nước, + Hệ thống phun nước chữa cháy, + Hệ thống phun nước tưới cây, - Xây dựng hoặc lắp đặt lò sưởi bằng gạch; - Lắp đặt hệ thống ống dẫn. Nhóm này cũng gồm: Lắp đặt, sửa chữa và bảo trì hệ thống phân phối khí y tế trong bệnh viện."
      },
      {
        "code": "4329",
        "name": "Lắp đặt hệ thống xây dựng khác",
        "description": ""
      },
      {
        "code": "4330",
        "name": "Hoàn thiện công trình xây dựng",
        "description": ""
      },
      {
        "code": "4340",
        "name": "Hoạt động dịch vụ trung gian cho xây dựng chuyên dụng",
        "description": ""
      },
      {
        "code": "4390",
        "name": "Hoạt động xây dựng chuyên dụng khác",
        "description": ""
      }
    ]
  },
  {
    "code": "G",
    "name": "BÁN BUÔN VÀ BÁN LẺ",
    "description": "",
    "classes": [
      {
        "code": "4610",
        "name": "Đại lý, môi giới, đấu giá hàng hóa",
        "description": "Nhóm này bao gồm: Hoạt động trung gian, là những hoạt động tạo điều kiện thuận lợi cho các giao dịch giữa người bán và người mua để thu được phí hoặc hoa hồng mà không cung cấp hoặc sở hữu hàng hóa và dịch vụ trung gian."
      },
      {
        "code": "4620",
        "name": "Bán buôn nông, lâm sản nguyên liệu (trừ gỗ, tre, nứa) và động vật sống",
        "description": "Nhóm này gồm: - Bán buôn thóc, lúa mỳ, ngô, hạt ngũ cốc khác và hạt giống để trồng trọt; - Bán buôn hạt, quả có dầu; - Bán buôn hoa và cây; - Bán buôn lá thuốc lá chưa chế biến; - Bán buôn động vật sống, bao gồm vật nuôi; - Bán buôn da sống và bì sống; - Bán buôn da thuộc; - Bán buôn nông, lâm sản nguyên liệu khác, phế liệu, phế thải và sản phẩm phụ được sử dụng cho chăn nuôi động vật."
      },
      {
        "code": "4631",
        "name": "Bán buôn gạo, lúa mỳ, sản phẩm từ ngũ cốc khác, bột mỳ",
        "description": ""
      },
      {
        "code": "4632",
        "name": "Bán buôn thực phẩm",
        "description": "Nhóm này gồm: Bán buôn thịt và các sản phẩm từ thịt, thủy sản, rau quả, cà phê, chè, đường, sữa và các sản phẩm sữa, bánh kẹo và các sản phẩm chế biến từ ngũ cốc, bột, tinh bột..."
      },
      {
        "code": "4633",
        "name": "Bán buôn đồ uống",
        "description": "Nhóm này gồm: Bán buôn đồ uống loại có chứa cồn và không chứa cồn."
      },
      {
        "code": "4634",
        "name": "Bán buôn sản phẩm thuốc lá, thuốc lào",
        "description": ""
      },
      {
        "code": "4641",
        "name": "Bán buôn vải, hàng may mặc, giày dép",
        "description": "Nhóm này gồm: Bán buôn vải, hàng dệt, quần áo và hàng may mặc khác, giày, dép..."
      },
      {
        "code": "4649",
        "name": "Bán buôn đồ dùng khác cho gia đình",
        "description": ""
      },
      {
        "code": "4651",
        "name": "Bán buôn máy tính, thiết bị ngoại vi và phần mềm",
        "description": ""
      },
      {
        "code": "4652",
        "name": "Bán buôn thiết bị và linh kiện điện tử, viễn thông",
        "description": ""
      },
      {
        "code": "4653",
        "name": "Bán buôn máy móc, thiết bị và phụ tùng máy nông nghiệp",
        "description": ""
      },
      {
        "code": "4659",
        "name": "Bán buôn máy móc, thiết bị và phụ tùng máy khác",
        "description": "Nhóm này gồm: - Bán buôn máy móc, thiết bị văn phòng, trừ máy tính và thiết bị ngoại vi; - Bán buôn phương tiện vận tải, ví dụ như đầu máy xe lửa, xe kéo bốn bánh,..., trừ ô tô, mô tô, xe máy và xe đạp; - Bán buôn người máy thuộc dây chuyền sản xuất tự động; - Bán buôn dây điện, công tắc và thiết bị lắp đặt khác cho mục đích công nghiệp; - Bán buôn vật liệu điện khác như động cơ điện, máy biến thế; - Bán buôn vũ khí, hệ thống vũ khí và đạn dược, kể cả xe tăng và xe chiến đấu bọc thép; - Bán buôn các loại máy công cụ, dùng cho mọi loại vật liệu; - Bán buôn máy móc, thiết bị khác chưa được phân vào đâu để sử dụng cho sản xuất công nghiệp, thương mại, hàng hải và dịch vụ khác; - Bán buôn máy công cụ điều khiển bằng máy tính; - Bán buôn máy móc cho công nghiệp dệt, may, máy may, máy dệt kim; - Bán buôn thiết bị và dụng cụ đo lường; - Bán buôn các loại máy công nghiệp cho công công nghệ bồi đắp vật liệu (hay còn gọi là in 3D); - Bán buôn máy móc và thiết bị khai thác mỏ, xây dựng và kỹ thuật dân dụng, ví dụ như máy xúc,...; - Bán buôn rào chắn giao thông, cột chắn xe, đèn đường, đèn giao thông, biển báo giao thông, trạm dừng xe buýt, xe điện,..."
      },
      {
        "code": "4661",
        "name": "Bán buôn ô tô và xe có động cơ khác",
        "description": ""
      },
      {
        "code": "4662",
        "name": "Bán buôn phụ tùng và các bộ phận phụ trợ của ô tô và xe có động cơ khác",
        "description": "Nhóm này gồm: - Bán buôn các loại phụ tùng, bộ phận, linh kiện của ô tô và xe có động cơ khác loại mới và loại đã qua sử dụng, ví dụ như săm, lốp, đèn, các phụ tùng điện, nội thất ô tô và xe có động cơ khác... - Bán buôn ắc quy và thiết bị tích trữ năng lượng cho ô tô và xe có động cơ khác."
      },
      {
        "code": "4663",
        "name": "Bán buôn mô tô, xe máy, phụ tùng và các bộ phận phụ trợ của mô tô, xe máy",
        "description": ""
      },
      {
        "code": "4671",
        "name": "Bán buôn nhiên liệu rắn, lỏng, khí và các sản phẩm liên quan",
        "description": "Nhóm này gồm: Bán buôn nhiên liệu hóa thạch, nhiên liệu ít các-bon hoặc không các-bon, dầu bôi trơn, mỡ bôi trơn như: - Than đá, than củi, than cốc, gỗ nhiên liệu, viên nén gỗ, nhiên liệu sinh khối, naphtha; - Dầu mỏ, nhiên liệu diesel, xăng, dầu nhiên liệu, dầu sưởi, dầu hỏa, nhiên liệu sinh học, nhiên liệu các-bon tái chế, nhiên liệu tổng hợp pha trộn hoặc nguyên chất; - Khí dầu mỏ hóa lỏng, khí tự nhiên hóa lỏng, khí butan và proban và các dạng sinh học và tái tạo liên quan, pha trộn hoặc tinh khiết; - Dầu bôi trơn, mỡ bôi trơn, sản phẩm dầu mỏ tinh chế."
      },
      {
        "code": "4672",
        "name": "Bán buôn kim loại và quặng kim loại",
        "description": "Nhóm này gồm: - Bán buôn quặng sắt và quặng kim loại màu; - Bán buôn sắt và kim loại màu ở dạng nguyên sinh; - Bán buôn bán thành phẩm bằng sắt và kim loại màu...; - Bán buôn vàng và kim loại quý khác; - Bán buôn bán thành phẩm kim loại và quặng kim loại. Nhóm này cũng gồm: - Bán buôn thép tấm bằng tài khoản riêng, bao gồm cả hoạt động cắt thành các tấm nhỏ để bán; - Bán buôn vàng và kim loại quý khác, mua từ hộ gia đình hoặc doanh nghiệp và bán cho các nhà bán lẻ, người sử dụng là doanh nghiệp công nghiệp, doanh nghiệp thương mại, cơ quan, nhà nghề hoặc cho các nhà bán buôn khác."
      },
      {
        "code": "4673",
        "name": "Bán buôn vật liệu, thiết bị lắp đặt khác trong xây dựng",
        "description": "Nhóm này gồm: - Bán buôn gỗ cây, tre, nứa; - Bán buôn sản phẩm từ sơ chế gỗ; - Bán buôn sơn và véc ni; - Bán buôn vật liệu xây dựng như: cát, sỏi; - Bán buôn giấy dán tường và trải sàn nhà; - Bán buôn kính phẳng; - Bán buôn đồ ngũ kim và khóa; - Bán buôn ống nối, khớp nối và chi tiết lắp ghép khác; - Bán buôn máy nước nóng và nồi hơi; - Bán buôn thiết bị vệ sinh như: Bồn tắm, chậu rửa, bệ xí, đồ sứ vệ sinh khác; - Bán buôn thiết bị lắp đặt vệ sinh như: Ống, ống dẫn, khớp nối, vòi, cút chữ T, ống cao su,...; - Bán buôn dụng cụ cầm tay: Búa, cưa, tua vít, dụng cụ cầm tay khác, kể cả dụng cụ cầm tay dùng điện."
      },
      {
        "code": "4679",
        "name": "Bán buôn chuyên doanh khác chưa được phân vào đâu",
        "description": "Nhóm này gồm: - Bán buôn hóa chất công nghiệp như: Anilin, mực in, tinh dầu, khí công nghiệp, keo hóa học, chất màu, nhựa tổng hợp, methanol, parafin, dầu thơm và hương liệu, sôđa, muối công nghiệp, axít và lưu huỳnh, dẫn xuất của tinh bột...; - Bán buôn phân bón và sản phẩm nông hóa học; - Bán buôn vật liệu bằng chất dẻo dạng nguyên sinh; - Bán buôn cao su; - Bán buôn sợi dệt...; - Bán buôn giấy, như giấy dạng rời, bột giấy; - Bán buôn đá quý; - Bán buôn phế liệu, phế thải kim loại/phi kim loại dùng làm nguyên liệu để tái chế, bao gồm thu mua, sắp xếp, phân loại, làm sạch những hàng hóa đã qua sử dụng để lấy ra những phụ tùng có thể sử dụng lại (ví dụ: tháo dỡ ô tô, máy tính, ti vi cũ, các thiết bị khác...), đóng gói, lưu kho và phân phối nhưng không thực hiện hoạt động nào làm biến đổi hàng hóa. Những hàng hóa được mua bán là những loại còn có giá trị. Nhóm này cũng gồm: Bán buôn chất lỏng (tinh dầu) thuốc lá điện tử. Nhóm này gồm: - Bán buôn phân bón; - Bán buôn thuốc trừ sâu; - Bán buôn hóa chất khác sử dụng trong nông nghiệp: Thuốc trừ cỏ, thuốc chống nảy mầm, thuốc kích thích sự tăng trưởng của cây, các hóa chất khác sử dụng trong nông nghiệp."
      },
      {
        "code": "4690",
        "name": "Bán buôn tổng hợp",
        "description": ""
      },
      {
        "code": "4719",
        "name": "Bán lẻ tổng hợp khác",
        "description": ""
      },
      {
        "code": "4721",
        "name": "Bán lẻ lương thực",
        "description": ""
      },
      {
        "code": "4722",
        "name": "Bán lẻ thực phẩm",
        "description": "Nhóm này gồm bán lẻ các mặt hàng: - Rau, quả tươi, đông lạnh hoặc được bảo quản, chế biến; - Sữa, sản phẩm từ sữa và trứng; - Thịt và sản phẩm từ thịt gia súc, gia cầm, tươi, đông lạnh và chế biến; - Hàng thủy sản tươi, đông lạnh và chế biến; - Bánh, mứt, kẹo, các sản phẩm chế biến từ bột, tinh bột; - Thực phẩm khác."
      },
      {
        "code": "4723",
        "name": "Bán lẻ đồ uống",
        "description": ""
      },
      {
        "code": "4724",
        "name": "Bán lẻ sản phẩm thuốc lá, thuốc lào",
        "description": ""
      },
      {
        "code": "4730",
        "name": "Bán lẻ nhiên liệu động cơ",
        "description": ""
      },
      {
        "code": "4740",
        "name": "Bán lẻ thiết bị công nghệ thông tin và truyền thông",
        "description": ""
      },
      {
        "code": "4751",
        "name": "Bán lẻ vải, len, sợi, chỉ khâu và hàng dệt khác",
        "description": "Nhóm này gồm: - Bán lẻ vải; - Bán lẻ len, sợi; - Bán lẻ nguyên liệu chính để làm chăn, thảm thêu hoặc đồ thêu; - Bán lẻ hàng dệt khác; - Bán lẻ đồ kim chỉ: Kim, chỉ khâu... - Bán lẻ vải bạt tarpaulins; Nhóm này cũng gồm: Bán lẻ khăn trải giường."
      },
      {
        "code": "4752",
        "name": "Bán lẻ đồ ngũ kim, sơn, kính, vật liệu và thiết bị lắp đặt khác trong xây dựng",
        "description": "Nhóm này gồm: - Bán lẻ đồ ngũ kim; - Bán lẻ sơn, véc ni và sơn bóng; - Bán lẻ dung môi, xăng trắng và các sản phẩm hóa phẩm khác; - Bán lẻ kính phẳng; - Bán lẻ vật liệu xây dựng khác, như: gạch, ngói, gạch ốp lát, gỗ, ván sàn, vật liệu cách nhiệt...; - Bán lẻ thiết bị vệ sinh và thiết bị sưởi; - Bán lẻ vật liệu tự làm, vật liệu và thiết bị điện và ống nước; - Bán lẻ dụng cụ như: búa, cưa, tua vít và các dụng cụ cầm tay khác, kể cả dụng cụ cầm tay dùng điện; - Bán lẻ vật liệu năng lượng tái tạo, ví dụ: bộ thu năng lượng mặt trời không dùng điện, tấm quang điện, không bao gồm lắp đặt; - Bán lẻ thiết bị báo cháy bằng điện hoặc điện tử, bình chữa cháy, hệ thống khẩn cấp, hệ thống hút khói, két an toàn và két sắt, không bao gồm dịch vụ lắp đặt hoặc bảo dưỡng; - Bán lẻ cửa ra vào, cửa sổ và cửa chớp làm từ mọi chất liệu; - Bán lẻ thiết bị và dụng cụ làm vườn và thiết kế cảnh quan, ví dụ: máy cắt cỏ...; - Bán lẻ phòng tắm hơi, bể bơi spa, bao gồm cả các thiết bị phụ trợ, không bao gồm lắp đặt."
      },
      {
        "code": "4753",
        "name": "Bán lẻ thảm, đệm, chăn, màn, rèm, vật liệu phủ tường và sàn",
        "description": ""
      },
      {
        "code": "4761",
        "name": "Bán lẻ sách, báo, tạp chí, văn phòng phẩm",
        "description": ""
      },
      {
        "code": "4762",
        "name": "Bán lẻ thiết bị, dụng cụ thể dục, thể thao",
        "description": ""
      },
      {
        "code": "4763",
        "name": "Bán lẻ trò chơi, đồ chơi",
        "description": ""
      },
      {
        "code": "4769",
        "name": "Bán lẻ sản phẩm văn hóa, giải trí khác chưa phân vào đâu",
        "description": ""
      },
      {
        "code": "4771",
        "name": "Bán lẻ hàng may mặc, giày, dép, hàng da và giả da",
        "description": "Nhóm này gồm: Bán lẻ chuyên doanh các mặt hàng: - Bán lẻ hàng may mặc; - Bán lẻ hàng lông thú; - Bán lẻ phụ kiện hàng may mặc khác như găng tay, khăn, bít tất, cà vạt, dây đeo quần...; - Bán lẻ giày, dép; - Bán lẻ đồ da và giả da; - Bán lẻ hàng du lịch bằng da và giả da."
      },
      {
        "code": "4772",
        "name": "Bán lẻ thuốc, dụng cụ y tế, mỹ phẩm và vật phẩm vệ sinh",
        "description": "Nhóm này gồm: - Bán lẻ thuốc chữa bệnh; - Bán lẻ dụng cụ y tế và đồ chỉnh hình; - Bán lẻ nước hoa, mỹ phẩm và vật phẩm vệ sinh."
      },
      {
        "code": "4773",
        "name": "Bán lẻ hàng hóa khác mới (trừ ô tô, mô tô, xe máy và các bộ phận phụ trợ)",
        "description": "Nhóm này gồm: - Bán lẻ máy ảnh, phim ảnh, thiết bị quang học và thiết bị chính xác; - Bán lẻ kính đeo mắt, kể cả các hoạt động phục vụ cho việc bán lẻ kính mắt như đo độ cận, độ viễn, mài lắp kính; - Bán lẻ đồng hồ và đồ trang sức; - Bán lẻ hoa tươi, cây cảnh, hạt giống, phân bón, động vật cảnh và thức ăn cho động vật cảnh; - Bán lẻ hàng lưu niệm, hàng đan lát, hàng thủ công mỹ nghệ, đồ thờ cúng và hàng hóa phục vụ mục đích tín ngưỡng khác; - Bán lẻ tranh, tượng và các tác phẩm nghệ thuật khác mang tính thương mại; - Bán lẻ dầu hỏa, bình gas, than, củi,... sử dụng làm nhiên liệu để đun nấu trong gia đình; - Bán lẻ hàng hóa sử dụng để lau chùi, quét dọn, làm vệ sinh như chổi, bàn chải, khăn lau...; - Bán lẻ tem và tiền xu; - Bán lẻ hàng hóa phi lương thực, thực phẩm chưa được phân vào nhóm nào."
      },
      {
        "code": "4774",
        "name": "Bán lẻ hàng hóa đã qua sử dụng",
        "description": ""
      },
      {
        "code": "4781",
        "name": "Bán lẻ ô tô và xe có động cơ khác",
        "description": "Nhóm này gồm: Bán lẻ ô tô và xe có động cơ khác không kể người lái, loại mới và loại đã qua sử dụng, bao gồm cả xe điện."
      },
      {
        "code": "4782",
        "name": "Bán lẻ phụ tùng và các bộ phận phụ trợ của ô tô và xe có động cơ khác",
        "description": ""
      },
      {
        "code": "4783",
        "name": "Bán lẻ mô tô, xe máy, phụ tùng và các bộ phận phụ trợ của mô tô, xe máy",
        "description": "Nhóm này gồm: - Bán lẻ mô tô, xe máy (loại mới và loại đã qua sử dụng); - Bán lẻ phụ tùng và các bộ phận phụ trợ của mô tô, xe máy (loại mới và loại đã qua sử dụng);"
      },
      {
        "code": "4790",
        "name": "Hoạt động dịch vụ trung gian bán lẻ",
        "description": ""
      }
    ]
  },
  {
    "code": "H",
    "name": "VẬN TẢI, KHO BÃI",
    "description": "",
    "classes": [
      {
        "code": "4911",
        "name": "Vận tải hành khách đường sắt",
        "description": "Nhóm này gồm: Vận tải hành khách và/hoặc hàng hóa bằng tàu hỏa chạy trên mạng lưới đường sắt được trải rộng trên một vùng, một khu vực địa lý hoặc vận hành ở khoảng cách ngắn tại mạng đường sắt nội bộ. Nhóm này cũng gồm: Vận tải hành khách bằng đường bộ trong nội thành, ngoại thành bằng tàu như: tàu điện ngầm, tàu điện chạy bằng tuyến đường ray trên mặt đất hoặc tuyến đường ray trên cao,... Đặc thù của các phương thức vận tải này là chạy trên các tuyến đường theo lịch trình, giờ cố định, các bến đỗ cố định để đón, trả khách."
      },
      {
        "code": "4912",
        "name": "Vận tải hàng hóa đường sắt",
        "description": ""
      },
      {
        "code": "4921",
        "name": "Vận tải hành khách bằng xe buýt trong nội thành",
        "description": ""
      },
      {
        "code": "4922",
        "name": "Vận tải hành khách bằng xe buýt giữa nội thành và ngoại thành, liên tỉnh",
        "description": "Nhóm này gồm: Vận tải hành khách bằng xe buýt các điểm giữa nội thành và ngoại thành, với các tỉnh, thành phố khác theo lịch trình, giờ cố định, các bến đỗ cố định để đón, trả khách."
      },
      {
        "code": "4929",
        "name": "Vận tải hành khách bằng xe buýt loại khác",
        "description": ""
      },
      {
        "code": "4932",
        "name": "Vận tải hành khách đường bộ khác",
        "description": "Nhóm này gồm: - Vận tải hành khách bằng xe khách nội tỉnh, liên tỉnh; - Cho thuê xe có người lái để vận tải hành khách, hợp đồng chở khách đi tham quan, du lịch hoặc mục đích khác; - Hoạt động của đường sắt trong phạm vi sân bay; - Hoạt động của đường sắt leo núi, đường cáp treo trên không, thang máy trượt tuyết... nếu chúng không phải là một phần của hệ thống giao thông nội thành, ngoại thành hoặc không gắn với hoạt động của khu trượt tuyết; - Hoạt động quản lý điều hành vận tải hành khách."
      },
      {
        "code": "4933",
        "name": "Vận tải hàng hóa bằng đường bộ",
        "description": "Nhóm này gồm: - Vận tải hàng hóa thông thường: vận tải gỗ, vận tải gia súc, nông lâm sản, hàng hóa thông thường khác; - Vận tải hàng hóa bằng xe chuyên dụng: xe bồn chở chất lỏng, xe chở hóa chất, xe đông lạnh; - Vận tải hàng nặng, vận tải container; - Vận tải phế liệu, phế thải, rác thải, không đi kèm hoạt động thu gom hoặc đổ phế liệu, phế thải, rác thải. Nhóm này cũng gồm: - Hoạt động chuyển đồ đạc; - Cho thuê xe tải có người lái; - Vận tải hàng hóa bằng xe động vật hoặc người kéo."
      },
      {
        "code": "4940",
        "name": "Vận tải đường ống",
        "description": ""
      },
      {
        "code": "5011",
        "name": "Vận tải hành khách ven biển và viễn dương",
        "description": "Nhóm này gồm: - Vận tải hành khách ven biển và viễn dương, theo lịch trình hoặc không theo lịch trình; - Hoạt động của tàu thuyền du lịch hoặc tham quan; - Hoạt động của phà, tàu, xuồng taxi. Nhóm này cũng gồm: Cho thuê tàu, thuyền có kèm thủy thủ đoàn cho vận tải ven biển và viễn dương (ví dụ đối với tàu đánh cá)."
      },
      {
        "code": "5012",
        "name": "Vận tải hàng hóa ven biển và viễn dương",
        "description": "Nhóm này gồm: - Vận tải hàng hóa ven biển hoặc viễn dương, theo lịch trình hoặc không theo lịch trình; - Vận tải bằng tàu kéo, tàu đẩy, dàn khoan dầu..."
      },
      {
        "code": "5021",
        "name": "Vận tải hành khách đường thủy nội địa",
        "description": "Nhóm này gồm: - Vận tải hành khách đường sông, hồ, kênh, rạch bằng phương tiện cơ giới và thô sơ; - Vận tải hành khách bằng đường thủy để tham quan. Nhóm này cũng gồm: - Cho thuê tàu thuyền có thủy thủ đoàn, cho thuê ghe, xuồng có người lái để vận tải hành khách trên sông, hồ, kể cả kênh, rạch; - Hoạt động của tàu thuyền du lịch hoặc tham quan trên đường thủy nội địa."
      },
      {
        "code": "5022",
        "name": "Vận tải hàng hóa đường thủy nội địa",
        "description": "Nhóm này gồm: Vận tải hàng hóa đường sông, hồ, kênh, rạch bằng phương tiện cơ giới và thô sơ. Nhóm này cũng gồm: Cho thuê tàu có thủy thủ đoàn, cho thuê ghe, xuồng có người lái để vận tải hàng hóa trên sông, hồ, kể cả kênh, rạch."
      },
      {
        "code": "5110",
        "name": "Vận tải hành khách hàng không",
        "description": "Nhóm này gồm: - Vận tải hành khách bằng đường không các chuyến bay thường lệ và không thường lệ; - Vận tải hành khách các chuyến bay chở thuê; - Vận tải hành khách các chuyến bay ngắm cảnh, tham quan. Nhóm này cũng gồm: Cho thuê máy bay có người lái để vận tải hành khách;"
      },
      {
        "code": "5120",
        "name": "Vận tải hàng hóa hàng không",
        "description": "Nhóm này gồm: - Vận tải hàng hóa bằng đường không các chuyến bay thường lệ hoặc không thường lệ; - Vận tải hàng hóa bằng đường không các chuyến bay không theo lịch trình; - Phóng vệ tinh và tàu vũ trụ. Nhóm này cũng gồm: Thuê máy bay có người lái để vận tải hàng hóa."
      },
      {
        "code": "5210",
        "name": "Kho bãi và lưu giữ hàng hóa",
        "description": "Nhóm này gồm: - Hoạt động lưu giữ, kho bãi đối với các loại hàng hóa trong hầm chứa, bể chứa, kho chứa hàng hóa thông thường, kho đông lạnh...; - Việc lưu kho đồ đạc không phải là một phần của dịch vụ vận chuyển. Nhóm này cũng gồm: - Lưu giữ hàng hóa trong kho ngoại quan; - Việc làm lạnh liên quan đến kho bãi và lưu giữ; - Hoạt động lưu trữ tài liệu vật lý và hồ sơ giấy."
      },
      {
        "code": "5221",
        "name": "Hoạt động dịch vụ hỗ trợ trực tiếp cho vận tải đường sắt",
        "description": ""
      },
      {
        "code": "5222",
        "name": "Hoạt động dịch vụ hỗ trợ trực tiếp cho vận tải đường thủy",
        "description": "Nhóm này gồm: - Hoạt động liên quan tới vận tải hành khách, động vật hoặc hàng hóa bằng đường thủy; - Hoạt động của cảng biển, cảng sông, bến tàu, cầu tàu; - Hoạt động của các cửa ngầm đường thủy; - Hoạt động hoa tiêu, lai dắt, đưa tàu cập bến; - Hoạt động của cơ sở tiếp nhận cảng và tiếp nhiên liệu; - Hoạt động của tàu, xà lan, Lash, hoạt động cứu hộ; - Hoạt động của trạm hải đăng; - Dịch vụ thông tin sông; - Lưu trữ tàu thuyền mùa đông. Nhóm này cũng gồm: Hoạt động bảo trì các công trình thuộc kết cấu hạ tầng đường thủy."
      },
      {
        "code": "5223",
        "name": "Hoạt động dịch vụ hỗ trợ trực tiếp cho vận tải hàng không",
        "description": "Nhóm này gồm: - Hoạt động liên quan tới vận tải hành khách, động vật hoặc hàng hóa hàng không như: + Hoạt động điều hành hành khách đi, đến tại ga hàng không; + Hoạt động điều hành bay, kiểm soát không lưu; + Hoạt động dịch vụ mặt đất ở sân bay... - Bảo trì hạ tầng hàng không; - Bãi đậu và lưu trữ máy bay. Nhóm này cũng gồm: Hoạt động cứu hỏa và phòng chống cháy nổ tại sân bay."
      },
      {
        "code": "5224",
        "name": "Bốc xếp hàng hóa",
        "description": "Nhóm này gồm: - Xếp hàng hóa hoặc hành lý của hành khách lên phương tiện vận tải hoặc dỡ hàng hóa hoặc hành lý của hành khách từ phương tiện vận tải; - Bốc vác hàng hóa; - Bốc, dỡ hàng hóa toa xe lửa. Nhóm này cũng gồm: - Cung cấp thiết bị nâng và xử lý có người điều khiển, ví dụ: cần trục, cần cẩu... để vận chuyển hàng hóa; - Di chuyển hàng hóa tại các khu công nghiệp bằng các thiết bị vận tải không phù hợp để sử dụng trên đường bộ."
      },
      {
        "code": "5225",
        "name": "Hoạt động dịch vụ hỗ trợ trực tiếp cho vận tải đường bộ",
        "description": "Nhóm này gồm: - Hoạt động liên quan tới vận tải hành khách, động vật hoặc hàng hóa bằng đường bộ; - Hoạt động của các bến, bãi ô tô, điểm bốc xếp hàng hóa; - Hoạt động quản lý đường bộ, cầu, đường hầm, bãi đỗ xe ô tô hoặc gara ô tô, bãi để xe đạp, xe máy; - Lai dắt, cứu hộ đường bộ; - Hoạt động của trạm thu phí đường bộ; - Hoạt động giám sát vận chuyển hàng hóa bằng xe tải. Nhóm này cũng gồm: Hóa lỏng khí/hoặc tái khí hóa khí tự nhiên để vận chuyển đường bộ."
      },
      {
        "code": "5229",
        "name": "Hoạt động dịch vụ hỗ trợ khác liên quan đến vận tải",
        "description": ""
      },
      {
        "code": "5231",
        "name": "Hoạt động dịch vụ trung gian cho vận tải hàng hóa",
        "description": ""
      },
      {
        "code": "5232",
        "name": "Hoạt động dịch vụ trung gian cho vận tải hành khách",
        "description": ""
      },
      {
        "code": "5310",
        "name": "Bưu chính",
        "description": ""
      },
      {
        "code": "5320",
        "name": "Chuyển phát",
        "description": ""
      },
      {
        "code": "5330",
        "name": "Hoạt động dịch vụ trung gian cho hoạt động bưu chính và chuyển phát",
        "description": ""
      }
    ]
  },
  {
    "code": "I",
    "name": "DỊCH VỤ LƯU TRÚ VÀ ĂN UỐNG",
    "description": "",
    "classes": [
      {
        "code": "5510",
        "name": "Khách sạn và dịch vụ lưu trú tương tự",
        "description": ""
      },
      {
        "code": "5520",
        "name": "Dịch vụ lưu trú ngắn ngày khác",
        "description": "Nhóm này gồm: Hoạt động cung cấp dịch vụ lưu trú ngắn hạn, thường là hàng ngày hoặc hàng tuần trong các phòng, nhà, căn hộ hoặc chung cư được trang bị đồ nội thất chủ yếu dành cho du khách lưu trú ngắn ngày và không cung cấp các dịch vụ cho khách hàng trực tiếp tại nơi lưu trú và rất ít dịch vụ bổ sung (nếu có). Bao gồm dịch vụ cung cấp cơ sở lưu trú như: Biệt thự du lịch; căn hộ du lịch; căn hộ nghỉ dưỡng; căn hộ và phòng không có dịch vụ dọn phòng; nhà nghỉ trên núi; nhà nghỉ ở vùng quê; loại hình lưu trú nhỏ chỉ cung cấp chỗ nghỉ qua đêm và phục vụ bữa sáng cho khách lưu trú (nhà nghỉ B&B); nhà nghỉ được cung cấp bởi các hộ gia đình tư nhân;..."
      },
      {
        "code": "5530",
        "name": "Hoạt động dịch vụ trung gian cho dịch vụ lưu trú",
        "description": ""
      },
      {
        "code": "5590",
        "name": "Cơ sở lưu trú khác",
        "description": "Nhóm này gồm: Dịch vụ cung cấp dịch vụ lưu trú tạm thời là các phòng đơn, phòng ở chung hoặc nhà ở tập thể như ký túc xá sinh viên, nhà ở tập thể của các trường đại học; nhà trọ, nhà tập thể công nhân cho học sinh, sinh viên, người lao động nước ngoài và các đối tượng khác, chỗ nghỉ trọ trên xe lưu động, lều trại du lịch."
      },
      {
        "code": "5610",
        "name": "Nhà hàng và các dịch vụ ăn uống phục vụ lưu động",
        "description": "Nhóm này gồm: Hoạt động cung cấp dịch vụ ăn uống tới khách hàng, trong đó khách hàng được phục vụ hoặc khách hàng tự chọn các món ăn được bày sẵn, có thể ăn tại chỗ hoặc mua món ăn đem về. Nhóm này cũng gồm hoạt động chuẩn bị, chế biến và phục vụ đồ ăn uống tại xe bán đồ ăn lưu động hoặc xe kéo, đẩy bán rong. Cụ thể: - Nhà hàng, quán ăn; - Quán ăn tự phục vụ; - Quán ăn nhanh; - Cửa hàng bán đồ ăn mang về; - Xe thùng bán kem; - Xe bán hàng ăn lưu động; - Hàng ăn uống trên phố, trong chợ. Nhóm này cũng gồm: - Hoạt động nhà hàng, quán bar trên tàu, thuyền, phương tiện vận tải nếu hoạt động này được coi là một hoạt động riêng biệt mà không phải là một phần của dịch vụ vận tải và được thực hiện bởi đơn vị khác; - Hoạt động nhà hàng trong khách sạn nếu hoạt động này được coi là một đơn vị hoạt động riêng biệt, không phải là một phần hoạt động của khách sạn; - Hoạt động nhà hàng bán hàng mang đi trong siêu thị nếu được thực hiện bởi các đơn vị riêng biệt và không phải là một phần hoạt động của siêu thị. Nhóm này gồm: Hoạt động cung cấp dịch vụ ăn uống tại nhà hàng, quán ăn, hàng ăn uống. Khách hàng được phục vụ hoặc khách hàng tự chọn các món ăn được bày sẵn, có thể ăn tại chỗ hoặc mua món ăn đem về."
      },
      {
        "code": "5621",
        "name": "Cung cấp dịch vụ ăn uống theo hợp đồng không thường xuyên với khách hàng",
        "description": "Nhóm này gồm: Cung cấp dịch vụ ăn uống theo hợp đồng với khách hàng, tại địa điểm mà khách hàng yêu cầu như tiệc hội nghị cơ quan, doanh nghiệp, đám cưới, các công việc gia đình khác..."
      },
      {
        "code": "5629",
        "name": "Dịch vụ ăn uống khác",
        "description": ""
      },
      {
        "code": "5630",
        "name": "Dịch vụ phục vụ đồ uống",
        "description": "Nhóm này gồm: Hoạt động chế biến và phục vụ đồ uống cho khách hàng tiêu dùng tại chỗ của các quán bar, quán karaoke, quán rượu; quán giải khát có khiêu vũ (trong đó cung cấp dịch vụ đồ uống là chủ yếu); hàng bia, quán bia; quán cafe, nước hoa quả, giải khát; dịch vụ đồ uống khác như: nước mía, nước sinh tố, quán chè, xe bán rong đồ uống... Dịch vụ phục vụ đồ uống có thể bao gồm việc hát nhạc. Nhóm này cũng gồm: - Hoạt động chế biến và phục vụ đồ uống cho khách hàng tiêu dùng tại chỗ của các câu lạc bộ đêm; - Hoạt động chế biến và phục vụ đồ uống cho khách hàng tiêu dùng tại chỗ của các quán bar trên các phương tiện vận tải, ví dụ như tàu hoặc thuyền nếu được thực hiện bởi các đơn vị riêng biệt; - Hoạt động nhượng quyền đồ uống, ví dụ tại các cơ sở thể thao hoặc các cơ sở tương tự; - Hoạt động cung cấp đồ uống lưu động trên các phương tiện vận tải và trong các cơ sở vận tải, nếu hoạt động này được coi là một hoạt động riêng biệt mà không phải là một phần của dịch vụ vận tải và được thực hiện bởi đơn vị khác."
      },
      {
        "code": "5640",
        "name": "Hoạt động dịch vụ trung gian cho dịch vụ ăn uống",
        "description": ""
      }
    ]
  },
  {
    "code": "J",
    "name": "HOẠT ĐỘNG XUẤT BẢN, PHÁT SÓNG, SẢN XUẤT VÀ PHÂN PHỐI NỘI DUNG",
    "description": "",
    "classes": [
      {
        "code": "5811",
        "name": "Xuất bản sách",
        "description": ""
      },
      {
        "code": "5812",
        "name": "Xuất bản báo",
        "description": ""
      },
      {
        "code": "5813",
        "name": "Xuất bản tạp chí và các ấn phẩm định kỳ",
        "description": ""
      },
      {
        "code": "5819",
        "name": "Hoạt động xuất bản khác",
        "description": ""
      },
      {
        "code": "5821",
        "name": "Xuất bản trò chơi điện tử",
        "description": ""
      },
      {
        "code": "5829",
        "name": "Xuất bản phần mềm khác",
        "description": "Nhóm này gồm: - Xuất bản các phần mềm khác, như: hệ thống điều hành, kinh doanh và các ứng dụng khác (ví dụ: công nghệ sổ cái phân tán (DLT) hoặc phần mềm công nghệ tài chính); phần mềm bảo mật máy tính hoặc phần mềm an ninh mạng; phần mềm tạo mô hình; - Hoạt động dịch vụ trung gian cho xuất bản phần mềm; - Hoạt động của thị trường tải phần mềm."
      },
      {
        "code": "5911",
        "name": "Hoạt động sản xuất phim điện ảnh, video và chương trình truyền hình",
        "description": "Nhóm này gồm: - Sản xuất các phim điện ảnh, video, tác phẩm nghe nhìn và các chương trình truyền hình hoặc chương trình quảng cáo trên truyền hình; - Sản xuất phim hoạt hình; - Sản xuất các chương trình tin tức truyền hình hoặc video tin tức; - Sản xuất video blog; - Sản xuất podcast dạng video (một dạng nội dung số kết hợp cả âm thanh và hình ảnh, thường được phát hành trên các nền tảng như YouTube, Spotify (bản video), TikTok,...)."
      },
      {
        "code": "5912",
        "name": "Hoạt động hậu kỳ phim điện ảnh, video và chương trình truyền hình",
        "description": ""
      },
      {
        "code": "5913",
        "name": "Hoạt động phát hành phim điện ảnh, video và chương trình truyền hình",
        "description": ""
      },
      {
        "code": "5914",
        "name": "Hoạt động chiếu phim",
        "description": "Nhóm này gồm: Hoạt động chiếu phim điện ảnh và phim video trong các rạp, ngoài trời hoặc các phương tiện chiếu phim khác. Nhóm này cũng gồm: Hoạt động chiếu phim trong các liên hoan phim."
      },
      {
        "code": "5920",
        "name": "Hoạt động ghi âm và xuất bản âm nhạc",
        "description": ""
      },
      {
        "code": "6010",
        "name": "Hoạt động phát thanh và phân phối âm thanh",
        "description": ""
      },
      {
        "code": "6031",
        "name": "Hoạt động thông tấn",
        "description": ""
      },
      {
        "code": "6039",
        "name": "Hoạt động các trang mạng xã hội và hoạt động phân phối nội dung khác",
        "description": ""
      },
      {
        "code": "6110",
        "name": "Hoạt động viễn thông có dây, không dây và vệ tinh",
        "description": ""
      },
      {
        "code": "6190",
        "name": "Hoạt động viễn thông khác",
        "description": ""
      },
      {
        "code": "6219",
        "name": "Lập trình máy tính khác",
        "description": ""
      },
      {
        "code": "6220",
        "name": "Tư vấn máy tính và quản lý cơ sở hạ tầng máy tính",
        "description": ""
      },
      {
        "code": "6290",
        "name": "Hoạt động dịch vụ máy tính và công nghệ thông tin khác",
        "description": ""
      },
      {
        "code": "6390",
        "name": "Hoạt động cổng tìm kiếm web và các dịch vụ thông tin khác",
        "description": ""
      }
    ]
  },
  {
    "code": "L",
    "name": "HOẠT ĐỘNG TÀI CHÍNH, NGÂN HÀNG VÀ BẢO HIỂM",
    "description": "",
    "classes": [
      {
        "code": "6411",
        "name": "Hoạt động Ngân hàng trung ương",
        "description": ""
      },
      {
        "code": "6419",
        "name": "Hoạt động trung gian tiền tệ khác",
        "description": ""
      },
      {
        "code": "6421",
        "name": "Hoạt động công ty nắm giữ tài sản",
        "description": ""
      },
      {
        "code": "6422",
        "name": "Hoạt động của các kênh dẫn vốn",
        "description": ""
      },
      {
        "code": "6431",
        "name": "Hoạt động quỹ thị trường tiền tệ",
        "description": ""
      },
      {
        "code": "6432",
        "name": "Hoạt động quỹ đầu tư phi thị trường tiền tệ",
        "description": ""
      },
      {
        "code": "6433",
        "name": "Hoạt động quỹ tín thác, tài sản và tài khoản đại lý",
        "description": ""
      },
      {
        "code": "6491",
        "name": "Hoạt động cho thuê tài chính",
        "description": ""
      },
      {
        "code": "6492",
        "name": "Hoạt động tài trợ thương mại quốc tế",
        "description": ""
      },
      {
        "code": "6493",
        "name": "Hoạt động bao thanh toán",
        "description": ""
      },
      {
        "code": "6494",
        "name": "Hoạt động chứng khoán hóa",
        "description": ""
      },
      {
        "code": "6495",
        "name": "Hoạt động cấp tín dụng khác",
        "description": ""
      },
      {
        "code": "6511",
        "name": "Bảo hiểm nhân thọ",
        "description": ""
      },
      {
        "code": "6512",
        "name": "Bảo hiểm phi nhân thọ",
        "description": ""
      },
      {
        "code": "6513",
        "name": "Bảo hiểm sức khỏe",
        "description": ""
      },
      {
        "code": "6520",
        "name": "Tái bảo hiểm",
        "description": ""
      },
      {
        "code": "6530",
        "name": "Hoạt động quỹ hưu trí",
        "description": ""
      },
      {
        "code": "6611",
        "name": "Quản lý thị trường tài chính",
        "description": ""
      },
      {
        "code": "6612",
        "name": "Môi giới hợp đồng hàng hóa và chứng khoán",
        "description": "Nhóm này gồm: - Giao dịch trong thị trường tài chính thay mặt người khác (môi giới cổ phiếu) và các hoạt động liên quan; - Môi giới chứng khoán; - Môi giới cổ phiếu quỹ đầu tư; - Môi giới hợp đồng hàng hóa (hợp đồng kỳ hạn, hợp đồng quyền chọn, hợp đồng tương lai,...) được chuẩn hóa; - Giao dịch tiền tệ thay mặt cho người khác; - Giao dịch và môi giới tài sản tiền điện tử có một khoản nợ tương ứng; - Hoạt động của các địa điểm đổi, mua bán ngoại tệ; - Huy động vốn cộng đồng dựa trên vốn chủ sở hữu; - Huy động vốn cộng đồng dựa trên nợ phát hành chứng khoán. Nhóm này cũng gồm: Môi giới chứng khoán cho các dự án đầu tư, ví dụ: công viên gió hoặc mặt trời."
      },
      {
        "code": "6619",
        "name": "Hoạt động hỗ trợ dịch vụ tài chính chưa được phân vào đâu",
        "description": ""
      },
      {
        "code": "6621",
        "name": "Đánh giá rủi ro và thiệt hại",
        "description": ""
      },
      {
        "code": "6622",
        "name": "Hoạt động của đại lý và môi giới bảo hiểm",
        "description": ""
      },
      {
        "code": "6629",
        "name": "Hoạt động hỗ trợ khác cho bảo hiểm và quỹ hưu trí",
        "description": ""
      },
      {
        "code": "6630",
        "name": "Hoạt động quản lý quỹ",
        "description": ""
      }
    ]
  },
  {
    "code": "M",
    "name": "HOẠT ĐỘNG KINH DOANH BẤT ĐỘNG SẢN",
    "description": "",
    "classes": [
      {
        "code": "6821",
        "name": "Dịch vụ trung gian cho hoạt động bất động sản",
        "description": ""
      },
      {
        "code": "6829",
        "name": "Hoạt động bất động sản khác trên cơ sở phí hoặc hợp đồng",
        "description": ""
      }
    ]
  },
  {
    "code": "N",
    "name": "HOẠT ĐỘNG CHUYÊN MÔN, KHOA HỌC VÀ CÔNG NGHỆ",
    "description": "",
    "classes": [
      {
        "code": "6910",
        "name": "Hoạt động pháp luật",
        "description": "Nhóm này gồm: - Đại diện luật pháp về lợi ích của một bên đối với bên kia, dù có trước tòa hoặc hội đồng xét xử hay không hoặc dưới sự giám sát của những người là thành viên của tòa như tư vấn và đại diện dân sự, tư vấn và đại diện hình sự...; - Các hoạt động khác của công chứng viên, thẩm phán, thẩm phán viên và trọng tài kinh tế. Nhóm này cũng gồm: - Hoạt động hòa giải pháp luật; - Hoạt động của người giám hộ pháp lý được chỉ định mà không cung cấp dịch vụ chăm sóc lưu trú."
      },
      {
        "code": "6920",
        "name": "Hoạt động liên quan đến kế toán, kiểm toán và tư vấn về thuế",
        "description": "Nhóm này gồm: - Ghi các giao dịch thương mại của doanh nghiệp và cá nhân; - Các hoạt động kế toán như kế toán tài chính, kế toán tiền lương...; - Các công việc chuẩn bị hoặc kiểm toán các tài khoản tài chính; - Kiểm tra các tài khoản và chứng nhận độ chính xác của chúng; - Chuẩn bị tờ khai thuế thu nhập cá nhân và thu nhập doanh nghiệp; - Hoạt động tư vấn và đại diện (trừ đại diện pháp lý) thay mặt khách hàng trước cơ quan thuế; - Hoạt động dịch vụ tính thuế, phí và thuế quan. Nhóm này cũng gồm: Hoạt động lập hóa đơn."
      },
      {
        "code": "7010",
        "name": "Hoạt động của trụ sở văn phòng",
        "description": ""
      },
      {
        "code": "7020",
        "name": "Hoạt động tư vấn quản lý kinh doanh và hoạt động tư vấn quản lý khác",
        "description": ""
      },
      {
        "code": "7110",
        "name": "Hoạt động kiến trúc và tư vấn kỹ thuật có liên quan",
        "description": ""
      },
      {
        "code": "7120",
        "name": "Kiểm tra và phân tích kỹ thuật",
        "description": ""
      },
      {
        "code": "7310",
        "name": "Quảng cáo",
        "description": ""
      },
      {
        "code": "7320",
        "name": "Nghiên cứu thị trường và thăm dò dư luận",
        "description": ""
      },
      {
        "code": "7330",
        "name": "Hoạt động quan hệ công chúng",
        "description": ""
      },
      {
        "code": "7410",
        "name": "Hoạt động thiết kế chuyên dụng",
        "description": ""
      },
      {
        "code": "7420",
        "name": "Hoạt động nhiếp ảnh",
        "description": ""
      },
      {
        "code": "7430",
        "name": "Hoạt động phiên dịch",
        "description": ""
      },
      {
        "code": "7491",
        "name": "Hoạt động môi giới và tiếp thị bằng sáng chế",
        "description": ""
      },
      {
        "code": "7500",
        "name": "Hoạt động thú y",
        "description": ""
      }
    ]
  },
  {
    "code": "O",
    "name": "HOẠT ĐỘNG HÀNH CHÍNH VÀ DỊCH VỤ HỖ TRỢ",
    "description": "",
    "classes": [
      {
        "code": "7710",
        "name": "Cho thuê xe có động cơ",
        "description": ""
      },
      {
        "code": "7721",
        "name": "Cho thuê thiết bị thể thao, vui chơi giải trí",
        "description": ""
      },
      {
        "code": "7729",
        "name": "Cho thuê đồ dùng cá nhân và gia đình khác",
        "description": ""
      },
      {
        "code": "7740",
        "name": "Cho thuê tài sản vô hình phi tài chính",
        "description": ""
      },
      {
        "code": "7810",
        "name": "Hoạt động của các trung tâm giới thiệu việc làm",
        "description": ""
      },
      {
        "code": "7821",
        "name": "Cung ứng lao động tạm thời",
        "description": ""
      },
      {
        "code": "7822",
        "name": "Cung ứng nguồn nhân lực khác",
        "description": ""
      },
      {
        "code": "7911",
        "name": "Đại lý lữ hành",
        "description": ""
      },
      {
        "code": "7912",
        "name": "Điều hành tua du lịch",
        "description": ""
      },
      {
        "code": "7990",
        "name": "Hoạt động liên quan đến du lịch khác",
        "description": ""
      },
      {
        "code": "8011",
        "name": "Dịch vụ điều tra và hoạt động bảo vệ tư nhân",
        "description": ""
      },
      {
        "code": "8019",
        "name": "Dịch vụ bảo đảm an toàn khác",
        "description": ""
      },
      {
        "code": "8110",
        "name": "Dịch vụ hỗ trợ tổng hợp",
        "description": ""
      },
      {
        "code": "8121",
        "name": "Vệ sinh chung nhà cửa",
        "description": ""
      },
      {
        "code": "8129",
        "name": "Dịch vụ vệ sinh khác",
        "description": ""
      },
      {
        "code": "8130",
        "name": "Dịch vụ cảnh quan",
        "description": ""
      },
      {
        "code": "8210",
        "name": "Hoạt động hành chính và hỗ trợ văn phòng",
        "description": ""
      },
      {
        "code": "8220",
        "name": "Hoạt động dịch vụ liên quan đến các cuộc gọi",
        "description": ""
      },
      {
        "code": "8230",
        "name": "Tổ chức giới thiệu và xúc tiến thương mại",
        "description": ""
      },
      {
        "code": "8291",
        "name": "Hoạt động dịch vụ hỗ trợ thanh toán, tín dụng",
        "description": ""
      },
      {
        "code": "8292",
        "name": "Dịch vụ đóng gói",
        "description": ""
      },
      {
        "code": "8299",
        "name": "Hoạt động dịch vụ hỗ trợ kinh doanh khác còn lại chưa được phân vào đâu",
        "description": "Nhóm này gồm: - Dịch vụ tổ chức gây quỹ trên cơ sở phí hoặc hợp đồng; + Dịch vụ ghi chép tại tòa án hoặc ghi tốc ký, + Dịch vụ tốc ký công cộng. - Ghi phụ đề theo thời gian thực (ví dụ như trực tiếp) cho các cuộc họp, hội nghị; - Dịch vụ mã vạch; - Dịch vụ in mã vạch; - Dịch vụ thu hồi tài sản; - Dịch vụ thu tiền đỗ xe; - Hoạt động xử lý visa và giấy phép lao động; - Hoạt động xử lý phiếu ăn nhà hàng; - Hỗ trợ đăng ký xe cơ giới; - Hoạt động dịch vụ di chuyển; - Quản lý gói quà tặng hoạt động giải trí; - Hoạt động phát hành và xử lý phiếu giảm giá; - Gây quỹ dựa trên đóng góp đám đông; - Mua bán và môi giới tài sản tiền điện tử mà không kèm theo trách nhiệm pháp lý (không phải do cơ quan tiền tệ phát hành); - Dịch vụ chuyển trụ sở công ty; - Đọc mức tiêu thụ nhiệt và nước nóng, bao gồm phân bổ chi phí; - Hoạt động của người đấu giá độc lập; - Quản lý các chương trình khách hàng thân thiết; - Bán combo du lịch/ tua du lịch trọn gói: hình thức phân phối dịch vụ liên quan đến du lịch nhưng là dịch vụ tạm hoãn, có thể thuộc bất kỳ loại nào như khách sạn, nhà hàng, dịch vụ chăm sóc, hoạt động giải trí..."
      },
      {
        "code": "8413",
        "name": "Hoạt động quản lý nhà nước trong lĩnh vực môi trường",
        "description": ""
      },
      {
        "code": "8414",
        "name": "Hoạt động quản lý nhà nước trong các lĩnh vực kinh tế chuyên ngành",
        "description": ""
      },
      {
        "code": "8421",
        "name": "Hoạt động đối ngoại",
        "description": ""
      },
      {
        "code": "8422",
        "name": "Hoạt động quốc phòng",
        "description": ""
      },
      {
        "code": "8423",
        "name": "Hoạt động an ninh, trật tự an toàn xã hội",
        "description": ""
      },
      {
        "code": "8430",
        "name": "Hoạt động bảo đảm xã hội bắt buộc",
        "description": ""
      }
    ]
  },
  {
    "code": "Q",
    "name": "GIÁO DỤC VÀ ĐÀO TẠO",
    "description": "",
    "classes": [
      {
        "code": "8511",
        "name": "Giáo dục nhà trẻ",
        "description": ""
      },
      {
        "code": "8512",
        "name": "Giáo dục mẫu giáo",
        "description": ""
      },
      {
        "code": "8521",
        "name": "Giáo dục tiểu học",
        "description": ""
      },
      {
        "code": "8522",
        "name": "Giáo dục trung học cơ sở",
        "description": ""
      },
      {
        "code": "8523",
        "name": "Giáo dục trung học phổ thông",
        "description": ""
      },
      {
        "code": "8531",
        "name": "Đào tạo sơ cấp",
        "description": ""
      },
      {
        "code": "8532",
        "name": "Đào tạo trung cấp",
        "description": ""
      },
      {
        "code": "8533",
        "name": "Đào tạo cao đẳng",
        "description": ""
      },
      {
        "code": "8541",
        "name": "Đào tạo đại học",
        "description": ""
      },
      {
        "code": "8542",
        "name": "Đào tạo thạc sỹ",
        "description": ""
      },
      {
        "code": "8543",
        "name": "Đào tạo tiến sỹ",
        "description": ""
      },
      {
        "code": "8551",
        "name": "Giáo dục thể thao và giải trí",
        "description": ""
      },
      {
        "code": "8552",
        "name": "Giáo dục văn hóa nghệ thuật",
        "description": ""
      },
      {
        "code": "8553",
        "name": "Hoạt động đào tạo sử dụng phương tiện vận tải phi thương mại",
        "description": ""
      },
      {
        "code": "8554",
        "name": "Giáo dục dự bị đại học",
        "description": ""
      },
      {
        "code": "8559",
        "name": "Giáo dục khác chưa được phân vào đâu",
        "description": ""
      },
      {
        "code": "8561",
        "name": "Hoạt động dịch vụ trung gian cho các khóa học và gia sư",
        "description": ""
      },
      {
        "code": "8569",
        "name": "Hoạt động hỗ trợ giáo dục khác",
        "description": ""
      }
    ]
  },
  {
    "code": "R",
    "name": "Y TẾ VÀ HOẠT ĐỘNG TRỢ GIÚP XÃ HỘI",
    "description": "",
    "classes": [
      {
        "code": "8610",
        "name": "Hoạt động của các bệnh viện, trạm y tế",
        "description": ""
      },
      {
        "code": "8620",
        "name": "Hoạt động của các phòng khám đa khoa, chuyên khoa và nha khoa",
        "description": "Nhóm này gồm: Hoạt động của các phòng khám đa khoa, chuyên khoa và phòng khám nha khoa mà bệnh nhân chủ yếu được khám và điều trị ngoại trú theo đơn của các bác sĩ, thầy thuốc giàu kinh nghiệm của phòng khám."
      },
      {
        "code": "8692",
        "name": "Hoạt động y tế dự phòng",
        "description": ""
      },
      {
        "code": "8693",
        "name": "Hoạt động của hệ thống cơ sở chỉnh hình, phục hồi chức năng",
        "description": ""
      },
      {
        "code": "8699",
        "name": "Hoạt động y tế khác chưa được phân vào đâu",
        "description": ""
      },
      {
        "code": "8710",
        "name": "Hoạt động của các cơ sở nuôi dưỡng, điều dưỡng",
        "description": "Nhóm này gồm: Hoạt động của các cơ sở điều dưỡng và an dưỡng cung cấp dịch vụ bệnh nhân nội trú cho những người vừa bình phục từ phòng khám bệnh, có sức khỏe yếu hoặc trong điều kiện cần kiểm tra và giám sát bởi nhân viên y tế, vật lý trị liệu và tập luyện phục hồi chức năng và nghỉ ngơi."
      },
      {
        "code": "8791",
        "name": "Hoạt động dịch vụ trung gian cho các hoạt động chăm sóc tập trung",
        "description": ""
      },
      {
        "code": "8799",
        "name": "Hoạt động chăm sóc tập trung khác chưa được phân vào đâu",
        "description": ""
      },
      {
        "code": "8890",
        "name": "Hoạt động trợ giúp xã hội không tập trung khác",
        "description": ""
      }
    ]
  },
  {
    "code": "S",
    "name": "NGHỆ THUẬT, THỂ THAO VÀ GIẢI TRÍ",
    "description": "",
    "classes": [
      {
        "code": "9011",
        "name": "Hoạt động sáng tác văn học và sáng tác âm nhạc",
        "description": ""
      },
      {
        "code": "9012",
        "name": "Hoạt động sáng tạo nghệ thuật thị giác",
        "description": ""
      },
      {
        "code": "9019",
        "name": "Hoạt động sáng tạo nghệ thuật khác",
        "description": ""
      },
      {
        "code": "9020",
        "name": "Hoạt động biểu diễn nghệ thuật",
        "description": ""
      },
      {
        "code": "9031",
        "name": "Hoạt động của cơ sở và địa điểm nghệ thuật",
        "description": ""
      },
      {
        "code": "9039",
        "name": "Hoạt động hỗ trợ khác cho sáng tạo nghệ thuật và biểu diễn nghệ thuật",
        "description": ""
      },
      {
        "code": "9111",
        "name": "Hoạt động thư viện",
        "description": ""
      },
      {
        "code": "9112",
        "name": "Hoạt động lưu trữ",
        "description": ""
      },
      {
        "code": "9121",
        "name": "Hoạt động bảo tàng và sưu tập",
        "description": ""
      },
      {
        "code": "9122",
        "name": "Hoạt động di tích lịch sử và di tích",
        "description": ""
      },
      {
        "code": "9130",
        "name": "Bảo tồn, phục hồi và các hoạt động hỗ trợ khác cho di sản văn hóa",
        "description": ""
      },
      {
        "code": "9141",
        "name": "Hoạt động của các vườn bách thảo và bách thú",
        "description": ""
      },
      {
        "code": "9142",
        "name": "Hoạt động của khu bảo tồn thiên nhiên",
        "description": ""
      },
      {
        "code": "9200",
        "name": "Hoạt động xổ số, cá cược và đánh bạc",
        "description": "Ngành này gồm: Hoạt động của các cơ sở đánh bạc như sòng bạc, phòng chơi bài và các máy chơi trò chơi video và cung cấp các dịch vụ đánh bạc như chơi xổ số và cá cược các cuộc đua. Hoạt động đánh bạc và cá cược có thể được thực hiện tại các cơ sở đánh bạc hoặc trực tuyến."
      },
      {
        "code": "9311",
        "name": "Hoạt động của các cơ sở thể thao",
        "description": ""
      },
      {
        "code": "9312",
        "name": "Hoạt động của các câu lạc bộ thể thao",
        "description": ""
      },
      {
        "code": "9319",
        "name": "Hoạt động thể thao khác",
        "description": ""
      },
      {
        "code": "9321",
        "name": "Hoạt động của các công viên vui chơi và công viên theo chủ đề",
        "description": ""
      },
      {
        "code": "9329",
        "name": "Hoạt động vui chơi giải trí khác",
        "description": ""
      }
    ]
  },
  {
    "code": "T",
    "name": "HOẠT ĐỘNG DỊCH VỤ KHÁC",
    "description": "",
    "classes": [
      {
        "code": "9411",
        "name": "Hoạt động của các hiệp hội kinh doanh và nghiệp chủ",
        "description": ""
      },
      {
        "code": "9412",
        "name": "Hoạt động của các hội nghề nghiệp",
        "description": ""
      },
      {
        "code": "9420",
        "name": "Hoạt động của công đoàn",
        "description": ""
      },
      {
        "code": "9491",
        "name": "Hoạt động của các tổ chức tôn giáo",
        "description": ""
      },
      {
        "code": "9499",
        "name": "Hoạt động của các tổ chức khác chưa được phân vào đâu",
        "description": ""
      },
      {
        "code": "9510",
        "name": "Sửa chữa, bảo dưỡng máy tính, thiết bị thông tin và truyền thông",
        "description": ""
      },
      {
        "code": "9521",
        "name": "Sửa chữa, bảo dưỡng thiết bị nghe nhìn điện tử gia dụng",
        "description": ""
      },
      {
        "code": "9522",
        "name": "Sửa chữa, bảo dưỡng thiết bị, đồ dùng gia đình",
        "description": ""
      },
      {
        "code": "9523",
        "name": "Sửa chữa, bảo dưỡng giày, dép, hàng da và giả da",
        "description": ""
      },
      {
        "code": "9524",
        "name": "Sửa chữa, bảo dưỡng giường, tủ, bàn, ghế và đồ nội thất tương tự",
        "description": ""
      },
      {
        "code": "9531",
        "name": "Sửa chữa, bảo dưỡng ô tô và xe có động cơ khác",
        "description": ""
      },
      {
        "code": "9532",
        "name": "Sửa chữa, bảo dưỡng mô tô, xe máy",
        "description": ""
      },
      {
        "code": "9610",
        "name": "Giặt là, làm sạch các sản phẩm dệt và lông thú",
        "description": ""
      },
      {
        "code": "9621",
        "name": "Dịch vụ làm tóc",
        "description": ""
      },
      {
        "code": "9622",
        "name": "Dịch vụ chăm sóc sắc đẹp và các hoạt động làm đẹp khác",
        "description": ""
      },
      {
        "code": "9623",
        "name": "Dịch vụ spa và xông hơi",
        "description": ""
      },
      {
        "code": "9630",
        "name": "Hoạt động dịch vụ phục vụ tang lễ và các dịch vụ liên quan",
        "description": ""
      },
      {
        "code": "9640",
        "name": "Hoạt động trung gian cho dịch vụ cá nhân",
        "description": ""
      },
      {
        "code": "9690",
        "name": "Hoạt động dịch vụ phục vụ cá nhân khác",
        "description": ""
      },
      {
        "code": "9700",
        "name": "Hoạt động làm thuê công việc gia đình trong các hộ gia đình",
        "description": ""
      },
      {
        "code": "9810",
        "name": "Hoạt động sản xuất các sản phẩm vật chất tự tiêu dùng của hộ gia đình",
        "description": ""
      },
      {
        "code": "9820",
        "name": "Hoạt động sản xuất các sản phẩm dịch vụ tự tiêu dùng của hộ gia đình",
        "description": ""
      }
    ]
  },
  {
    "code": "V",
    "name": "HOẠT ĐỘNG CỦA CÁC TỔ CHỨC VÀ CƠ QUAN QUỐC TẾ",
    "description": "",
    "classes": [
      {
        "code": "9900",
        "name": "Hoạt động của các tổ chức và cơ quan quốc tế",
        "description": ""
      }
    ]
  }
]