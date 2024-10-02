const userData = {
    username: "Clevo12",
    greeting: "안녕하세요!",
    recentSentence: {
        text: "Laughing out loud makes me slow down when I'm in mental burden.",
        score: 95
    },
    reviewSentences: [
        { text: "Laughing out loud makes me slow down when I'm in mental burden.", score: 32 },
        { text: "Laughing out loud makes me slow down when I'm in mental burden.", score: 43 },
        { text: "Laughing out loud makes me slow down when I'm in mental burden.", score: 76 },
        { text: "Laughing out loud makes me slow down when I'm in mental burden.", score: 87 },
        { text: "Laughing out loud makes me slow down when I'm in mental burden.", score: 25 }
    ],
    progressRate: 80,
    dailyGoal: 5,
    maxGoal: 10
};

function populateMyStudy() {
    const container = document.getElementById('mystudy');
    container.innerHTML = `
        <div class="profile-info-container">
            <h4>프로필 정보</h4>
            <div class="profile-info box-section">
                <span>'${userData.username}'님 ${userData.greeting}</span>
            </div>
        </div>
        <div class="recent-sentence-container">
            <h4>최근 학습 문장</h4>
            <div class="recent-sentence box-section">
                <span>${userData.recentSentence.text}</span>
                <span>${userData.recentSentence.score}</span>
            </div>
        </div>
        <div class="review-sentences-container">
            <h4>보관 문장</h4>
            <div class="review-sentences box-section">
                <ul>
                    ${userData.reviewSentences.map((sentence, index) => `
                        <li class="review-sentence-item">
                            <span>${sentence.text}</span> 
                            <span class="sentence-score">${sentence.score}</span>
                            <button class="delete-btn" onclick="deleteSentence(${index})">&times;</button>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
        <div class="learning-progress-container">
            <h4>학습 진도율</h4>
            <div class="learning-progress box-section">
                <span>오늘의 학습진도율은 '${userData.progressRate}%'입니다!</span>
            </div>
        </div>
        <div class="daily-goal-container">
        <h4>일일 학습 목표</h4>
        <div class="daily-goal box-section">
            <p>현재 학습목표로 설정된 문장 수는 <span class="goal-count">${userData.dailyGoal}</span>개 입니다.</p>
            <div class="goal-controls">
                <button class="goal-btn" onclick="adjustGoal(-1)">-</button>
                <span class="goal-display">${userData.dailyGoal}</span>
                <button class="goal-btn" onclick="adjustGoal(1)">+</button>
            </div>
            <button class="apply-btn" onclick="applyGoal()">적용하기</button>
        </div>
</div>


    `;
}

// 보관 문장 삭제 함수
function deleteSentence(index) {
    userData.reviewSentences.splice(index, 1);  // 선택된 문장을 배열에서 삭제
    populateMyStudy();  // 화면을 다시 렌더링
}

// Adjust daily goal
function adjustGoal(change) {
    userData.dailyGoal += change;
    if (userData.dailyGoal < 1) {
        userData.dailyGoal = 1;
    } else if (userData.dailyGoal > userData.maxGoal) {
        userData.dailyGoal = userData.maxGoal;
    }
    const goalSpan = document.querySelector('.daily-goal span');
    goalSpan.textContent = userData.dailyGoal;
}

// Apply new goal
function applyGoal() {
    alert(`새로운 목표: ${userData.dailyGoal} 문장`);
}

// Call populateMyStudy when the page is loaded
document.addEventListener("DOMContentLoaded", populateMyStudy);
