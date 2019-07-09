var express = require('express');
var router = express.Router();
var FCM = require('fcm-node')
var fcm = new FCM("AAAAQGZE9g4:APA91bHN9roJWD7DFiMzwc2t6xj7Yxh13lvnHjBAWHdhiuLUn40vFf3WUs6QHWGvcGZk_47wyT1ACeyuPocmBp6jsXDMWnsSyfNnj9ApGyavL8lsnm9iBzGkydLNTdIud3pdyUOsnucT")

/* GET home page. */
router.post('/push', (req,res) => {
    var client_token = req.body.token
    const result = {}
        /** 발송할 Push 메시지 내용 */
        const push_data = {
            to: client_token,
            notification: {
                title: "기가지니로 부터 알림이 도착하였습니다.",
                body: "김약자 님이 비상상황입니다. 신속한 조치가 필요합니다.",
                sound: "default",
                click_action: "FCM_PLUGIN_ACTIVITY",
                icon: "fcm_push_icon"
            }
        }

        fcm.send(push_data, function (err, response) {
            if (err) {
                console.error(err)
                result.message = '메세지 발송에 실패했습니다.'
                return res.json(result)
            }

            console.log(response.results)
            result.message = "Push메세지가 발송되었습니다."
            return res.json(result)
        })
});

module.exports = router;
