document.addEventListener("DOMContentLoaded", function() {
    const settingContainer = document.getElementById('setting');
    
    settingContainer.innerHTML = `
        <div class="setting-container">
            <h2><i class="fa-solid fa-gear"></i> 회원정보변경</h2>
            <div class="password-confirmation">
                <p>개인정보 수정을 위해서 비밀번호를 다시한번 입력해 주세요.</p>
                <input type="password" id="password" placeholder="비밀번호 입력">
                <button class="password-confirm-btn">비밀번호 입력</button>
            </div>

            <h2><i class="fa-solid fa-gear"></i> 맞춤형 추천항목 변경</h2>
            <div class="recommendation-settings">
                <p>학습을 원하는 카테고리를 모두 골라주세요</p>
                <div class="category-options">
                    <button class="category-btn">취미생활</button>
                    <button class="category-btn">인간관계</button>
                    <button class="category-btn">여가생활</button>
                    <button class="category-btn">학업/진로</button>
                    <button class="category-btn">수다</button>
                </div>
                <p>학습을 원하는 레벨을 골라주세요</p>
                <div class="level-options">
                    <button class="level-btn">하</button>
                    <button class="level-btn">중</button>
                    <button class="level-btn">상</button>
                </div>
            </div>

            <div class="form-actions">
                <button class="save-btn">저장하기</button>
            </div>
        </div>
    `;
});
