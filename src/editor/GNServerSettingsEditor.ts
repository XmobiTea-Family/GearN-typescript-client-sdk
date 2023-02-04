// import { GNDebug } from "./../runtime/logger/GNDebug";
// import { GNServerSettings } from "./../runtime/config/GNServerSettings";
// import * as fs from "fs";
// import path from "path";

export class GNServerSettingsEditor {
    // private static gnServerSettings: GNServerSettings;

    // public static init(gnServerSettings: GNServerSettings): void {
    //     if (this.gnServerSettings != null) {
    //         GNDebug.log("GNServerSettingsEditor has been init!");

    //         return;
    //     }

    //     this.gnServerSettings = gnServerSettings;
    // }

    // private static getSettings(): GNServerSettings {
    //     return this.gnServerSettings;
    // }

    // public static syncServerFolder(): void {
    //     console.log("Sync Server Folder");

    //     this.syncConstantFolder();
    //     this.syncEnumTypeFolder();
    //     this.syncParameterCodeFolder();
    //     this.syncErrorCodeFolder();
    // }

    // private static syncEnumTypeFolder(): void {
    //     let gnServerSettings = this.getSettings();
    //     let dir = __dirname + "/../../../../" + gnServerSettings.getGNServerSourcePath() + "/src/common/constant/enumType";
    //     // let fullLogPath = __dirname + "/../../../../" + gnServerSettings.getLogPath();

    //     let allPathFiles = fs.readdirSync(dir);

    //     // var allPathFiles = Directory.GetFiles(dir, "*.ts");
    //     for (let i = 0; i < allPathFiles.length; i++) {
    //         this.generateEnumTypeFile(allPathFiles[i]);
    //     }
    // }

    // private static generateEnumTypeFile(dirPath: string): void {
    //     const Template: string = "$name = $code,";
        
    //     let fileInfo = fs.readFileSync(dirPath);
    //     // var fileInfo = new FileInfo(dirPath);

    //     // var allLines = File.ReadAllLines(dirPath);

    //     // var fileName = fileInfo.Name.Replace(".ts", string.Empty);

    //     // var stringBuilder = new StringBuilder();

    //     // stringBuilder.AppendLine("// The file auto generate, please dont change it");
    //     // stringBuilder.AppendLine();
    //     // stringBuilder.AppendLine("namespace XmobiTea.GN.Constant");
    //     // stringBuilder.AppendLine("{");
    //     // stringBuilder.AppendLine("    public enum " + fileName);
    //     // stringBuilder.AppendLine("    {");
    //     // // Value0 = 0,
    //     // for (var i = 0; i < allLines.Length; i++) {
    //     //     var line = allLines[i].Trim();
    //     //     if (string.IsNullOrEmpty(line)) continue;
    //     //     if (line.Contains("import")) continue;
    //     //     if (line.Contains("export class")) continue;
    //     //     if (line.Contains("export enum")) continue;
    //     //     if (line.Contains("{")) continue;
    //     //     if (line.Contains("}")) continue;
    //     //     if (line.Contains("//")) continue;

    //     //     var lineSpl0s = line.Split(',');
    //     //     var lineSpl01s = lineSpl0s[0].Split('=');

    //     //     var code = lineSpl01s[1].Trim();
    //     //     var name = lineSpl01s[0].Trim();

    //     //     stringBuilder.AppendLine("        " + Template.Replace("$name", name).Replace("$code", code));
    //     // }

    //     // stringBuilder.AppendLine("    }");
    //     // stringBuilder.AppendLine("}");

    //     // WriteFile(fileName + ".cs", Application.dataPath + "/XmobiTea-constance/GN/Scripts/Constant/EnumType", stringBuilder);
    // }

    // private static syncParameterCodeFolder(): void {
    //     // var gnServerSettings = GetSettings();
    //     // var dir = Application.dataPath + "/../../" + gnServerSettings.gnServerSourcePath + "/src/common/constant/parameterCode";

    //     // var allPathFiles = Directory.GetFiles(dir, "*.ts");
    //     // for (var i = 0; i < allPathFiles.Length; i++) {
    //     //     GenerateParameterCodeFile(allPathFiles[i]);
    //     // }
    // }

    // private static generateParameterCodeFile(dirPath: string): void {
    //     // const string Template = "public const string $name = $code;";

    //     // var fileInfo = new FileInfo(dirPath);

    //     // var allLines = File.ReadAllLines(dirPath);

    //     // var fileName = fileInfo.Name.Replace(".ts", string.Empty);

    //     // if (fileName.Contains(".ext")) {
    //     //     fileName = fileName.Replace(".ext", string.Empty);
    //     // }

    //     // var stringBuilder = new StringBuilder();

    //     // stringBuilder.AppendLine("// The file auto generate, please dont change it");
    //     // stringBuilder.AppendLine();
    //     // stringBuilder.AppendLine("namespace XmobiTea.GN.Constant");
    //     // stringBuilder.AppendLine("{");
    //     // stringBuilder.AppendLine("    public partial class " + fileName);
    //     // stringBuilder.AppendLine("    {");
    //     // // Value0 = 0,
    //     // for (var i = 0; i < allLines.Length; i++) {
    //     //     var line = allLines[i].Trim();
    //     //     if (string.IsNullOrEmpty(line)) continue;
    //     //     if (line.Contains("import")) continue;
    //     //     if (line.Contains("export class")) continue;
    //     //     if (line.Contains("export enum")) continue;
    //     //     if (line.Contains("{")) continue;
    //     //     if (line.Contains("}")) continue;
    //     //     if (line.Contains("//")) continue;

    //     //     var lineSpl0s = line.Split('=');
    //     //     var lineSpl01s = lineSpl0s[0].Split(' ');
    //     //     var lineSpl013s = lineSpl01s[3].Split(':');

    //     //     var code = lineSpl0s[1].Split(';')[0].Trim();
    //     //     var name = lineSpl013s[0];

    //     //     stringBuilder.AppendLine("        " + Template.Replace("$name", name).Replace("$code", code));
    //     // }

    //     // stringBuilder.AppendLine("    }");
    //     // stringBuilder.AppendLine("}");

    //     // WriteFile(fileName + ".cs", Application.dataPath + "/XmobiTea-constance/GN/Scripts/Constant/ParameterCode", stringBuilder);
    // }

    // private static syncErrorCodeFolder(): void {
    //     // var gnServerSettings = GetSettings();
    //     // var dir = Application.dataPath + "/../../" + gnServerSettings.gnServerSourcePath + "/src/common/constant/errorCode";

    //     // var allPathFiles = Directory.GetFiles(dir, "*.ts");
    //     // for (var i = 0; i < allPathFiles.Length; i++) {
    //     //     GenerateErrorCodeFile(allPathFiles[i]);
    //     // }
    // }

    // private static generateErrorCodeFile(dirPath: string): void {
    //     // const string Template = "public const int $name = $code;";

    //     // var fileInfo = new FileInfo(dirPath);

    //     // var allLines = File.ReadAllLines(dirPath);

    //     // var fileName = fileInfo.Name.Replace(".ts", string.Empty);

    //     // if (fileName.Contains(".ext")) {
    //     //     fileName = fileName.Replace(".ext", string.Empty);
    //     // }

    //     // var stringBuilder = new StringBuilder();

    //     // stringBuilder.AppendLine("// The file auto generate, please dont change it");
    //     // stringBuilder.AppendLine();
    //     // stringBuilder.AppendLine("namespace XmobiTea.GN.Constant");
    //     // stringBuilder.AppendLine("{");
    //     // stringBuilder.AppendLine("    public partial class " + fileName);
    //     // stringBuilder.AppendLine("    {");
    //     // // Value0 = 0,
    //     // for (var i = 0; i < allLines.Length; i++) {
    //     //     var line = allLines[i].Trim();
    //     //     if (string.IsNullOrEmpty(line)) continue;
    //     //     if (line.Contains("import")) continue;
    //     //     if (line.Contains("export class")) continue;
    //     //     if (line.Contains("export enum")) continue;
    //     //     if (line.Contains("{")) continue;
    //     //     if (line.Contains("}")) continue;
    //     //     if (line.Contains("//")) continue;

    //     //     var lineSpl0s = line.Split('=');
    //     //     var lineSpl01s = lineSpl0s[0].Split(' ');
    //     //     var lineSpl013s = lineSpl01s[3].Split(':');

    //     //     var code = lineSpl0s[1].Split(';')[0].Trim();
    //     //     var name = lineSpl013s[0];

    //     //     stringBuilder.AppendLine("        " + Template.Replace("$name", name).Replace("$code", code));
    //     // }

    //     // stringBuilder.AppendLine("    }");
    //     // stringBuilder.AppendLine("}");

    //     // WriteFile(fileName + ".cs", Application.dataPath + "/XmobiTea-constance/GN/Scripts/Constant/ErrorCode", stringBuilder);
    // }

    // private static syncConstantFolder(): void {
    //     this.generateOperationCode();
    //     this.generateEventCode();
    // }

    // private static generateOperationCode(): void {
    //     // const Template: string = "public const int $name = $code;";

    //     // var gnServerSettings = GetSettings();
    //     // var dirPath = Application.dataPath + "/../../" + gnServerSettings.gnServerSourcePath + "/src/common/constant/OperationCode.ext.ts";
    //     // var allLines = File.ReadAllLines(dirPath);

    //     // var stringBuilder = new StringBuilder();

    //     // stringBuilder.AppendLine("// The file auto generate, please dont change it");
    //     // stringBuilder.AppendLine();
    //     // stringBuilder.AppendLine("namespace XmobiTea.GN.Constant");
    //     // stringBuilder.AppendLine("{");
    //     // stringBuilder.AppendLine("    public partial class OperationCode");
    //     // stringBuilder.AppendLine("    {");

    //     // for (var i = 0; i < allLines.Length; i++) {
    //     //     var line = allLines[i].Trim();
    //     //     if (string.IsNullOrEmpty(line)) continue;
    //     //     if (line.Contains("import")) continue;
    //     //     if (line.Contains("export class")) continue;
    //     //     if (line.Contains("export enum")) continue;
    //     //     if (line.Contains("{")) continue;
    //     //     if (line.Contains("}")) continue;
    //     //     if (line.Contains("//")) continue;

    //     //     var lineSpl0s = line.Split('=');
    //     //     var lineSpl01s = lineSpl0s[0].Split(' ');
    //     //     var lineSpl013s = lineSpl01s[3].Split(':');

    //     //     var code = lineSpl0s[1].Split(';')[0].Trim();
    //     //     var name = lineSpl013s[0];

    //     //     stringBuilder.AppendLine("        " + Template.Replace("$name", name).Replace("$code", code));
    //     // }

    //     // stringBuilder.AppendLine("    }");
    //     // stringBuilder.AppendLine("}");
    //     // WriteFile("OperationCode.cs", Application.dataPath + "/XmobiTea-constance/GN/Scripts/Constant", stringBuilder);
    // }

    // private static generateEventCode(): void {
    //     // const string Template = "public const int $name = $code;";

    //     // var gnServerSettings = GetSettings();
    //     // var dirPath = Application.dataPath + "/../../" + gnServerSettings.gnServerSourcePath + "/src/common/constant/EventCode.ext.ts";
    //     // var allLines = File.ReadAllLines(dirPath);

    //     // var stringBuilder = new StringBuilder();

    //     // stringBuilder.AppendLine("// The file auto generate, please dont change it");
    //     // stringBuilder.AppendLine();
    //     // stringBuilder.AppendLine("namespace XmobiTea.GN.Constant");
    //     // stringBuilder.AppendLine("{");
    //     // stringBuilder.AppendLine("    public partial class EventCode");
    //     // stringBuilder.AppendLine("    {");

    //     // for (var i = 0; i < allLines.Length; i++) {
    //     //     var line = allLines[i].Trim();
    //     //     if (string.IsNullOrEmpty(line)) continue;
    //     //     if (line.Contains("import")) continue;
    //     //     if (line.Contains("export class")) continue;
    //     //     if (line.Contains("export enum")) continue;
    //     //     if (line.Contains("{")) continue;
    //     //     if (line.Contains("}")) continue;
    //     //     if (line.Contains("//")) continue;

    //     //     var lineSpl0s = line.Split('=');
    //     //     var lineSpl01s = lineSpl0s[0].Split(' ');
    //     //     var lineSpl013s = lineSpl01s[3].Split(':');

    //     //     var code = lineSpl0s[1].Split(';')[0].Trim();
    //     //     var name = lineSpl013s[0];

    //     //     stringBuilder.AppendLine("        " + Template.Replace("$name", name).Replace("$code", code));
    //     // }

    //     // stringBuilder.AppendLine("    }");
    //     // stringBuilder.AppendLine("}");
    //     // WriteFile("EventCode.cs", Application.dataPath + "/XmobiTea-constance/GN/Scripts/Constant", stringBuilder);
    // }

    // private static writeFile(fileNameWithExtension: string, dirPath: string, contentBuilder: string): void {
    //     if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath);

    //     let filePath = dirPath + "/" + fileNameWithExtension;

    //     if (fs.existsSync(filePath)) fs.rmSync(filePath);
    //     fs.writeFileSync(filePath, contentBuilder);

    //     console.log("Create file path " + fileNameWithExtension + " at " + filePath + " success.");
    // }

}
