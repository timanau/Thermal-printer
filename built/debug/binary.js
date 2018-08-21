

var __main__1 = entryPoint = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.lastBrkId = 1;
    r0 = pxsim.Array_.mk(0);
    s.tmp_0 = r0;
    r0 = globals.freqTable___119;
    pxtrt.decr(r0);
    r0 = s.tmp_0;
    globals.freqTable___119 = (r0);
    s.lastBrkId = 2;
    r0 = 80;
    globals.heatTime___153 = (r0);
    s.lastBrkId = 3;
    r0 = 2;
    globals.heatInterval___154 = (r0);
    s.lastBrkId = 4;
    r0 = 15;
    globals.printDensity___155 = (r0);
    s.lastBrkId = 5;
    r0 = 15;
    globals.printBreakTime___156 = (r0);
    s.lastBrkId = 29;
    s.tmp_0 = { fn: _thermal_printer_setSerial_157, parent: s };
    r0 = 21;
    s.tmp_0.arg0 = r0;
    r0 = 22;
    s.tmp_0.arg1 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    s.lastBrkId = 30;
    r0 = pxsim.pxtcore.ptrOfLiteral(_inline_174);
    s.tmp_0 = r0;
    r0 = pxsim.input.onButtonPressed(1, s.tmp_0);
    s.tmp_1 = r0;
    r0 = s.tmp_1;
  case 1:
    return leave(s, r0)
  default: oops()
} } }
__main__1.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"pxt_modules/core/dal.d.ts","functionName":"<main>"}
__main__1.continuations = [  ]



var _inline_174  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.lastBrkId = 31;
    s.tmp_0 = { fn: _printTestPage_172, parent: s };
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
  case 1:
    return leave(s, r0)
  default: oops()
} } }
_inline_174.info = {"start":96,"length":38,"line":2,"column":31,"endLine":4,"endColumn":1,"fileName":"test.ts","functionName":"inline"}



var _printTestPage_172  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.dataBuffer___175 = 0;
    s.lastBrkId = 25;
    r0 = pxsim.pins.createBuffer(2);
    s.tmp_0 = r0;
    r0 = s.dataBuffer___175;
    pxtrt.decr(r0);
    r0 = s.tmp_0;
    s.dataBuffer___175 = (r0);
    s.lastBrkId = 26;
    r0 = s.dataBuffer___175;
    pxtrt.incr(r0);
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, 2, 0, 18);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    pxtrt.decr(r0);
    r0 = s.tmp_1;
    s.lastBrkId = 27;
    r0 = s.dataBuffer___175;
    pxtrt.incr(r0);
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, 2, 1, 84);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    pxtrt.decr(r0);
    r0 = s.tmp_1;
    s.lastBrkId = 28;
    r0 = s.dataBuffer___175;
    pxtrt.incr(r0);
    s.tmp_0 = r0;
    r0 = pxsim.serial.writeBuffer(s.tmp_0);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    pxtrt.decr(r0);
    r0 = s.tmp_1;
  case 1:
    r0 = s.dataBuffer___175;
    pxtrt.decr(r0);
    return leave(s, r0)
  default: oops()
} } }
_printTestPage_172.info = {"start":12470,"length":510,"line":362,"column":5,"endLine":377,"endColumn":5,"fileName":"thermal-printer.ts","functionName":"printTestPage"}



var _thermal_printer_setSerial_157  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.dataBuffer0___183 = 0;
    s.dataBuffer___184 = 0;
    s.printSetting___185 = 0;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.lastBrkId = 6;
    r0 = pxsim.serial.redirect(s.arg0, s.arg1, 19200);
    s.lastBrkId = 7;
    setupResume(s, 2);
    pxsim.basic.pause(500);
    checkResumeConsumed();
    return;
  case 2:
    r0 = s.retval;
    s.lastBrkId = 8;
    r0 = pxsim.pins.createBuffer(2);
    s.tmp_0 = r0;
    r0 = s.dataBuffer0___183;
    pxtrt.decr(r0);
    r0 = s.tmp_0;
    s.dataBuffer0___183 = (r0);
    s.lastBrkId = 9;
    r0 = s.dataBuffer0___183;
    pxtrt.incr(r0);
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, 2, 0, 27);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    pxtrt.decr(r0);
    r0 = s.tmp_1;
    s.lastBrkId = 10;
    r0 = s.dataBuffer0___183;
    pxtrt.incr(r0);
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, 2, 1, 64);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    pxtrt.decr(r0);
    r0 = s.tmp_1;
    s.lastBrkId = 11;
    r0 = s.dataBuffer0___183;
    pxtrt.incr(r0);
    s.tmp_0 = r0;
    r0 = pxsim.serial.writeBuffer(s.tmp_0);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    pxtrt.decr(r0);
    r0 = s.tmp_1;
    s.lastBrkId = 12;
    setupResume(s, 3);
    pxsim.basic.pause(100);
    checkResumeConsumed();
    return;
  case 3:
    r0 = s.retval;
    s.lastBrkId = 13;
    r0 = pxsim.pins.createBuffer(8);
    s.tmp_0 = r0;
    r0 = s.dataBuffer___184;
    pxtrt.decr(r0);
    r0 = s.tmp_0;
    s.dataBuffer___184 = (r0);
    s.lastBrkId = 14;
    r0 = s.dataBuffer___184;
    pxtrt.incr(r0);
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, 2, 0, 27);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    pxtrt.decr(r0);
    r0 = s.tmp_1;
    s.lastBrkId = 15;
    r0 = s.dataBuffer___184;
    pxtrt.incr(r0);
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, 2, 1, 55);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    pxtrt.decr(r0);
    r0 = s.tmp_1;
    s.lastBrkId = 16;
    r0 = s.dataBuffer___184;
    pxtrt.incr(r0);
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, 2, 2, 7);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    pxtrt.decr(r0);
    r0 = s.tmp_1;
    s.lastBrkId = 17;
    r0 = s.dataBuffer___184;
    pxtrt.incr(r0);
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, 2, 3, globals.heatTime___153);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    pxtrt.decr(r0);
    r0 = s.tmp_1;
    s.lastBrkId = 18;
    r0 = s.dataBuffer___184;
    pxtrt.incr(r0);
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, 2, 4, globals.heatInterval___154);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    pxtrt.decr(r0);
    r0 = s.tmp_1;
    s.lastBrkId = 19;
    r0 = s.dataBuffer___184;
    pxtrt.incr(r0);
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, 2, 5, 18);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    pxtrt.decr(r0);
    r0 = s.tmp_1;
    s.lastBrkId = 20;
    r0 = s.dataBuffer___184;
    pxtrt.incr(r0);
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, 2, 6, 35);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    pxtrt.decr(r0);
    r0 = s.tmp_1;
    s.lastBrkId = 21;
    r0 = pxsim.thumb.lsls(globals.printDensity___155, 4);
    s.tmp_0 = r0;
    r0 = pxsim.thumb.orrs(s.tmp_0, globals.printBreakTime___156);
    s.printSetting___185 = (r0);
    s.lastBrkId = 22;
    r0 = s.dataBuffer___184;
    pxtrt.incr(r0);
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, 2, 7, s.printSetting___185);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    pxtrt.decr(r0);
    r0 = s.tmp_1;
    s.lastBrkId = 23;
    r0 = s.dataBuffer___184;
    pxtrt.incr(r0);
    s.tmp_0 = r0;
    r0 = pxsim.serial.writeBuffer(s.tmp_0);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    pxtrt.decr(r0);
    r0 = s.tmp_1;
    s.lastBrkId = 24;
    setupResume(s, 4);
    pxsim.basic.pause(500);
    checkResumeConsumed();
    return;
  case 4:
    r0 = s.retval;
  case 1:
    r0 = s.dataBuffer0___183;
    pxtrt.decr(r0);
    r0 = s.dataBuffer___184;
    pxtrt.decr(r0);
    return leave(s, r0)
  default: oops()
} } }
_thermal_printer_setSerial_157.info = {"start":1181,"length":1564,"line":51,"column":5,"endLine":89,"endColumn":5,"fileName":"thermal-printer.ts","functionName":"thermal_printer_setSerial"}


setupDebugger(32)

pxsim.setupStringLiterals({})
