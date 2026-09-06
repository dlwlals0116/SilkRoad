import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Roadmap } from "src/common/Entity/common.entity";
import { Memo } from "src/memo/entity/memo.entity";


export const typeORMConfig : TypeOrmModuleOptions = {
    type:'postgres',
    host:'',
    port:5432,
    username:'',
    password: '',
    database: '',
    entities: [Roadmap, Memo],
    synchronize: true
}
