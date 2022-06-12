// TODO: import module bila dibutuhkan di sini
// menambahkan module file system (fs)
const { error } = require('console');
const fs = require('fs');
const { resourceLimits } = require('worker_threads');
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

// Preprocessing Data
const preprocessingData = (data) => {
  let message = "";

  if (data?.message != undefined) {
    message = data?.message;
  } else if (data?.length) {
    data.forEach((item) => {
      if (item?.message) {
        message = item?.message;
      }

      if (item?.data?.message != undefined) {
        message = item?.data?.message;

      }
    });
  }

  return message.split(" ")[1];
}

// Inisialisasi function bacaData
const bacaData = (fnCallBack) => {
  let hasil = [];
  fs.readFile(file1, { encoding: "utf8" }, (err, data) => {
    if (err) {
      fnCallBack(err, null);
      return;
    }
    hasil.push(preprocessingData(JSON.parse(data)));


    fs.readFile(file2, { encoding: "utf8" }, (err, data) => {
      if (err) {
        fnCallBack(err, null);
        return;
      }
      hasil.push(preprocessingData(JSON.parse(data)));


      fs.readFile(file3, { encoding: "utf8" }, (err, data) => {
        if (err) {
          fnCallBack(err, null);
          return;
        }

        hasil.push(preprocessingData(JSON.parse(data)));


        fnCallBack(err, hasil);
      })
    })
  })
}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
