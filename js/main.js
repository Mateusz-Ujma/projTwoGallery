const gallery = document.querySelector('.portfolio');

const galleryChild = [];

const GetRatio = (img) => {
  const aspectRatio = img.naturalHeight / img.naturalWidth;
  return aspectRatio;
};

for (let i = 0; i < gallery.children.length; i++) {
  if (GetRatio(gallery.children[i].children[0]) == 1) {
    console.log('normal');
    gallery.children[i].classList.add('normal');
  } else if (GetRatio(gallery.children[i].children[0]) < 1.1) {
    console.log(
      gallery.children[i].children[0].naturalHeight,
      gallery.children[i].children[0].naturalWidth,
      'wide'
    );
    gallery.children[i].classList.add('wide');
  } else if (GetRatio(gallery.children[i].children[0]) > 1) {
    console.log(
      gallery.children[i].children[0].naturalHeight,
      gallery.children[i].children[0].naturalWidth,
      'tall'
    );
    gallery.children[i].classList.add('tall');
  } else if (GetRatio(gallery.children[i].children[0]) > 1) {
    console.log(
      gallery.children[i].children[0].naturalHeight,
      gallery.children[i].children[0].naturalWidth,
      'tall'
    );
    gallery.children[i].classList.add('tall');
  }

  // console.log(GetRatio(gallery.children[i].children[0]));
}
for (let i = 0; i < gallery.children.length; i++) {
  galleryChild.push(gallery.children[i]);
}
