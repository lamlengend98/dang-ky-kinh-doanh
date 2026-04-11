const units = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];

function convertThreeDigits(n: number, showHundred: boolean): string {
  let res = "";
  const hundred = Math.floor(n / 100);
  const ten = Math.floor((n % 100) / 10);
  const unit = n % 10;

  if (hundred > 0 || showHundred) {
    res = units[hundred] + " trăm ";
    if (ten === 0 && unit > 0) res += "linh ";
  }

  if (ten > 1) {
    res += units[ten] + " mươi ";
    if (unit === 1) res += "mốt";
    else if (unit === 5) res += "lăm";
    else if (unit > 0) res += units[unit];
  } else if (ten === 1) {
    res += "mười ";
    if (unit === 5) res += "lăm";
    else if (unit > 0) res += units[unit];
  } else if (unit > 0) {
    res += units[unit];
  }

  return res.trim();
}

/**
 * Converts a number or numeric string to Vietnamese words.
 * Example: 1000000 -> "Một triệu đồng"
 */
export function convertNumberToVietnameseWords(numValue: string | number): string {
  if (numValue === undefined || numValue === null || numValue === "") return "";
  
  let num = typeof numValue === "string" ? parseInt(numValue.replace(/\D/g, "")) : numValue;
  if (isNaN(num)) return "";
  if (num === 0) return "Không đồng";

  const bigUnits = ["", "nghìn", "triệu", "tỷ"];
  let res = "";
  let groups = [];
  let tempNum = num;

  while (tempNum > 0) {
    groups.push(tempNum % 1000);
    tempNum = Math.floor(tempNum / 1000);
  }

  for (let i = groups.length - 1; i >= 0; i--) {
    if (groups[i] > 0) {
      const groupWords = convertThreeDigits(groups[i], i < groups.length - 1);
      const unit = bigUnits[i % 4];
      res += groupWords + " " + unit + " ";
    }
  }

  res = res.trim();
  if (res.length > 0) {
    res = res.charAt(0).toUpperCase() + res.slice(1);
  }

  return res;
}

/**
 * Formats a numeric string or number with dots as thousand separators.
 * Example: 1000000 -> "1.000.000"
 */
export function formatCurrency(numValue: string | number): string {
  if (numValue === undefined || numValue === null || numValue === "") return "";
  let num = typeof numValue === "string" ? numValue.replace(/\D/g, "") : numValue.toString();
  if (!num) return "";
  return new Intl.NumberFormat('vi-VN').format(parseInt(num));
}

/**
 * Removes "Tỉnh" or "Thành phố" prefix from a province/city name.
 * Example: "Thành phố Hà Nội" -> "Hà Nội"
 */
export function stripProvincePrefix(provinceName: string): string {
  if (!provinceName) return "";
  return provinceName
    .replace(/^(Thành phố|Tỉnh|Thành Phố)\s+/i, "")
    .trim();
}

/**
 * Formats a date string from yyyy-mm-dd to dd-mm-yyyy.
 * Example: "1990-01-30" -> "30-01-1990"
 */
export function formatDate(dateString: string): string {
  if (!dateString) return "";
  const parts = dateString.split("-");
  if (parts.length !== 3) return dateString;
  const [year, month, day] = parts;
  return `${day}-${month}-${year}`;
}
