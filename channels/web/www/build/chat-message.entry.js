import { r as registerInstance, h } from './core-950489bb.js';

const Message = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.state = 'none';
        this.direction = 'outgoing';
        this.triangle = 'bottom';
    }
    render() {
        const alignment = this.direction === 'outgoing' ? 'right' : 'left';
        return (h("ion-item", { lines: "none", class: "item" }, h("div", { slot: alignment === 'left' ? 'start' : 'end', class: `bubble ${this.direction}` }, h("slot", null), h("div", { class: "footer" }, h("span", { class: "footer-text" }, this.footer), h("chat-message-status", { state: this.state })), h("div", { class: `triangle ${this.direction} ${this.triangle}-${alignment}` }))));
    }
    static get style() { return ":host {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n::slotted(p) {\n  margin: 0;\n}\n\n.item {\n  width: 100%;\n  padding: var(--message-padding-between);\n  --ion-background-color: transparent;\n}\n\n.footer {\n  position: absolute;\n  right: var(--message-padding-content);\n  bottom: 2px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: end;\n  align-items: flex-end;\n}\n\n.footer-text {\n  /* margin-bottom: 3px; */\n  color: lightslategray;\n  font-size: 12px;\n  padding-right: 2px;\n}\n\n.outgoing {\n  background-color: var(--message-outgoing-color);\n}\n\n.incoming {\n  background-color: var(--message-incoming-color);\n}\n\n.bubble {\n  margin: 2px 2px 2px 2px;\n  padding: var(--message-padding-content) var(--message-padding-content) 18px var(--message-padding-content);\n  min-width: 100px;\n  position: relative;\n  border-radius: var(--message-round-size);\n  -webkit-box-shadow: 0 0 1px 0 #666;\n  box-shadow: 0 0 1px 0 #666;\n}\n\n.align-left {\n  margin: 0 0 0 var(--message-padding-content);\n  float: left;\n}\n\n.align-right {\n  margin: 0 var(--message-padding-content) 0 0;\n  float: right;\n}\n\n.triangle {\n  content: \'\';\n	position: absolute;\n	width: 0;\n	height: 0;\n  border: var(--message-round-size) solid;\n  background-color: transparent;\n}\n\n.top-right {\n  top: 0;\n	right: var(--message-round-size-negative);\n}\n\n.bottom-right {\n  bottom: 0;\n	right: var(--message-round-size-negative);\n}\n\n.bottom-left {\n  bottom: 0;\n	left: var(--message-round-size-negative);\n}\n\n.top-left {\n  top: 0;\n  left: var(--message-round-size-negative);\n}\n\n.top-right.outgoing {  \n  border-color: var(--message-outgoing-color) transparent transparent transparent;\n}\n\n.bottom-right.outgoing {  \n  border-color: transparent transparent var(--message-outgoing-color) transparent;\n}\n\n.top-left.incoming {  \n  border-color: var(--message-incoming-color) transparent transparent transparent;\n}\n\n.bottom-left.incoming {  \n  border-color: transparent transparent var(--message-incoming-color) transparent;\n}"; }
};

export { Message as chat_message };