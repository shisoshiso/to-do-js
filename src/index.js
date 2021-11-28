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

  // button(完了)作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  // button(削除)作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    // parentNodeを２回つけるのが気になるが、、
    const deleteTarget = deleteButton.parentNode.parentNode;
    // console.log(deleteTarget)
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // liの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
