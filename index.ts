import fs from "fs";

enum E_Severity {
  info,
  low, 
  moderate,
  high,
  critical
};

const jsonData = fs.readFileSync("./part-1-input.json", { encoding: "utf-8" });
const auditData = JSON.parse(jsonData);

let highestSeverity = E_Severity.info;

for (const prop in auditData.vulnerabilities) {

  const key = auditData.vulnerabilities[prop].severity as keyof typeof E_Severity;
  const severity: E_Severity = E_Severity[key];
  if (severity > highestSeverity) highestSeverity = severity;

}

for (const prop in auditData.vulnerabilities) {
  
  const key = auditData.vulnerabilities[prop].severity as keyof typeof E_Severity
  const severity: E_Severity = E_Severity[key];
  if (severity !== highestSeverity) delete auditData.vulnerabilities[prop];

}

fs.writeFileSync("./part-1-phila.json", JSON.stringify(auditData));