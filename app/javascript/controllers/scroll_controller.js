import { Controller } from "@hotwired/stimulus"


export default class extends Controller{

    connect(){
        console.log("connected")
        const messages = document.getElementById("messages");
        messages.addEventListener("DOMNodeInserted", this.Scroll);
        this.Scroll(messages)
    }

    disconnect(){
        console.log("disconnected")
    }

    Scroll(){
        messages.scrollTop = messages.scrollHeight - messages.clientHeight;
    }
}
