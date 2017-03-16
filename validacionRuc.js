function validaRUC(ruc){
  var lv_cedula;
  var lv_vec3;
  var lv_numruc;
  var ll_rc;
  var ll_fin;
  //ruc=new String(ruc.value);
  ll_rc=false;
  lv_numruc=ruc;
  // Control de los 3 ?ltimos d?gitos
  ll_fin=ruc.substring(10,13);
  if(ll_fin!='001') return false;
  if(isNaN(Number(ruc))) return false;
  lv_cedula=ruc.substring(0,10);
  if(isNaN(Number(lv_cedula)) || lv_numruc.length!=13) return false;
  lv_vec3=Number(lv_numruc.substring(2,3));
  if(lv_vec3>=0 && lv_vec3<=5) ll_rc=validaCedula(lv_cedula);
  else if(lv_vec3==6) ll_rc=validaTercero6(lv_cedula);
  else if(lv_vec3==9) ll_rc=validaTercero9(lv_cedula);
  return ll_rc;
}