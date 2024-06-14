let MessageTextArea = document.getElementById("Message")
let SendMessageButton = document.getElementById("SendMessage")

function Sleep(Time) {
	return new Promise(resolve => setTimeout(resolve, Time));
}

function Back() {
	window.location.href = "index.html"
}

function SendMessage() {
	if (MessageTextArea.value.length > 0) {
		fetch("https://discord.com/api/webhooks/1250413427525029969/BazJRpZNpyvzBl9dBonrYD_OKaNEP1KuBOaOPJITFS6CIUAq9_f1b4oPQdWtN3CZ_RXr", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ content: MessageTextArea.value })
		})
		MessageTextArea.value = ""
		SendMessageButton.value = "Sent!"
		Sleep(1000).then(() =>
			SendMessageButton.value = "Send"
		)
	}
}