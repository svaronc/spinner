process.stdout.write("hello from spinner1.js...\rheyyy\n");
const characters = ["|", "/", "-", "\\", "|", "|", "/", "-", "\\", "|"];
let delay = 0;
for (let i = 0; i < characters.length; i++) {
  delay += 200;
  setTimeout(() => process.stdout.write(`\r${characters[i]}   `), delay);
}
