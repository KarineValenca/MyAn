export default class RepositorySchema {
    static schema = {
        name: 'JikanRepository',
        primaryKey: 'mal_id',
        properties: {
            mal_id: { type: 'int', indexed: true },
            title: 'string',
            image_url: 'string',
            synopsis: 'string',
            url: 'int',
        },
    };
}