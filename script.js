        // モーダルを開く
        function openModal() {
            const modal = document.getElementById('logModal');
            modal.classList.add('is-active');
        }

        // モーダルを閉じる
        function closeModal() {
            const modal = document.getElementById('logModal');
            modal.classList.remove('is-active');
        }

        // JavaScriptが読み込まれている場合の処理
        document.addEventListener('DOMContentLoaded', () => {
            const errorOverlay = document.getElementById('errorOverlay');
            const initialLog = document.getElementById('initialLog');

            // エラーオーバーレイを非表示
            if (errorOverlay) errorOverlay.style.display = 'none';

            // ログメッセージを成功メッセージに置き換え
            if (initialLog) {
                initialLog.classList.remove('error');
                initialLog.classList.add('success');
                initialLog.innerHTML = `
                    <i class="fa-solid fa-circle-check"></i>
                    <div>
                        <p>JavaScriptが正常に読み込まれました。</p>
                    </div>
                `;
            }
        });
