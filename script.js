function pad(num, size) {
  var s = "0000000" + num;
  return s.substr(s.length-size).toUpperCase();
}

function binChange() {
  //var output = createHtmlList(document.frmConvert.ed_input.value);
  //document.frmConvert.ed_output.value = output;
  var frm = document.frmConvert;
  var val = 0;
  if (frm.chbBit31.checked)
    val += (1<<31)>>>0;
  if (frm.chbBit30.checked)
    val += (1<<30)>>>0;
  if (frm.chbBit29.checked)
    val += (1<<29)>>>0;
  if (frm.chbBit28.checked)
    val += (1<<28)>>>0;
  if (frm.chbBit27.checked)
    val += (1<<27)>>>0;
  if (frm.chbBit26.checked)
    val += (1<<26)>>>0;
  if (frm.chbBit25.checked)
    val += (1<<25)>>>0;
  if (frm.chbBit24.checked)
    val += (1<<24)>>>0;
  if (frm.chbBit23.checked)
    val += (1<<23)>>>0;
  if (frm.chbBit22.checked)
    val += (1<<22)>>>0;
  if (frm.chbBit21.checked)
    val += (1<<21)>>>0;
  if (frm.chbBit20.checked)
    val += (1<<20)>>>0;
  if (frm.chbBit19.checked)
    val += (1<<19)>>>0;
  if (frm.chbBit18.checked)
    val += (1<<18)>>>0;
  if (frm.chbBit17.checked)
    val += (1<<17)>>>0;
  if (frm.chbBit16.checked)
    val += (1<<16)>>>0;
  if (frm.chbBit15.checked)
    val += (1<<15)>>>0;
  if (frm.chbBit14.checked)
    val += (1<<14)>>>0;
  if (frm.chbBit13.checked)
    val += (1<<13)>>>0;
  if (frm.chbBit12.checked)
    val += (1<<12)>>>0;
  if (frm.chbBit11.checked)
    val += (1<<11)>>>0;
  if (frm.chbBit10.checked)
    val += (1<<10)>>>0;
  if (frm.chbBit9.checked)
    val += (1<<9)>>>0;
  if (frm.chbBit8.checked)
    val += (1<<8)>>>0;
  if (frm.chbBit7.checked)
    val += (1<<7)>>>0;
  if (frm.chbBit6.checked)
    val += (1<<6)>>>0;
  if (frm.chbBit5.checked)
    val += (1<<5)>>>0;
  if (frm.chbBit4.checked)
    val += (1<<4)>>>0;
  if (frm.chbBit3.checked)
    val += (1<<3)>>>0;
  if (frm.chbBit2.checked)
    val += (1<<2)>>>0;
  if (frm.chbBit1.checked)
    val += (1<<1)>>>0;
  if (frm.chbBit0.checked)
    val += (1<<0)>>>0;
  frm.hex.value = "0x" + pad(val.toString(16), 8);                                 
}

function hexChange() {
  var frm = document.frmConvert;        
  var num = parseInt(frm.hex.value, 16);

  if (num < 0 || num > 0xFFFFFFFF) {
    alert("Number out of unsigned 32-bit range!");
  }

  frm.chbBit31.checked = num & (1<<31);
  frm.chbBit30.checked = num & (1<<30);
  frm.chbBit29.checked = num & (1<<29);
  frm.chbBit28.checked = num & (1<<28);
  frm.chbBit27.checked = num & (1<<27);
  frm.chbBit26.checked = num & (1<<26);
  frm.chbBit25.checked = num & (1<<25);
  frm.chbBit24.checked = num & (1<<24);
  frm.chbBit23.checked = num & (1<<23);
  frm.chbBit22.checked = num & (1<<22);
  frm.chbBit21.checked = num & (1<<21);
  frm.chbBit20.checked = num & (1<<20);
  frm.chbBit19.checked = num & (1<<19);
  frm.chbBit18.checked = num & (1<<18);
  frm.chbBit17.checked = num & (1<<17);
  frm.chbBit16.checked = num & (1<<16);
  frm.chbBit15.checked = num & (1<<15);
  frm.chbBit14.checked = num & (1<<14);
  frm.chbBit13.checked = num & (1<<13);
  frm.chbBit12.checked = num & (1<<12);
  frm.chbBit11.checked = num & (1<<11);
  frm.chbBit10.checked = num & (1<<10);
  frm.chbBit9.checked = num & (1<<9);
  frm.chbBit8.checked = num & (1<<8);
  frm.chbBit7.checked = num & (1<<7);
  frm.chbBit6.checked = num & (1<<6);
  frm.chbBit5.checked = num & (1<<5);
  frm.chbBit4.checked = num & (1<<4);
  frm.chbBit3.checked = num & (1<<3);
  frm.chbBit2.checked = num & (1<<2);
  frm.chbBit1.checked = num & (1<<1);
  frm.chbBit0.checked = num & (1<<0);
}

function AllChecked() {
  //var output = createHtmlList(document.frmConvert.ed_input.value);
  //document.frmConvert.ed_output.value = output;
  var frm = document.frmConvert;
  frm.chbBit31.checked = true;
  frm.chbBit30.checked = true;
  frm.chbBit29.checked = true;
  frm.chbBit28.checked = true;
  frm.chbBit27.checked = true;
  frm.chbBit26.checked = true;
  frm.chbBit25.checked = true;
  frm.chbBit24.checked = true;
  frm.chbBit23.checked = true;
  frm.chbBit22.checked = true;
  frm.chbBit21.checked = true;
  frm.chbBit20.checked = true;
  frm.chbBit19.checked = true;
  frm.chbBit18.checked = true;
  frm.chbBit17.checked = true;
  frm.chbBit16.checked = true;
  frm.chbBit15.checked = true;
  frm.chbBit14.checked = true;
  frm.chbBit13.checked = true;
  frm.chbBit12.checked = true;
  frm.chbBit11.checked = true;
  frm.chbBit10.checked = true;
  frm.chbBit9.checked  = true;
  frm.chbBit8.checked  = true;
  frm.chbBit7.checked  = true;
  frm.chbBit6.checked  = true;
  frm.chbBit5.checked  = true;
  frm.chbBit4.checked  = true;
  frm.chbBit3.checked  = true;
  frm.chbBit2.checked  = true;
  frm.chbBit1.checked  = true;
  frm.chbBit0.checked  = true;
  frm.hex.value = "0x" + pad("FFFFFFFF".toString(16), 8);                              
}


function UnChecked() {
  //var output = createHtmlList(document.frmConvert.ed_input.value);
  //document.frmConvert.ed_output.value = output;
  var frm = document.frmConvert;
  frm.chbBit31.checked = false;
  frm.chbBit30.checked = false;
  frm.chbBit29.checked = false;
  frm.chbBit28.checked = false;
  frm.chbBit27.checked = false;
  frm.chbBit26.checked = false;
  frm.chbBit25.checked = false;
  frm.chbBit24.checked = false;
  frm.chbBit23.checked = false;
  frm.chbBit22.checked = false;
  frm.chbBit21.checked = false;
  frm.chbBit20.checked = false;
  frm.chbBit19.checked = false;
  frm.chbBit18.checked = false;
  frm.chbBit17.checked = false;
  frm.chbBit16.checked = false;
  frm.chbBit15.checked = false;
  frm.chbBit14.checked = false;
  frm.chbBit13.checked = false;
  frm.chbBit12.checked = false;
  frm.chbBit11.checked = false;
  frm.chbBit10.checked = false;
  frm.chbBit9.checked  = false;
  frm.chbBit8.checked  = false;
  frm.chbBit7.checked  = false;
  frm.chbBit6.checked  = false;
  frm.chbBit5.checked  = false;
  frm.chbBit4.checked  = false;
  frm.chbBit3.checked  = false;
  frm.chbBit2.checked  = false;
  frm.chbBit1.checked  = false;
  frm.chbBit0.checked  = false;
  frm.hex.value = "0x" + pad("00000000".toString(16), 8);                              
}

function Toggle() {
  var frm = document.frmConvert;
  frm.chbBit31.checked = (frm.chbBit31.checked)? false: true;
  frm.chbBit30.checked = (frm.chbBit30.checked)? false: true;
  frm.chbBit29.checked = (frm.chbBit29.checked)? false: true;
  frm.chbBit28.checked = (frm.chbBit28.checked)? false: true;
  frm.chbBit27.checked = (frm.chbBit27.checked)? false: true;
  frm.chbBit26.checked = (frm.chbBit26.checked)? false: true;
  frm.chbBit25.checked = (frm.chbBit25.checked)? false: true;
  frm.chbBit24.checked = (frm.chbBit24.checked)? false: true;
  frm.chbBit23.checked = (frm.chbBit23.checked)? false: true;
  frm.chbBit22.checked = (frm.chbBit22.checked)? false: true;
  frm.chbBit21.checked = (frm.chbBit21.checked)? false: true;
  frm.chbBit20.checked = (frm.chbBit20.checked)? false: true;
  frm.chbBit19.checked = (frm.chbBit19.checked)? false: true;
  frm.chbBit18.checked = (frm.chbBit18.checked)? false: true;
  frm.chbBit17.checked = (frm.chbBit17.checked)? false: true;
  frm.chbBit16.checked = (frm.chbBit16.checked)? false: true;
  frm.chbBit15.checked = (frm.chbBit15.checked)? false: true;
  frm.chbBit14.checked = (frm.chbBit14.checked)? false: true;
  frm.chbBit13.checked = (frm.chbBit13.checked)? false: true;
  frm.chbBit12.checked = (frm.chbBit12.checked)? false: true;
  frm.chbBit11.checked = (frm.chbBit11.checked)? false: true;
  frm.chbBit10.checked = (frm.chbBit10.checked)? false: true;
  frm.chbBit9.checked  = (frm.chbBit9.checked )? false: true;
  frm.chbBit8.checked  = (frm.chbBit8.checked )? false: true;
  frm.chbBit7.checked  = (frm.chbBit7.checked )? false: true;
  frm.chbBit6.checked  = (frm.chbBit6.checked )? false: true;
  frm.chbBit5.checked  = (frm.chbBit5.checked )? false: true;
  frm.chbBit4.checked  = (frm.chbBit4.checked )? false: true;
  frm.chbBit3.checked  = (frm.chbBit3.checked )? false: true;
  frm.chbBit2.checked  = (frm.chbBit2.checked )? false: true;
  frm.chbBit1.checked  = (frm.chbBit1.checked )? false: true;
  frm.chbBit0.checked  = (frm.chbBit0.checked )? false: true;
  binChange();
                            
}

function COPY(){
  var Text = document.querySelector("input[type='text']");
  Text.select();
  navigator.clipboard.writeText(Text.value);
}

function PASTE(){
  var frm = document.frmConvert;
  navigator.clipboard.readText().then((copiedText) => {
  frm.hex.value = copiedText;                              
  // console.log(copiedText); // copied text will be shown here.
});
}