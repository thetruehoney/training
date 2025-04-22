import { openDB } from "../utils/db";

export default class User {
    constructor(memberID, fullName, address, telNumber, creditCardNumber, budget) {
        this.memberID = memberID;
        this.fullName = fullName;
        this.address = address;
        this.telNumber = telNumber;
        this.creditCardNumber = creditCardNumber;
        this.budget = budget;
    }

    static fromDatabaseRow(row) {
        return new User(
            row.memberID,
            row.FullName,
            row.address,
            row.tel_number,
            row.credit_card_number,
            row.budget
        );
    }
}

export async function POST(req) {
    const {name, email, password} = await req.json();

    try {
        const db = openDB();
        const stmt = db.prepare(`
            INSERT INTO users (name, email, password)
            VALUES (?, ?, ?)
        `);
        const result = stmt.run(name, email, password);

        return NextResponse.json({ message: "User created successfully!", id: result.lastInsertRowid }, { status: 201 });
    } catch (error) {
        console.error("Error inserting user:", error);
        return NextResponse.json({ message: "Failed to create user" }, { status: 500 });
    }
}
