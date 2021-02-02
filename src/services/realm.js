import Realm from 'realm';

import JikanRepository from '../schemas/JikanRepository';

export default function getRealm() {
    return Realm.open({
        schema: [JikanRepository],
    });
}