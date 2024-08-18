// mystudy.js

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
    dailyGoal: 5
};

// Populate My Study section
function populateMyStudy() {
    const container = document.getElementById('mystudy');
    container.innerHTML = `
        <div class="profile-info">
            <p>${userData.username} ${userData.greeting}</p>
        </div>
        <div class="recent-sentence">
            <h3>최근 학습 문장</h3>
            <p>${userData.recentSentence.text}</p>
            <p>Score: ${userData.recentSentence.score}</p>
        </div>
        <div class="review-sentences">
            <h3>보관 문장</h3>
            <ul>
                ${userData.reviewSentences.map(sentence => `
                    <li>
                        ${sentence.text} <span>${sentence.score}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
        <div class="learning-progress">
            <p>오늘의 학습진도율은 ${userData.progressRate}%입니다!</p>
        </div>
        <div class="daily-goal">
            <p>현재 학습목표로 설정된 문장 수는 ${userData.dailyGoal}개 입니다.</p>
            <button onclick="adjustGoal(-1)">-</button>
            <span>${userData.dailyGoal}</span>
            <button onclick="adjustGoal(1)">+</button>
            <button onclick="applyGoal()">적용하기</button>
        </div>
    `;
}

// Adjust daily goal
function adjustGoal(change) {
    userData.dailyGoal += change;
    const goalSpan = document.querySelector('.daily-goal span');
    if (userData.dailyGoal < 1) {
        userData.dailyGoal = 1;
    }
    goalSpan.textContent = userData.dailyGoal;
}

// Apply new goal
function applyGoal() {
    alert(`새로운 목표: ${userData.dailyGoal} 문장`);
}

// Call populateMyStudy when the page is loaded
document.addEventListener("DOMContentLoaded", populateMyStudy);
