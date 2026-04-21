function copyQQ() {
  const qqNumber = "428488368";
  const tempInput = document.createElement("input");
  tempInput.value = qqNumber;
  tempInput.style.position = "fixed";
  tempInput.style.opacity = "0";
  document.body.appendChild(tempInput);

  tempInput.select();
  tempInput.setSelectionRange(0, 99999);

  try {
    const successful = document.execCommand("copy");
    document.body.removeChild(tempInput);
    if (successful) {
      alert("由于QQ限制，已复制派大星QQ，请手动添加，感谢理解");
    } else {
      prompt("复制失败，请手动复制QQ号：", qqNumber);
    }
  } catch (err) {
    document.body.removeChild(tempInput);
    prompt("复制失败，请手动复制QQ号：", qqNumber);
  }
}

function show_runtime() {
  window.setTimeout(show_runtime, 1000);
  const start = new Date("2025/11/10 00:00:00");
  const now = new Date();
  const diff = now - start;
  const days = Math.floor(diff / (24 * 60 * 60 * 1000));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const span = document.getElementById("runtime_span");
  if (span) {
    span.textContent = `本站勉强运行: ${days}天${hours}小时${minutes}分${seconds}秒`;
  }
}
show_runtime();
