'use strict';

/*
くわしい使い方
getMedia(hdConstraints);をプログラムの中に入れるとカメラが出る
以上
*/

//HTMLの要素を取得
const dimensions = document.querySelector('#dimensions');
const video = document.querySelector('video');

let stream;
const videoblock = document.querySelector('#videoblock');
const messagebox = document.querySelector('#errormessage')

//画面のサイズ
const hdConstraints = {
  video: {width: {exact: 900}, height: {exact: 564}}
};


//エラーメッセージを画面とコンソールに出力するための関数
function errorMessage(who, what) {
  const message = who + ': ' + what;
  messagebox.innerText = message;
  messagebox.style.display = 'block';
  console.log(message);
}

//画面上に表示されているエラーメッセージを非表示にするための関数
function clearErrorMessage() {
  messagebox.style.display = 'none';
}

//カメラの映像を画面に出力するための関数群
function gotStream(mediaStream) {
  stream = window.stream = mediaStream; // stream available to console
  video.srcObject = mediaStream;
  messagebox.style.display = 'none';
  videoblock.style.display = 'block';
  const track = mediaStream.getVideoTracks()[0];
  const constraints = track.getConstraints();
  console.log('Result constraints: ' + JSON.stringify(constraints));
}

function getMedia(constraints) {
  if (stream) {
    stream.getTracks().forEach(track => {
      track.stop();
    });
  }

  clearErrorMessage();
  videoblock.style.display = 'none';
  navigator.mediaDevices.getUserMedia(constraints)
      .then(gotStream)
      .catch(e => {
        errorMessage('getUserMedia', e.message, e.name);
      });
}