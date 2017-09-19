function UnityProgress(gameInstance, progress) {
  if (!gameInstance.Module)
    return;
  if (!gameInstance.progress) {    
    gameInstance.progress = document.getElementById("bgBar");
    gameInstance.progress.full = document.getElementById("progressBar");
  }
  gameInstance.progress.full.style.width = (25 * progress) + "%";
  if (progress == 1) {
    gameInstance.progress.style.display = "none";
    gameInstance.progress.full.style.display = "none";
    document.getElementById("loadingInfo").innerHTML = "";
  }
}