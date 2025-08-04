import { registerToDB } from "../src/database";


const dbClient = {
    name: "clickhouse"
}

describe('String Calculator Parser Utility methods', () => {
       it('return sent to database on wrong input', () => {
        expect(registerToDB('a,3' , dbClient)).toBe("Sent to database a,3");
    });
    it('throws error when databse connection is not possible', () => {
        expect(() => registerToDB('a,3')).toThrow('Cannot connect to database');
    });
});
