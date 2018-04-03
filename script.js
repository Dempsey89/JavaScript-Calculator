$(document).ready(function(){
  var res=[];
  
  //clear all
  $('#bd').on('click', function () {
        res.splice(0);
        $('#calc').html(0);
  });
  //clear last entry
  $('#bbo').on('click', function () {
        res.splice(-1);
    if(res.length <=0){
        $('#calc').html(0);
    }
    else{
      $('#calc').html(res);
    }
  });
  
  //add numbers to screen
  $('.bt').click(function(){
  var ent=$(this).attr("value");
    res.push(ent);
   $('#calc').html(res);
    });
  
  //operators
  $('.btOp').click(function(){
    var op=$(this).attr("val");
    var opp=['+','-','*','/'];
    var op2=res.slice(-1)[0];
      if(res.length <=0){
       $('#calc').html(0);
      } 
    else if(op2==='+' || op2==='-' || op2==='*' || op2==='/'){
       $('calc').html(res);     
            } else{
              res.push(op);
        $('#calc').html(res);
               }
      })
     //decimal
  $('.btD').click(function(){
    var i=res.lastIndexOf('+');
    var io=res.lastIndexOf('-');
    var ip=res.lastIndexOf('*');
    var il=res.lastIndexOf('/');
    var ii=res.lastIndexOf('.');
    var opp=$(this).attr('v');
    if(res.includes('.')=== false || i>ii || io>ii || ip>ii || il>ii){
    res.push(opp);
    $('#calc').html(res);}
  })
  
  //equals
  $('.btEq').click(function(){
    var ans=res.join('');
    var anss=eval(ans);
    $('#calc').html(anss);
    res.splice(0,res.length);
    res.push(anss);
  })
         
       })