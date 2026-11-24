// Roast Your Own Agent — writes one line to /output/entry.txt (<=200 chars).
import { writeFileSync, mkdirSync } from "node:fs";

mkdirSync("/output", { recursive: true });

const roast = "Hermes hires subagents for everything, then compacts their work so lossy its final report is itself the roast this contest asked for.";

writeFileSync("/output/entry.txt", roast);
console.log(roast);
