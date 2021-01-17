import { jikanRepository } from '../services/consts';

export default class RepositorySchema {
    static schema = {
        name: jikanRepository,
        properties: {
            mal_id: { type: 'int', indexed: true },
            title: 'string',
            image_url: 'string',
            synopsis: 'string',
            episodes: { type: 'int', default: 0 }
        },
    };
}