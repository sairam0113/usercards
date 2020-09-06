

var getusers = function(){
    var xhr=new XMLHttpRequest();
    xhr.open("GET","http://dummy.restapiexample.com/api/v1/employees");
    xhr.send();
    xhr.onreadystatechange=function()
    {
        if(xhr.readyState==4 && xhr.status==200)
        {
            var usr=JSON.parse(xhr.responseText);
            console.log(usr);
            createUsers(usr.data);
        }
    };

};


getusers();
var createUsers=function(data)
{
    data.forEach(function(val,idx)
{
    
       
     var divEL=document.createElement('div');
     divEL.setAttribute("id","user-card");

      var imgEl=document.createElement('img');
      imgEl.setAttribute('src',"https://passporthealthplan.com/wp-content/uploads/2014/11/image14-250x250.jpg");
      divEL.appendChild(imgEl);
      divEL.appendChild(document.createElement('br'));
      var lableEL=document.createElement('label');
      lableEL.innerText=val.employee_name;
      lableEL.style.float="left";
      divEL.appendChild(lableEL);
      divEL.appendChild(document.createElement('br'));

      var lableEL2=document.createElement('label');
      lableEL2.innerText="Software Engineer";
      lableEL2.style.fontSize='small';
      lableEL2.style.float="left";
      divEL.appendChild(lableEL2);
      divEL.appendChild(document.createElement('br'));

      var callEL=document.createElement('button');
     callEL.setAttribute('class','button1');
     callEL.innerHTML='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRts7NtlxBaRaoDk71AjVLdqtAXt92sotT11lhG7xFLuN4jv4T&usqp=CAU">Lets talk';
      divEL.appendChild(callEL);
      

      var videocallEL=document.createElement('button');
      videocallEL.setAttribute('class','button2');
      videocallEL.innerHTML= '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUXh/v///8AgvsRhfvq9P4ylvvX6P4hjvrf7P4kkPsAgfsAhPv4/P/z+f8Agfp0s/zI4f4Xi/u92/5Ypfsxk/uSxP2z1f1mq/ynzv2fyP1EnftOoftur/y52P2AuPyPwv2Eu/wAffuu0f3F3v5Bmvvk7/6eyv2FMGjkAAAEZElEQVR4nO3d63aiMBSG4RwQNYFRPFRFrY61vf9LHGLttFajnFr2zvre/13LZ4EEmHFHyNATXX+AHw9C/kHIPwj5ByH/IOQfhPyDkH8Q8g9C/kHIPwj5ByH/IOQfhPyDkH8Q8g9C/kHIPwj5dyWMJqvRNO911XG9WW2jnxNGy7WwxlrdXVYZpfP54EeEr8+Zslp0n9ZKbOLWhclc2K5pn2mrn9N2hXFuulZdpk1/3KZwkhE6gOe0fmtP+KQpfP+usru2hFt6B/CUNvN2hLEgeQSLtNq2IUx6RA9hke43XRmdcE/sKnqRXTQXxiRWeW/qqbFwQ/ccdeleU+GA7GXmnJk0FO5U14QH2WkzYTIjfgiFyF7r6l6L+3cx+NM14GF1rzXRXvwthAfqJ2lxmo7q+JJdpoQqhM+0r6QundfwvWVulXfCKfmvoRCzyk+Kh977XYwTzjr+9CXSouKLm0luzsfNCfvdfvpS6UoX0/H68ybNCTlkK9x9xwv15coSnnAwEhdrQ2jCaJ99e4oIS5jOs6u1PSRhuhzeeMwNSPh0VLcW9mCEL/lNXzDCeG18t55BCOON8t9aByB8Hd391xb2wnQv7j/8MRemK/HoPShrYbKcPX7Py1m47XkWiIv4Cl+OptSTO1dhPC3n4yqMN7r0uyWOwqhYAMu/WuInjIoFsMqrM37CXtkv4Dl+wqrvzfgJhxX/EkIqQegPQipB6A9CKkHoD0IqQegPQipB6A9CKkHoD0IqQegPQipB6A9CKkHoD0IqQegPQipB6A9CKkHoD0IqQegPQipB6A9CKkHoD0IqQegPQipB6A9CKkHoD0IqQeiPn7BfceYTP+F4aisZ+QndhKQqP8/jKJTyUOI33B/xFEq5HJYdMsdVKNN5v9y5ylbofi5b6ufOjIVu5od6fK6yFko5WDxcOpgL3fL45/7Xkb3w4fiIAIRSPs3uGIMQyuTO8hiGsFg6vMtjKEK3PNqb0zLCEfpGYoUkdHM9r5fHsIRuNuv35TE0YfH0+G34SXhCNyP562XVCbPuPnjpbJU5wunbl+XRCYf0p11XnQUd7f6PanXCnL5QDKtuUxY9n4dJOeGI/tT5OjPZB6PTE7ITrugL1aa60A11U/YkjClvMvOeWtYRFstjbkwhTMgPZdei9nZBk1khlOQ3R6jzNfwoSQvhmLrQ1DxJzwkp18SJ/aSp8IX21dQ03EDP7dm1oEy0x2aH8CSMMsr3NU23eTztnUd1c8Ais2oIPO9/uKK69ZqptU3QDaHcV5ya+UuZRcMv4adQzikSzag58HMv2W3V/wTw41nRxkarX/YDHizuTOD//bRat7JZ7sWezpM1GaM1vUMLZ+h3YfG8sekrtyt3lzhtrcmmjTdY9QilTMe7RT4b9jtrdpzuX9rcXP1q93jpHjmi7kpbOjnvCsMKQv5ByD8I+Qch/yDkH4T8g5B/EPIPQv5ByD8I+Qch/yDkH4T8g5B/EPIPQv5ByD8I+Qch//4B05KHuhISmj0AAAAASUVORK5CYII=" >';
      divEL.appendChild(videocallEL);
      var userEl=document.getElementById("users-list");
      userEl.appendChild(divEL);
      if(idx>=10 && idx<=15)
      {
          callEL.setAttribute('disabled','disabled');
          videocallEL.setAttribute('disabled','disabled');
      }

});



}


