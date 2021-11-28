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
    // 押された完了ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstChild.firstElementChild.innerText;

    // li以下を初期化
    addTarget.textContent = null;

    // div生成
    const div = document.createElement("div");
    div.className = "list-row";

    // p作成
    const p = document.createElement("p");
    p.className = "list-name";
    p.innerText = text;

    // button作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // liタグの子要素に各要素を設定
    div.appendChild(p);
    div.appendChild(backButton);
    addTarget.appendChild(div);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  // liの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  // parentNodeを２回つけるのが気になるが、、
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
