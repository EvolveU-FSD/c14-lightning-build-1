import express from "express"

const app = express()

let PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.static('public'))

let chats = [
    {author: "Scott", message: "Do you want a logo?"},
    {author: "Tony", message: "Oh yeah!"},
    {author: "Mike", message: "Show me the logo!"},
    {author: "Scott", message: "I have a url: but I closed it."},
    {author: "Tony", message: "Cool!"},
]


app.get("/chat", (req, res) => {
    res.send(chats)
})

app.post("/chat", (req, res) => {
    chats.push(req.body)
    res.send(chats)
})

app.listen(PORT, () => {
    console.log("Server is started on port", PORT)
})
