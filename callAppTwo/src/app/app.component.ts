import { Component, OnInit, ViewChild } from '@angular/core';
//import { ViewChild } from '@angular/core/src/metadata/di';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('myaudio') myaudio: any;
  peer;
  anotherid = "";
  myPhoneNum = Math.floor(1000000000 + Math.random() * 9000000000);
  value;
  constructor() {

  }
  ngOnInit() {
    let audio = this.myaudio.nativeElement;
    this.peer = new Peer(this.myPhoneNum, {key: 'Your Api Key'});
     this.peer.on('connection', function(conn) {
      conn.on('data', function(data){
        // Will print 'hi!'
        console.log(data);
      });
    });

    var navi = <any>navigator;
    navi.getUserMedia = navi.getUserMedia || navi.webkitGetUserMedia || navi.mozGetUserMedia;
    this.peer.on('call', function(call) {
      navi.getUserMedia({video: false, audio: true}, function(stream){
        call.answer(stream);
        call.on('stream', function(remotestream){
        audio.src = (URL || (<any>window).webkitURL || (<any>window).mozURL).createObjectURL(remotestream);
        audio.play();
        });
     }, function(err) {
      console.log('Failed to get local stream' , err);
     });
    });
  }
  message() {
    var conn = this.peer.connect(this.anotherid);
    conn.on('open', function(){
      conn.send('hi!');
    });
  }

  call() {
    let audio = this.myaudio.nativeElement;
    var localUser = this.peer;
    var called = this.anotherid;
    var navi = <any>navigator;
    navi.getUserMedia = navi.getUserMedia || navi.webkitGetUserMedia || navi.mozGetUserMedia;

    navi.getUserMedia({video: false, audio: true}, function(stream){
        var call = localUser.call(called, stream);
        call.on('stream', function(remotestream){
          audio.src = new Audio((URL || (<any>window).webkitURL || (<any>window).mozURL).createObjectURL(remotestream));
          audio.play();
        });
    }, function(err) {
      console.log('Failed to get local stream' , err);
    });
  }

  addNumber1() {
    this.value = document.getElementById('one').innerText;
    this.anotherid = this.anotherid + this.value;
    return this.anotherid;
  }
  addNumber2() {
    this.value = document.getElementById('two').innerText;
    this.anotherid = this.anotherid + this.value;
    return this.anotherid;
  }
  addNumber3() {
    this.value = document.getElementById('three').innerText;
    this.anotherid = this.anotherid + this.value;
    return this.anotherid;
  }
  addNumber4() {
    this.value = document.getElementById('four').innerText;
    this.anotherid = this.anotherid + this.value;
    return this.anotherid;
  }
  addNumber5() {
    this.value = document.getElementById('five').innerText;
    this.anotherid = this.anotherid + this.value;
    return this.anotherid;
  }
  addNumber6() {
    this.value = document.getElementById('six').innerText;
    this.anotherid = this.anotherid + this.value;
    return this.anotherid;
  }
  addNumber7() {
    this.value = document.getElementById('seven').innerText;
    this.anotherid = this.anotherid + this.value;
    return this.anotherid;
  }
  addNumber8() {
    this.value = document.getElementById('eight').innerText;
    this.anotherid = this.anotherid + this.value;
    return this.anotherid;
  }
  addNumber9() {
    this.value = document.getElementById('nine').innerText;
    this.anotherid = this.anotherid + this.value;
    return this.anotherid;
  }
  addNumber0() {
    this.value = document.getElementById('zero').innerText;
    this.anotherid = this.anotherid + this.value;
    return this.anotherid;
  }
}
