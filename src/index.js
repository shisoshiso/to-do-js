import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");

  // p作成
  const p = document.createElement("p");
  p.className = "list-name";
  p.innerText = inputText;

  // liの子要素に各要素を設定
  div.appendChild(p);
  li.appendChild(div);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
