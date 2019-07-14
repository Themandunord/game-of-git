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

    private checkAndPrefix(statePrefix: string | null = null, content: any[]) {

        // console.log('checking and prefixing content', content)

        if (!this.enabled) {
            throw new Error('Disabled Logger');
        }

        if (content.length === 1 && typeof content[0] === 'string') {
            // console.log('just a string in array length of 1: ', content);
            const prefixedContent = content;
            prefixedContent[0] = `${this.prefix}: ${content}`;
            return prefixedContent;
        }
        
        if (typeof content[0] === 'string' && this.prefix != null) {
            const prefixedContent = content;

            prefixedContent[0] = `${this.prefix} ${statePrefix ? ` ${statePrefix}` : ''}: ${content[0]}`;
            return prefixedContent
        }

        // console.log('just returning content');

        return content;
    }

    /**
     * Shorthand for console.log
     * @param content 
     */
    public l(...content: any[]) {
        try {
            let prefixedContent = this.checkAndPrefix('', content);
            if (prefixedContent.length === 1 && content.length === 1) {
                prefixedContent = prefixedContent[0];
            }

            console.log(...prefixedContent);
        } catch (e) {
            // logger was disabled (most likely)
        }
    }


    /**
     * Shorthand for console.error
     * @param content
     */
    public e(...content: any[]) {
        try {
            let prefixedContent = this.checkAndPrefix('Error', content);
            if (prefixedContent.length === 1 && content.length === 1) {
                prefixedContent = prefixedContent[0];
            }
            console.error(prefixedContent);
        } catch (e) {
            // logger was disabled
        }
    }
}
