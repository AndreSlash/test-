

const scContainer = document.getElementById("js--sc--container");
const sc = new ScratchCard("#js--sc--container", {
  scratchType: SCRATCH_TYPE.CIRCLE,
  containerWidth: scContainer.offsetWidth,
  containerHeight: 300,
  imageForwardSrc:
    "img/rave.jpg",
  imageBackgroundSrc:
    "https://uploads.codesandbox.io/uploads/user/a5aec563-412a-454f-a80f-dc430ffbf7c5/4Li9-result.jpg",
  htmlBackground: '<p class="test"><strong>You won 100 !</strong></p>',
  clearZoneRadius: 30,
  percentToFinish: 90, // When the percent exceeds 50 on touchend event the callback will be exec.
  callback: function() {
    alert("Card Scratched");
  }
});
sc.init().then(() => {
  sc.canvas.addEventListener("scratch.move", () => {
    this.percent = sc.getPercent().toFixed(2);
  });
});
