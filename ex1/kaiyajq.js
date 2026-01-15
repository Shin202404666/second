// jquery 用
// <script src="https://code.jquery.com/jquery-3.3.1.min.js">

// 学内ローカルなサイトの設定関数
// 学内ローカルサイトは クラス insidesite をつける
// そのサイトは / から始まる絶対パスでかいて，
// プトロコルとホスト名は指定しない．
// このスクリプトで，プロトコルとホスト名を一律につける

// 使い方
//  <a class="insidesite" href="/~kaiya/lab/setup.html">[HTML]</a>
// 等．href は絶対パス

// 2016/12/24

// ホームページ直下へのリンクへのprefixをつける

// 使い方
//  <a class="underhp" href="/2013/se/">[HTML]</a>
//  <img class="underhp" src="/new.gif" boder="0">
// 等．href は絶対パス
// この script 自体は直にホームページを指定しないとあかん．
// 2018/3/19

$(document).ready(
function(){
	// pref="http://www.educ.info.kanagawa-u.ac.jp";
	pref="http://133.72.250.112/~kaiya";
	s=document.getElementsByClassName("insidesite");
	for(i=0; i<s.length; i++){
		if(s[i].hasAttribute("href")){
			page=s[i].getAttribute("href");
			s[i].setAttribute("href", pref+page);
		}
	}
	uhp="https://www.sci.kanagawa-u.ac.jp/info/kaiya";
	s=document.getElementsByClassName("underhp");
	for(i=0; i<s.length; i++){
		if(s[i].hasAttribute("href")){
			page=s[i].getAttribute("href");
			s[i].setAttribute("href", uhp+page);
		}
		if(s[i].hasAttribute("src")){
			page=s[i].getAttribute("src");
			s[i].setAttribute("src", uhp+page);
		}
	}
	// alert("xxx");

});
