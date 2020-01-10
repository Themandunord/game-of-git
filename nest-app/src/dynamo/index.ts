import { DynamoDB, config } from 'aws-sdk';
import { ConfigurationOptions, APIVersions } from 'aws-sdk/lib/config';
import { ConfigurationServicePlaceholders } from 'aws-sdk/lib/config_service_placeholders';

class DynamoUtil {
    private dynamoDb: DynamoDB;
    private documentClient: DynamoDB.DocumentClient;

    /**
     * Set Global AWS config parameters
     *
     * @param options
     */
    public setConfig(
        options: ConfigurationOptions &
            ConfigurationServicePlaceholders &
            APIVersions
    );
    public setConfig(
        options: ConfigurationOptions &
            ConfigurationServicePlaceholders &
            APIVersions & { [key: string]: any }
    ) {
        config.update(options);
    }

    public initializeConnection() {
        this.dynamoDb = new DynamoDB();
        this.documentClient = new DynamoDB.DocumentClient();
    }

    public async initializeTable(
        TableName: string,
        KeySchema: DynamoDB.KeySchema,
        AttributeDefinitions: DynamoDB.AttributeDefinitions,
        ProvisionedThroughput: DynamoDB.ProvisionedThroughput
    ) {
        const initialTables = await this.dynamoDb.listTables().promise();

        if (!initialTables.TableNames.find(x => x === TableName)) {
            console.log(`Creating ${TableName} table`);
            const createTableOutput = await this.dynamoDb
                .createTable({
                    TableName: TableName,
                    KeySchema,
                    AttributeDefinitions,
                    ProvisionedThroughput
                })
                .promise();
        } else {
            console.log(`${TableName} already existed`);
        }
    }

    public async deleteTable(TableName: string) {
        console.log(`Deleting Table: ${TableName}`);
        return await this.dynamoDb
            .deleteTable({
                TableName
            })
            .promise();
    }

    public async get(
        TableName: string,
        Key: DynamoDB.Key,
        AttributesToGet?: DynamoDB.DocumentClient.AttributeNameList
    ) {
        console.log(`Getting from table ${TableName} using key ${Key}`);
        const getParams: GetParams = {
            TableName,
            Key
        };

        if (AttributesToGet) {
            getParams.AttributesToGet = AttributesToGet;
        }
        return await this.documentClient.get(getParams);
    }

    public async put(
        TableName: string,
        storageKey: string,
        eventKey: string,
        dataObj: any
    ) {
        console.log(
            `Putting to table ${TableName} using storageKey ${storageKey} and eventKey ${eventKey} with `,
            dataObj
        );
        const putParams: PutParams = {
            TableName,
            Item: {
                [storageKey]: eventKey,
                data: JSON.stringify(dataObj)
            }
        };

        return await this.documentClient.put(putParams).promise();
    }
}

type GetParams = Partial<DynamoDB.DocumentClient.GetItemInput> & {
    TableName: string;
    Key: DynamoDB.Key;
};

type ItemType = {
    data: string;
    [key: string]: string;
};
type PutParams = Partial<DynamoDB.DocumentClient.PutItemInput> & {
    TableName: string;
    Item: ItemType;
};
