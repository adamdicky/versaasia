import * as fs from "fs";

const result: string[] = [];

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        result.push("BIG BANG");
    } else if (i % 3 === 0) {
        result.push("BIG");
    } else if (i % 5 === 0) {
        result.push("BANG");
    } else {
        result.push(String(i));
    }
}

fs.writeFileSync("output.json", JSON.stringify(result, null, 2));
