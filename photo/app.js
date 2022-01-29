const fs = require("fs");
const path = require("path");
const os = require("os");

const folder = process.argv[2];
const workingDir = path.join(__dirname, folder);
if (!folder || !fs.existsSync(workingDir)) {
  console.error("파일명을 함께 입력하여 실행해주세요");
  return;
}

const videoDir = path.join(workingDir, "videoDir");
const capturedDir = path.join(workingDir, "capturedDir");
const duplicatedDir = path.join(workingDir, "duplicatedDir");

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir, (error) => console.log);
!fs.existsSync(capturedDir) &&
  fs.mkdirSync(capturedDir, (error) => console.log);
!fs.existsSync(duplicatedDir) &&
  fs.mkdirSync(duplicatedDir, (error) => console.log);

fs.promises
  .readdir(workingDir) //
  .then(processFiles)
  .catch(console.log);

function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      console.log("video", file);
      move(file, videoDir);
    } else if (isCaptureFile(file)) {
      console.log("captured", file);
      move(file, capturedDir);
    } else if (isDuplicatedFile(files, file)) {
      console.log("duplicated", file);
      move(file, duplicatedDir);
    }
  });
}

function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match;
}
function isCaptureFile(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match;
}
function isDuplicatedFile(files, file) {
  if (!file.startsWith("IMG_") || file.startsWith("IMG_E")) return;

  const edited = `IMG_E${file.split("_")[1]}`;
  const found = files.find((f) => f.includes(edited));

  return !!found;
}

function move(file, targetDir) {
  console.info(`move ${file} to ${path.basename(targetDir)}`);
  fs.promises
    .rename(path.join(workingDir, file), path.join(targetDir, file))
    .catch(console.log);
}
