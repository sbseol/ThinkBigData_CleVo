// memo.js

// 메모장 페이지에 내용을 삽입하는 함수
function loadMemoContent() {
    const memoContainer = document.getElementById('memo');
    memoContainer.innerHTML = `
        <h2>메모장</h2>
        <p>여기에 사용자의 메모 내용을 표시합니다.</p>
        <ul>
            <li>메모 1: 중요한 일정을 기록하세요.</li>
            <li>메모 2: 해야 할 일 목록을 작성하세요.</li>
            <li>메모 3: 학습 목표를 정리하세요.</li>
        </ul>
    `;
}

// 페이지 로드 시 메모장 내용 로드
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById('memo')) {
        loadMemoContent();
    }
});
