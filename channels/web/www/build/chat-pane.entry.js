import { r as registerInstance, f as createEvent, h, e as getElement } from './core-950489bb.js';

function createElementsFromText(text) {
    return text.split('\n').map(line => {
        if (line === '') {
            return document.createElement('br');
        }
        const pElement = document.createElement('p');
        pElement.appendChild(document.createTextNode(line));
        return pElement;
    });
}
const Pane = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.mapInputTextToHtmlElements = createElementsFromText;
        this.triangle = 'bottom';
        this.incoming = createEvent(this, "incoming", 7);
    }
    addMessage(direction, text) {
        const message = document.createElement('chat-message');
        message.state = direction === 'outgoing' ? 'pending' : 'none';
        message.direction = direction;
        message.triangle = this.triangle;
        message.footer = new Date().toLocaleString('en-US', {
            hour: 'numeric', minute: 'numeric', hour12: true
        });
        this.mapInputTextToHtmlElements(text)
            .map(element => message.appendChild(element));
        this.pane.appendChild(message);
        this.conversation.scrollToBottom();
        return message;
    }
    async addOutgoingMessage(text) {
        return this.addMessage('outgoing', text);
    }
    async addIncomingMessage(text) {
        return this.addMessage('incoming', text);
    }
    async addCard({ text, image }) {
        const card = document.createElement('ion-card');
        card.setAttribute('style', 'background: white;');
        if (image) {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            card.appendChild(imgElement);
        }
        if (text) {
            const contentElement = document.createElement('ion-card-content');
            this.mapInputTextToHtmlElements(text)
                .map(element => contentElement.appendChild(element));
            card.appendChild(contentElement);
        }
        this.pane.appendChild(card);
        this.conversation.scrollToBottom();
        return card;
    }
    render() {
        return [
            h("ion-header", { class: "header" }, h("slot", { name: "header" })),
            h("chat-conversation", { ref: element => this.conversation = element }, h("slot", null)),
            h("ion-footer", { class: "footer" }, h("chat-input", { onSend: event => this.addOutgoingMessage(event.detail.value)
                    .then(message => this.incoming.emit({
                    element: message,
                    text: event.detail.value
                })) }))
        ];
    }
    get pane() { return getElement(this); }
    static get style() { return ".header {\n  height: 56px;\n}\n.footer {\n  height: 56px;\n}"; }
};

export { Pane as chat_pane };