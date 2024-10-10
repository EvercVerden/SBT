const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const output = fs.createWriteStream(path.join(__dirname, '..', 'download.zip'));
const archive = archiver('zip', {
  zlib: { level: 9 } // 设置压缩级别
});

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('项目已成功打包为 download.zip');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

// 添加文件到压缩包
archive.directory(path.join(__dirname, '..'), false);

archive.finalize();