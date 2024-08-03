const {default: axios} = require("axios")

const url = "API BOT TELEGRAM"
//const url = "https://api.telegram.org/bot7023329716:AAGKacypeEJDtmXP1a3-fMWvljHUrrt1DNU/sendMessage?parse_mode=markdown&chat_id=6410439582&text=cari+duit+yang+bener+bang"
//API bot tele didapatkan dari hasil decompiling classes3.dex, SendSMS.java line 52


async function sendMessage() {
    try {
        while (true) {
           await axios.get(url)
                .then((response) => {
                    if (response.status == 200) {
                        console.log(response)
                    }
                })

        }
    } catch (error) {
        console.log("suksesss dikirimmm")
        sendMessage();
    }
}

sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();