// ==UserScript==
// @name         必应主题
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  美化必应搜索页面
// @author       Onion
// @require      https://cdn.staticfile.org/jquery/3.4.0/jquery.min.js
// @require      https://cdn.staticfile.org/jquery-cookie/1.4.1/jquery.cookie.min.js
// @include      *//cn.bing.com/*
// @include       *//bing.com/*
// @include       *bing.com/*
 
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bing.com
// @grant        none
// @license MIT
// ==/UserScript==
 
(function() {
    'use strict';
    var searchBox=document.getElementsByClassName("b_searchbox")[0];
    var searchboxForm=document.getElementsByClassName("b_searchboxForm")[0];
    var temp=document.getElementById('b_content');
    var temp2=document.getElementById('b_results');
    var temp3=document.getElementById('b_header');
    var b_rrsr=document.getElementsByClassName('b_rrsr');
    var tab1=document.getElementsByClassName("tab-menu");
    var b_algo=document.getElementsByClassName('b_algo');
    var trans1=document.getElementsByClassName('b_title');
    var b_context=document.getElementById('b_context');
    var slide=document.getElementsByClassName("slide")
    var length1=b_context.children.length
    var nws_cwrp= document.getElementsByClassName("nws_cwrp")
    b_context.children[length1-1].style.display="none";
    temp3.style.backgroundImage="linear-gradient(to right, #FFDDEE , skyblue)";
    temp.style.backgroundImage="linear-gradient(to right, #FFDDEE , skyblue)";
    // setTimeout(function(){
    var b_ans=document.getElementsByClassName('b_ans');
    for(let k=0; k<=b_ans.length-1;k++)
    {
        b_ans[k].style.borderRadius="10px";
        b_ans[k].style.background="#ffffff57"
    }
    //  },100);
 
    if(b_rrsr[0]){
        for(let k=0; k<=b_rrsr.length-1;k++)
        {
            //  b_rrsr[k].style.borderRadius="10px";
            b_rrsr[0].style.background="transparent";
        }}
    setTimeout(function(){
        for(let i=0;i<=b_algo.length-1;i++)
        {
            b_algo[i].style.borderRadius="10px";
            b_algo[i].style.background="#ffffff57"
            b_algo[i].style.caretColor="transparent";
        }
    },100)
 
 
    if(tab1.length>0){
        //    for(let k=0; k<=tab1.length-1;k++)
        //   {
        for(let i=0;i<=tab1[0].children[0].children.length-1;i++){
            tab1[0].children[0].children[i].style.backgroundColor=("transparent");
        }
        //  }
    }
    for(let i=0;i<=trans1.length-1;i++)
    {
        trans1[i].style.translate="23px"; //这一句有报错，但是我看不懂
    }
 
 
    // searchBox.style.setProperty('width', '480px', 'important');
    searchBox.style.transition="all 0.5s"
 
    function move1(){ searchBox.onmousedown=function(){
        searchBox.style.width="77vh";
    }}
    temp.onmousedown=function(){
        searchBox.style.width="522px";
    }
    move1();
 
    // $.cookie('flag', '0')
    var button_1 = document.createElement("button"); //创建一个按钮
    button_1.textContent = "透明"; //按钮内容
    button_1.style.width = "60px"; //按钮宽度
    button_1.style.height = "30px"; //按钮高度
    button_1.style.align = "center"; //居中
    button_1.style.color = "#444444"; //按钮文字颜色
    button_1.style.border = "none"; //按钮文字颜色
    button_1.style.background = "transparent"; //按钮底色
    button_1.addEventListener("click", clickButton_1)
    function clickButton_1(){
        searchboxForm.style.background="transparent"
        $.cookie('flag', '1')
 
    }
    if($.cookie('flag')==1){
        searchboxForm.style.background="transparent"
    }
 
    var button_2 = document.createElement("button"); //创建一个按钮
    button_2.textContent = "炫彩"; //按钮内容
    button_2.style.width = "60px"; //按钮宽度
    button_2.style.height = "30px"; //按钮高度
    button_2.style.align = "center"; //居中
    button_2.style.color = "#444444"; //按钮文字颜色
    button_2.style.border = "none"; //按钮文字颜色
    button_2.style.background = "transparent"; //按钮底色
    button_2.addEventListener("click", clickButton_2)
    function clickButton_2(){
        $.cookie('flag', '2')
        searchboxForm.style.backgroundImage="linear-gradient(to right, rgb(255, 221, 238), skyblue)";
    }
    if($.cookie('flag')==2){
        searchboxForm.style.backgroundImage="linear-gradient(to right, rgb(255, 221, 238), skyblue)";
    }
    var b_scopebar=document.getElementsByClassName("b_scopebar");
    b_scopebar[0].children[0].appendChild(button_1);
    b_scopebar[0].children[0].appendChild(button_2);
 
    for(let i=0;i<= slide.length-1;i++)
    {
        slide[i].children[0].style.background="transparent"
    }
    nws_cwrp[0].style.background="transparent"
    document.getElementsByClassName("mc_vhvc_th")[0].children[0].style.background="transparent"
    document.getElementsByClassName("mc_vhvc_th")[1].children[0].style.background="transparent"
    document.getElementsByClassName("mc_vhvc_th")[2].children[0].style.background="transparent"
    //手打，懒了
    var loop= setInterval(function(){
        for(let i=0;i<= document.getElementsByClassName("na_ccw").length-1;i++)
        {
            document.getElementsByClassName("na_ccw")[i].style.background="transparent"
        }
        if(document.getElementsByClassName("na_ccw")[4].style.background=="transparent"){
            clearInterval(loop);
            console.log("渲染完成")
        }},100)
    /*  var a=function(){
    for(let i=0;i<=100;i++){
        temp.style.opacity="i/100";
    }
    }
    a();
    window.onload = function(){
	// 透明度来回变换
	var timer1 = setInterval(colorLiner,20);
	var val1 =0;
	function colorLiner(){
		//var Div = document.getElementById('img_eat');
        if(val1<=100){
			temp.style.opacity = val1/100;
 
		val1++;
	}}
}*/
 
 
 
    })();
