import * as fs from 'fs';

class TestingUtilities {
    /**
     * Load a JSON file
     *
     * @param jsonPath
     */
    public async loadJson(jsonPath) {
        const sampleJsonString = (await new Promise((resolve, reject) => {
            fs.readFile(jsonPath, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        })).toString();

        return JSON.parse(sampleJsonString);
    }
}

const t = new TestingUtilities();

export default t;
