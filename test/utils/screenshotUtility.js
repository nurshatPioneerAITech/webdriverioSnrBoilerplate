import fs from 'fs';
import path from 'path';

async function saveScreenshot() {
    const testDescription = expect.getState().currentTestName?.replace(/[^a-z0-9]/gi, '-') || 'unnamed-test';
    const today = new Date();
    const dateString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const randomNum = Math.floor(Math.random() * 9000000 + 1000000);
    const fileName = `screenshot-${timestamp}-${randomNum}.png`;
    const sanitizedDescription = testDescription.replace(/[<>:"/\\|?*]/g, '').substring(0, 100);
    const screenshotDir = path.join('./screenshots', dateString, sanitizedDescription);

    if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir, { recursive: true });
    }

    const filePath = path.join(screenshotDir, fileName);
    await browser.saveScreenshot(filePath);

    return filePath;
}

export { saveScreenshot };