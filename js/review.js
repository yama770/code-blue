// 卒業生の詳細データ
const reviewData = {
    1: {
        image: './img/review_1.webp',
        age: '30代前半',
        date: '2023年5月入会',
        title: '1対1指導と同行支援で案件運用を習得しました',
        text: `
            <p>未経験からのスタートで、最初は何から始めればいいのか全く分かりませんでした。ProNaviでは、現役エンジニアの講師が私のペースに合わせて丁寧に指導してくれたので、基礎から着実にスキルを身につけることができました。</p>
            <p>特に印象的だったのは、案件獲得の際の同行支援です。提案書の書き方から、クライアントとのコミュニケーション方法まで、実際の現場で必要なスキルを学べました。今では安定して案件を受注できるようになり、在宅での仕事を実現できています。</p>
            <p>ProNaviに入会して本当に良かったです。学習だけでなく、実際に稼ぐところまでサポートしていただけたことに感謝しています。</p>
        `,
        name: 'M.M'
    },
    2: {
        image: './img/review_2.webp',
        age: '20代前半',
        date: '2023年8月入会',
        title: '仲間に支えられ成長、新しい職種と価値観に出会えた',
        text: `
            <p>最初は一人で学習していましたが、分からないことが多くて挫折しそうになっていました。ProNaviのコミュニティに参加してからは、同じ目標を持つ仲間と励まし合いながら学習を続けることができました。</p>
            <p>先輩受講生の方々が親身になってアドバイスをくれたり、分からないところを教えてくれたりと、本当に温かいコミュニティでした。オフライン交流会でも多くの方と出会い、モチベーションを保つことができました。</p>
            <p>プログラミングを通じて、新しい職種と価値観に出会えたことは私の人生の大きな転機になりました。ProNaviでの経験は、技術以上のものを得られた貴重な時間でした。</p>
        `,
        name: 'M.H'
    },
    3: {
        image: './img/review_3.webp',
        age: '20代後半',
        date: '2022年6月入会',
        title: 'マンツーマン指導と課題で実力が伸びたと実感しています',
        text: `
            <p>独学で勉強していた時は、自分が正しい方向に進んでいるのか不安でした。ProNaviのマンツーマン指導では、私の理解度に合わせて進めてくれるので、確実にスキルアップできました。</p>
            <p>特に実案件を想定した課題が豊富で、実際の仕事で必要となる技術を体系的に学ぶことができました。講師の方が現役エンジニアなので、現場で使える実践的なテクニックも教えていただけたのが良かったです。</p>
            <p>卒業後も案件対応で困ったときに相談できる環境があり、安心して仕事に取り組めています。今では複数のクライアントと継続的に取引ができるまでになりました。</p>
        `,
        name: 'N.Y'
    }
};

// モーダル開閉の処理
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('reviewModal');
    const modalOverlay = document.querySelector('.modal__overlay');
    const modalClose = document.querySelector('.modal__close');
    const reviewItems = document.querySelectorAll('.review-page__item');

    // アイテムクリックでモーダルを開く
    reviewItems.forEach(item => {
        item.addEventListener('click', () => {
            const reviewId = item.getAttribute('data-review');
            const data = reviewData[reviewId];

            if (data) {
                // モーダルにデータを挿入
                document.getElementById('modalImage').src = data.image;
                document.getElementById('modalAge').textContent = data.age;
                document.getElementById('modalDate').textContent = data.date;
                document.getElementById('modalTitle').textContent = data.title;
                document.getElementById('modalText').innerHTML = data.text;
                document.getElementById('modalName').textContent = data.name;

                // モーダルを表示
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // モーダルを閉じる
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // ESCキーでモーダルを閉じる
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
