
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
            message: `さくたんへ
            さくたん10002歳の誕生日おめでとう！！🎂🎊
            最近多忙であまり配信は追えてなかったけど、さくたんのツイートにはいつも目を通してたよ！
            やりたいことがどんどん実現できていてすっごく嬉しかったし楽しかった！！
            忙しい日々の中で普段楽しめてたことが楽しめなかったこともあったけど、
            隙間時間にさくたんの配信やショート動画、ツイートを見てたときにはたくさんの癒しや幸せをもらえて助かりました！
            今年はオリ曲が2つも出て、配信頻度も多くて、コラボも多かったからさくたんも充実した一年を送れてそうで良かった！！
            オリ曲どっちも毎日聴くくらい大好き！素敵なオリ曲を本当にありがとう！🎤✨来年も良い一年を過ごせますように！
            これからもずうーーーっと応援していくね！はねびとより`
        },

        "member-f": {
            name: "kazuitu",
            message: `こんさくな～🎀🐾さくたん誕生日おめでとう！！！今年で10003歳だね！
            いつも楽しめるコラボや配信等をたくさんありがとう！
            ゲームや歌枠、コラボなど楽しく視聴させてもらってるよ！
            さくたんの配信で仕事の疲れや嫌なことも全部吹き飛んでるよ！
            この一年振り返るとたくさんのイベントや企画、「Re,bloom*」「にゃんにゃんきゅるるん猫濃度」のフルMV公開など
            たくさんのことがあったね！アニメイトや推し旅、コラボイヤホン、サクモデウス等々...あったけど！
            個人的な一番の思い出は新衣装の制服！衣装もだけどいろんな衣装や表情、もぐもぐが見れて最高！
            さくたんの活動を応援してるし、最大限の推し活・恩返しできるように私でできる最大限の推し活をこれからもしていくよ！
            これからもさくなだ王国の国民として尽力します！いつも楽しい時間をありがとう！
            これからも応援してるよ！さくたん大好き！`

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
