"use client";
import { FC } from "react";

const staticNum: number = 5;

type Gender = "Male" | "Female" | "LGBQ";

interface Props {
    initVal: number;
    gender: Gender;
}

interface Person {
    FirstName?: string;
    LastName: string;
    age?: number;
    single: boolean;
}

const person: Person = {
    FirstName: "Tar",
    LastName: "Exdee",
    age: 21,
    single: false,
};

const Basic: FC<Props> = ({ initVal, gender }) => {
    const verifyGender = (gd:Gender) => {
        if(gender === "Female")
            console.log(gd);
        else console.log("Not Female");
    };


    return (
        <>
            <p>Basic</p>
            <div>{staticNum}</div>
            <div>{person.FirstName}</div>
            <div>{initVal}</div>
            <div>{gender}</div>
            <button>Increase</button>
            <button onClick={() => verifyGender(gender)}>Gender</button>
        </>
    );
};

Basic.defaultProps = {
    initVal: 0,
    gender: "Female",
};

export default Basic;
