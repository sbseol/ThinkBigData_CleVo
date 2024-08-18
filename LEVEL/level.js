document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submit');
    const searchInput = document.getElementById('category-search');
    const addCategoryBtn = document.getElementById('add-category-btn');
    const categoryList = document.getElementById('category-list');

    // 기존 카테고리 리스트
    const categories = [
        { id: 'hobby', label: '취미생활' },
        { id: 'business', label: '비즈니스' },
        { id: 'travel', label: '해외여행' },
        { id: 'everyday', label: '일상생활' },
        { id: 'shopping', label: '쇼핑' },
    ];

    // 카테고리 리스트 업데이트 함수
    function updateCategoryList() {
        categoryList.innerHTML = '';
        categories.forEach(category => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'category';
            checkbox.id = category.id;
            const label = document.createElement('label');
            label.htmlFor = category.id;
            label.innerText = category.label;
            categoryList.appendChild(checkbox);
            categoryList.appendChild(label);
        });
    }

    // 초기 카테고리 리스트 렌더링
    updateCategoryList();

    // '+' 버튼 클릭 이벤트 리스너 추가
    addCategoryBtn.addEventListener('click', () => {
        const filter = searchInput.value.trim();
        if (filter && !categories.some(category => category.label === filter)) {
            categories.push({ id: filter, label: filter });
            updateCategoryList();
            searchInput.value = '';
        }
    });

    submitBtn.addEventListener('click', async () => {
        const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
                                        .map(checkbox => checkbox.id);
        const selectedLevel = document.querySelector('input[name="level"]:checked')?.id;

        if (selectedCategories.length === 0) {
            alert('카테고리를 하나 이상 선택해주세요.');
            return;
        }

        if (!selectedLevel) {
            alert('레벨을 선택해주세요.');
            return;
        }

        const data = {
            categories: selectedCategories,
            level: selectedLevel
        };

        try {
            const response = await fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                window.location.href = '../MAIN/main2.html';
            } else {
                const result = await response.json();
                alert(result.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('제출 중 오류가 발생했습니다.');
        }
    });
});
