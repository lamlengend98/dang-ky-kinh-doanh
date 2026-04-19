import fs from 'fs';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';

function testDoc(filename) {
    try {
        const content = fs.readFileSync(filename, "binary");
        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });
        doc.render({});
        console.log("SUCCESS:", filename);
    } catch(error) {
        console.error("FORMAT_ERROR:", filename);
        if (error.properties && error.properties.errors) {
            console.error("Sub-errors:", error.properties.errors.map(e => e.message || e).join(", "));
        } else {
            console.error(error);
        }
    }
}

testDoc('/Users/macbook/Documents/Web/business_registration/assets/2 thành viên/03. Danh sách thành viên.docx');
testDoc('/Users/macbook/Documents/Web/business_registration/assets/2 thành viên/05. DSCSH hưởng lợi.docx');
