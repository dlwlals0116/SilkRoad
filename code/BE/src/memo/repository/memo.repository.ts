import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Memo } from "../entity/memo.entity";


@Injectable()
export class MemoRepository extends Repository<Memo> {
    constructor(dataSource: DataSource) {
        super(Memo, dataSource.createEntityManager());
    }

    async findMemo(subject: string, topic: string, concept: string, googleId: string): Promise<Memo | undefined> {
        return await this.findOne({ where: { subject, topic, concept, googleId } });
    }

    async saveMemo(subject: string, topic: string, concept: string, memo: string, googleId: string): Promise<Memo> {
        const existingMemo = await this.findOne({ where: { subject, topic, concept, googleId } });

        if (existingMemo) {
            existingMemo.memo = memo;
            return await this.save(existingMemo);
        } else {
            const newMemo = this.create({ subject, topic, concept, memo, googleId });
            return await this.save(newMemo);
        }
    }
}
