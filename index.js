
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

function messageChanged() {
    const input = document.getElementById("messageInput")
    const message = input.value

    addChat("Tony", message, true)

    input.value = ""
}

addChat("Scott", "Do you want a logo?")
addChat("Tony", "Oh yeah!", true)
addChat("Mike", "Show me the logo!")
addChat("Scott", "I have a url: but I closed it.")
addChat("Tony", "Cool!", true)
