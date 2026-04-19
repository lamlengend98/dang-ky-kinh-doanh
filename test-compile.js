const fs = require('fs');
const PizZip = require('/Users/macbook/Documents/Web/business_registration/node_modules/pizzip');
const Docxtemplater = require('/Users/macbook/Documents/Web/business_registration/node_modules/docxtemplater');

function testDoc(filename) {
  try {
    const content = fs.readFileSync(filename, "binary");
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });
    doc.render({});
    console.log(filename + " OK");
  } catch(error) {
    console.error(filename + " ERROR:");
    function replaceErrors(key, value) {
        if (value instanceof Error) {
            return Object.getOwnPropertyNames(value).reduce(function(error, key) {
                error[key] = value[key];
                return error;
            }, {});
        }
        return value;
    }
    console.log(JSON.stringify({error: error}, replaceErrors, 2));
    if (error.properties && error.properties.errors) {
        console.error("  Sub-errors: " + error.properties.errors.map(e => e.message).join(", "));
    }
  }
}

const dir = '/Users/macbook/Documents/Web/business_registration/';
testDoc(dir + 'assets/2 thành viên/03. Danh sách thành viên.docx');
testDoc(dir + 'assets/2 thành viên/05. DSCSH hưởng lợi.docx');
