import { Component } from '@angular/core';

@Component({
  selector: 'app-input-fields',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.css']
})
export class InputFieldsComponent {
  heat : string = "";
  date : Date;
  liqTemp : string = "";
  preCastWGT : string = "";
  castSteelWGT : string = "";
  ldlLife : string = "";
  timeSteel : string = "";
  empty0 : string = "";
  empty01 : string = "";
  empty02 : string = "";
  empty03 : string = "";
  bombTemp : string = "";
  tapToStartSec : string = "";
  treatmDur : string = "";
  castingDur : string = "";
  lastTempToSec200MT : string = "";
  facCd : string = "";
  postFtcHT : string = "";
  exitTemp : string = "";
  postLitHT : string = "";
  time200To25MT : string = "";

  clearInput(){
    this.heat = "";
    this.date = null;
    this.liqTemp = "";
    this.preCastWGT = "";
    this.castSteelWGT = "";
    this.ldlLife = "";
    this.timeSteel = "";
    this.empty0 = "";
    this.empty01 = "";
    this.empty02 = "";
    this.empty03 = "";
    this.bombTemp = "";
    this.tapToStartSec = "";
    this.treatmDur = "";
    this.castingDur = "";
    this.lastTempToSec200MT = "";
    this.facCd = "";
    this.postFtcHT = "";
    this.exitTemp = "";
    this.postLitHT = "";
    this.time200To25MT = "";
  }
}
