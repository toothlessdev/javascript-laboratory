type HTMLElementNode = {
    tag: string;
    children: HTMLNode[];
};

type TextNode = {
    text: string;
};

type HTMLNode = HTMLElementNode | TextNode;

class HTMLParser {
    index: number;
    html: string;

    constructor() {
        this.index = 0;
        this.html = "";
    }

    parseHTML(html: string): HTMLElementNode {
        this.html = html;
        this.index = 0;
        const root: HTMLElementNode = { tag: "root", children: [] };
        while (this.index < this.html.length) {
            const node = this.parseNode();
            if (node) {
                root.children.push(node);
            }
        }
        return root;
    }

    parseNode(): HTMLNode | null {
        if (this.html[this.index] === "<") {
            if (this.html[this.index + 1] === "/") {
                this.parseUntil(">");
                this.index++;
                return null;
            }
            return this.parseElement();
        } else {
            return this.parseText();
        }
    }

    parseElement(): HTMLElementNode {
        this.parse("<");
        const tagName = this.parseUntil(">");
        this.parse(">");
        const element: HTMLElementNode = { tag: tagName.trim(), children: [] };

        let child;
        while (this.index < this.html.length) {
            child = this.parseNode();
            if (child) {
                element.children.push(child);
            } else {
                break;
            }
        }

        return element;
    }

    parseText(): TextNode {
        const text = this.parseUntil("<");
        return { text: text.trim() };
    }

    parse(char: string): void {
        if (this.html[this.index] === char) {
            this.index++;
        }
    }

    parseUntil(char: string): string {
        const start = this.index;
        while (this.index < this.html.length && this.html[this.index] !== char) {
            this.index++;
        }
        return this.html.substring(start, this.index);
    }
}

// 사용 예제
const parser = new HTMLParser();
const html = "<div><p>Hello, World!</p><p>This is a simple parser.</p></div>";
const parsed = parser.parseHTML(html);
console.log(JSON.stringify(parsed));
