import Realm from 'realm';
import { Schema,SchemaVersion } from '../../src/model';

export default realm = new Realm({

    path: 'todo.realm',
    schema: Schema,
    schemaVersion: SchemaVersion,
    deleteRealmIfMigrationNeeded:true
})

                            