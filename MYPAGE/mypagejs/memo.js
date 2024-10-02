// 메모 데이터를 저장하는 배열
let memoList = [
    { text: "메모 1: 중요한 일정을 기록하세요." },
    { text: "메모 2: 해야 할 일 목록을 작성하세요." },
    { text: "메모 3: 학습 목표를 정리하세요." }
];

// 메모장 페이지에 내용을 삽입하는 함수
function loadMemoContent() {
    const memoContainer = document.getElementById('memo');
    memoContainer.innerHTML = `
        <h2>메모장</h2>
        <div>
            <input type="text" id="newMemo" placeholder="새 메모 입력" />
            <button onclick="addMemo()">추가</button>
        </div>
        <ul id="memoList">
            ${memoList.map((memo, index) => `
                <li>
                    ${memo.text}
                    <button class="delete-btn" onclick="deleteMemo(${index})">삭제</button>
                </li>
            `).join('')}
        </ul>
    `;
}

// 메모 추가 함수
function addMemo() {
    const newMemoInput = document.getElementById('newMemo');
    const newMemoText = newMemoInput.value.trim();

    if (newMemoText !== "") {
        // 메모 리스트에 추가
        memoList.push({ text: newMemoText });
        // 입력 필드 초기화
        newMemoInput.value = "";
        // 화면 업데이트
        loadMemoContent();
    } else {
        alert("메모를 입력하세요.");
    }
}

// 메모 삭제 함수
function deleteMemo(index) {
    // 선택된 메모를 배열에서 삭제
    memoList.splice(index, 1);
    // 화면 업데이트
    loadMemoContent();
}

// 페이지 로드 시 메모장 내용 로드
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById('memo')) {
        loadMemoContent();
    }
});
