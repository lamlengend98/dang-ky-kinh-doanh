import { test } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';

test('Debug docxtemplater parsing errors', async () => {
    function testDoc(filename: string) {
        try {
            const content = fs.readFileSync(filename, "binary");
            const zip = new PizZip(content);
            const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });
            doc.render({});
            console.log(filename + " OK");
        } catch(error: any) {
            console.error(filename + " ERROR:");
            if (error.properties && error.properties.errors) {
                console.error("  Sub-errors: " + error.properties.errors.map((e:any) => e.message).join(", "));
            } else {
                console.error(error.message || error);
            }
        }
    }

    testDoc('assets/2 thành viên/03. Danh sách thành viên.docx');
    testDoc('assets/2 thành viên/05. DSCSH hưởng lợi.docx');
});
