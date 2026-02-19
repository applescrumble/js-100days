// 全てのカードを取得して、一枚ずつに設定を行う
const cards = document.querySelectorAll('.card');
const slots = document.querySelectorAll('.slot');

cards.forEach(card => {
    setRandomPosition(card);
    setupDrag(card);
});

function setRandomPosition(card){
    const minX=50;
    const maxX=window.innerWidth-150;
    const minY=350;
    const maxY=window.innerHeight-200;

    const randomX=Math.floor(Math.random()*(maxX-minX))+minX;
    const randomY=Math.floor(Math.random()*(maxY-minY))+minY;

    card.style.left=randomX+'px';
    card.style.top=randomY+'px';
}


function setupDrag(card) {
    card.addEventListener('mousedown', function(e) {
        let shiftX = e.clientX - card.getBoundingClientRect().left;
        let shiftY = e.clientY - card.getBoundingClientRect().top;
        card.style.zIndex = 1000;

        function onMouseMove(e) {
            card.style.left = e.pageX - shiftX + 'px';
            card.style.top = e.pageY - shiftY + 'px';
        }

        document.addEventListener('mousemove', onMouseMove);

        document.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            
            // どの枠に入ったかチェック
            const cardRect = card.getBoundingClientRect();
            let isCorrect = false;

            slots.forEach(slot => {
                const slotRect = slot.getBoundingClientRect();
                
                // 当たり判定
                if (
                    cardRect.left + cardRect.width / 2 > slotRect.left &&
                    cardRect.left + cardRect.width / 2 < slotRect.right &&
                    cardRect.top + cardRect.height / 2 > slotRect.top &&
                    cardRect.top + cardRect.height / 2 < slotRect.bottom
                ) {
                    // ここが大事！カードが持っている「正解ID」と「枠のID」が一致するか
                    if (card.dataset.target === slot.id) {
                        // 正解！吸着させる
                        card.style.left = slotRect.left + (slotRect.width - cardRect.width) / 2 + 'px';
                        card.style.top = slotRect.top + (slotRect.height - cardRect.height) / 2 + 'px';
                        card.classList.add('success');
                        card.style.pointerEvents = 'none';
                        isCorrect = true;
                    }
                }
            });

            if (!isCorrect) {
                // 不正解ならちょっと震わせる、などの処理をここに追加できる
            }

            document.onmouseup = null;
        };
    });

    card.ondragstart = () => false;
}