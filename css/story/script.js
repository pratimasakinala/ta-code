// Change the scheme of text block
function changeScheme(e) {
  e.preventDefault();
  var parent;

  // change text div style
  if (this.parentElement.parentElement.parentElement.classList.contains('style4')) {
    this.parentElement.parentElement.parentElement.classList.toggle('scheme');
  } else if (this.parentElement.parentElement.parentElement.classList.contains('style5')) {
    this.parentElement.parentElement.parentElement.classList.toggle('schemeBg');
  } else {
    this.parentElement.parentElement.classList.toggle('scheme');
  }

  // change button style
  if (this.parentElement.parentElement.parentElement.classList.contains('style3') || this.parentElement.parentElement.parentElement.classList.contains('style4')) {
    parent = this.parentElement.parentElement.children[2];
    parent.classList.toggle('scheme');
  } else {
    parent = this.parentElement.parentElement.children[3];
    parent.classList.toggle('scheme');
  }

  // change border of button
  if (parent.classList.contains('scheme'))
    parent.style.border = "1px solid white";
  else
    parent.style.border = "1px solid #000000";
}

// Change the orientation of text block
function changeOrientation(e) {
  e.preventDefault();
  var parent = this.parentElement.parentElement.parentElement;

  if (parent.classList.contains('style2') || parent.classList.contains('style3') || parent.classList.contains('style5')) {
    if (parent.style.justifyContent == 'flex-end')
      parent.style.justifyContent = 'flex-start';
    else if (parent.style.justifyContent == 'flex-start')
      parent.style.justifyContent = 'center'
    else
      parent.style.justifyContent = 'flex-end'
  } else {
    parent.children[0].classList.toggle('orientation');
  }
}

// Change text-align of text block
function changeContentAlign(e) {
  e.preventDefault();
  var parent = this.parentElement.parentElement.parentElement.className;

  if (document.getElementsByClassName(parent)[0].children[0].style.textAlign == 'center')
    document.getElementsByClassName(parent)[0].children[0].style.textAlign = 'right';
  else if (document.getElementsByClassName(parent)[0].children[0].style.textAlign == 'right')
    document.getElementsByClassName(parent)[0].children[0].style.textAlign = 'left';
  else
    document.getElementsByClassName(parent)[0].children[0].style.textAlign = 'center';
}

// Event listeners for scheme change
document.getElementById('bg1').addEventListener('click', changeScheme);
document.getElementById('bg2').addEventListener('click', changeScheme);
document.getElementById('bg3').addEventListener('click', changeScheme);
document.getElementById('bg4').addEventListener('click', changeScheme);
document.getElementById('bg5').addEventListener('click', changeScheme);

// Event listeners for orientation change
document.getElementById('side1').addEventListener('click', changeOrientation);
document.getElementById('side2').addEventListener('click', changeOrientation);
document.getElementById('side3').addEventListener('click', changeOrientation);
document.getElementById('side4').addEventListener('click', changeOrientation);

// Event listeners for content alignment change
document.getElementById('content1').addEventListener('click', changeContentAlign);
document.getElementById('content2').addEventListener('click', changeContentAlign);
document.getElementById('content3').addEventListener('click', changeContentAlign);
document.getElementById('content4').addEventListener('click', changeContentAlign);
document.getElementById('content5').addEventListener('click', changeContentAlign);
