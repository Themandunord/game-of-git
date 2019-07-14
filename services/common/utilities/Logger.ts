export class Logger {

    constructor(private prefix?: string, private enabled: boolean = true) {
    }

    public setPrefix(prefix: string) {
        this.prefix = prefix;
    }

    public enable() {
        this.enabled = true;
    }

    public disable() {
        this.enabled = false;
    }

    private checkAndPrefix(statePrefix: string | null = null, ...content: any[]) {
        if (!this.enabled) {
            return;
        }

        if (typeof content === 'string') {
            console.log('content IS a string: ' + content);
            return `${this.prefix} ${statePrefix ? ` ${statePrefix}` : ''}: ${content}`;
        }

        if (content.length === 1 && typeof content[0] === 'string') {
            console.log('just a string in array length of 1: ', content);
            const prefixedContent = content;
            prefixedContent[0] = `${this.prefix}: ${content}`;
            return prefixedContent;
        }
        
        if (typeof content[0] === 'string' && this.prefix != null) {
            const prefixedContent = content;

            prefixedContent[0] = `${this.prefix} ${statePrefix ? ` ${statePrefix}` : ''}: ${content[0]}`;
            return prefixedContent
        }

        return content;
    }

    /**
     * Shorthand for console.log
     * @param content 
     */
    public l(...content: any[]) {
        const prefixedContent = this.checkAndPrefix('', content);
        console.log(prefixedContent);
    }

    /**
     * Shorthand for console.error
     * @param content
     */
    public e(...content: any[]) {
        const prefixedContent = this.checkAndPrefix('Error', content);
        if (content.length === 1) {
            console.error(content[0]);
        } else {
            console.error(content);
        }
    }
}


const l = new Logger('Some Prefix', true);

l.l('Just a string');
l.l({taaaa: 'object man', as: 123});
l.l(234);
l.l(`Interpolated ${5 + 2}`)
// l.e(`Interpolated ${5 + 2}`)
