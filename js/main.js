'use strict';


{
  // ----------------------
  // ハンバーガーメニューの実装
  // ----------------------
  const overlay = document.querySelector('.overlay');
  const open = document.querySelector('#open');
  const close = document.querySelector('#close');
  const fv = document.querySelector('.fv');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
    fv.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
    fv.classList.remove('hide');
  });

  // ----------------------
  // carouselの実装
  // ----------------------
  // const ul = document.querySelector('.slider');
  // // ①要素１をリストの最後に移動する
  // const elementFirstItem = document.querySelector('.slider-item')[0];
  // const copyElementFirstItem = elementFirstItem.cloneNode(true);
  // const setElementLastItem = document.querySelector('.slider-item')[ul.length];
  // ul.insertBefore(copyElementFirstItem,setElementLastItem);

  // // ②要素３をリストの最初に移動する
  // const elementLastItem = document.querySelector('.slider-item')[ul.length -2];
  // const copyElementLastItem = elementLastItem.cloneNode(true);
  // const setElementFirstItem = document.querySelector('.slider-item')[0];
  // ul.insertBefore(copyElementLastItem,setElementFirstItem);

  // let currentIndex = 0;

  // // 現在インデックスの更新
  // function updateIndex(){
  //   if(currentIndex == 3){
  //     currentIndex = 0;
  //   }
  //   else{
  //     currentIndex++;
  //   }
  // };

  // // アニメーションスタイルの適用
  // function slideTransformNext(){
  //   if(currentIndex == 1){
  //     ul.classList.remove('transform-on');
  //     ul.classList.add('transform-off');
  //   }
  //   else{
  //     ul.classList.remove('transform-off');
  //     ul.classList.add('transform-on');
  //   }
  // };

  // // 自動でスライドさせる
  // const slidePageTime = 700;
  // function slideAuto(){
  //   timeCount = setTimeout(() => {
  //     clearTimeout(timeCount);
  //     setTimeout(slideAuto,slidePageTime);
  //     moveSlider();
  //     pointerNoneFlow();
  //   }, 4000); // 4000ms後に実行
  // };

  // // 次のスライドに移動する
  // function moveSlider(){
  //   updateIndex();        // 現在インデックスの更新
  //   slideTransformNext(); // アニメーションスタイルの適用
  //   slideNext();          // 画面遷移処理

  //   ul.addEventListener('transitionend', () => {
  //     if(currentIndex == 3){
  //       moveSlider();
  //     }
  //   });
  // };

  // window.addEventListener('DOMContentLoaded', () => {
  //   updateIndex();
  //   slideNext();
  //   slideAuto();
  // });

}
