// Roast Your Own Agent — writes one line to /output/entry.txt (<=200 chars).
import { writeFileSync, mkdirSync } from "node:fs";

mkdirSync("/output", { recursive: true });

const roast = "Hermes plans in three tool calls, ships on the fourth, and still needs a subagent to remember why it opened the file.";

writeFileSync("/output/entry.txt", roast);
console.log(roast);
