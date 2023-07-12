const video = document.querySelector('.video > video');
const moreVideoBlock = document.querySelector('.more__video-block')



function videoResize() {
  console.log(window.innerWidth);
  console.log(window.innerWidth - 40 - 350 - 30);
  if(window.innerWidth > 1920) return
  let videoWidth = window.innerWidth - 40 - 350 - 30
  if(window.innerWidth <= 1200){
    videoWidth = window.innerWidth - 24
  }
  let videoHeight = videoWidth / 2
  if(window.innerWidth <= 576){
    videoHeight = videoWidth - 100
  }
  console.log(videoWidth,videoHeight);
  video.style.width = `${videoWidth}px`
  video.style.height = `${videoHeight}px`
  moreVideoBlock.style.maxHeight = `${window.innerWidth < 576 ? videoHeight + 100 : videoHeight - 36}px`
}


videoResize()

window.addEventListener("resize", videoResize)
