import Sample from './lib/Sample';
import $ from 'jquery';
import UserAgent from './lib/UserAgent';

$('.wrapper').on('click', () => {
    console.log(`hello, ${sample.name}.`);
});
const ua = new UserAgent();
const target = document.getElementsByClassName('hoge')[0];
console.log(ua.WEB_VIEW);    
target.innerHTML = `WebViewですか？ -> ${ua.WEB_VIEW}`;
