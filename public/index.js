let me = "Anonymous"

function addChat(authorName, message, localAuthor = false) {
    const main = document.getElementsByTagName('main')[0]
    const newChat = document.createElement('div')
    newChat.classList.add((localAuthor) ? "my-chat" : "other-chat")

    const author = document.createElement('div')
    author.classList.add("author")
    author.append(authorName)

    const messageBody = document.createElement('div')
    messageBody.classList.add("message-body")
    messageBody.append(message)

    newChat.append(author)
    newChat.append(messageBody)

    main.append(newChat)

    main.scrollTop = main.scrollHeight
}

function clearMain() {
    const main = document.getElementsByTagName('main')[0]
    main.innerHTML = ""
}

function messageChanged() {
    const input = document.getElementById("messageInput")
    const message = input.value

    postNewChat(me, message)
    input.value = ""
}

async function postNewChat(me, message) {
    const response = await fetch("/chat", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ author: me, message })
    })
    if (response.ok) {
        synchronizeChats()
    }
}

async function synchronizeChats() {
    const response = await fetch("/chat")
    if (response.ok) {
        let allChats = await response.json()
        clearMain()
        allChats.forEach(chat => {
            addChat(chat.author, chat.message, chat.author === me)
        })
    }
}

me = prompt("What is your chat name?", "")
while ((me === null) || (me === '')) {
    me = prompt("No seriously, what is your name?", "")
}

setInterval(synchronizeChats, 5000)

