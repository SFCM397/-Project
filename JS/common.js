
// ==============================
// 郵便屋さん Webサイト
// 共通JavaScript
// ==============================

document.addEventListener("DOMContentLoaded", function () {

    console.log("郵便屋さんサイトを読み込みました！");


    // ==============================
    // メンバーのお手紙データ
    // ==============================

    const letters = {

        "member-a": {
            name: "ねるねこ",
            message: "こんさくな～"
        },

        "member-b": {
            name: "ラーメン大好きねここさん",
            message: "こんさくな～"
        },

        "member-c": {
            name: "ラムネ",
            message: "こんさくな～"
        },

        "member-d": {
            name: "ひかるん",
            message: "こんさくな～"
        },

        "member-e": {
            name: "はねびと",
            message: "こんさくな～"
        },

        "member-f": {
            name: "kazuitu",
            message: "ーーーーーーーー冒頭ーーーーーーーーーーー１０こんさくな～さくたん誕生日おめでとう！！！ーーーーーーーーーーー感謝ーーーーーーーーー３０いつもありがとう！！！ーーーーーーー思い出ーーーーーーーーー４０にゃんにゃんきゅるるん猫濃度のフルMV公開があったね！ーーーーーーーー応援ーーーーーーーー２０これからもさくなだ王国の国民として尽力します！"
        }

    };


    // ==============================
    // お手紙を開く処理
    // ==============================

    const envelopeList = document.getElementById("envelope-list");

    const letterView = document.getElementById("letter-view");

    const letterName = document.getElementById("letter-name");

    const letterContent = document.getElementById("letter-content");

    const closeButton = document.getElementById("letter-close");


    if (envelopeList && letterView) {

        // 封筒をクリック
        envelopeList.addEventListener("click", function (event) {

            const envelope = event.target.closest(".envelope-card");

            if (!envelope) return;

            const memberId = envelope.dataset.member;

            const letter = letters[memberId];

            if (!letter) return;

            // 手紙の内容を表示
            letterName.textContent = letter.name;

            letterContent.textContent = letter.message;

            // 一覧を隠して手紙を表示
            envelopeList.hidden = true;

            letterView.hidden = false;

            

        });


        // 一覧に戻る
        closeButton.addEventListener("click", function () {

            letterView.hidden = true;

            envelopeList.hidden = false;

            envelopeList.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    }

});
