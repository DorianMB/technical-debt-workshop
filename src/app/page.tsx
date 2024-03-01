'use client';
import Image from "next/image";
import styles from "./page.module.css";

import {useEffect, useState} from "react";
import ListFood from "@/app/listfood";
import ListDrink from "@/app/listdrink";

export default function Home() {
    const [list, setList] = useState<{ type: string, name: string }[]>([]);

    //initialize list with shopping items
    useEffect(() => {
        setList([
            {type: "food", name: "apple"},
            {type: "food", name: "banana"},
            {type: "food", name: "carrot"},
            {type: "drink", name: "coffee"},
            {type: "drink", name: "tea"},
            {type: "drink", name: "milk"},
        ]);
    }, []);

    const add = ($event: any) => {
        $event.preventDefault();
        //get input value
        const input = document.querySelector("input")!;
        const value = input.value;
        //get select value
        const select = document.querySelector("select")!;
        const type = select.value;
        //add item to list
        setList([...list, {type: type, name: value}]);
    }
    return (
        <main className={styles.main}>
            <h1>Courses</h1>
            <div className={styles.container}>
                <form className={`${styles.leftContainer} ${styles.form}`}>
                    <input type="text" className={styles.input}/>
                    <select className={styles.select}>
                        <option value="food">Food</option>
                        <option value="drink">Drink</option>
                    </select>
                    <button className={styles.btn} onClick={add}>Add</button>
                </form>
                <div className={styles.rightContainer}>
                    <ListFood list={list}/>
                    <ListDrink listdrink={list}/>
                </div>
            </div>
        </main>
    );
}
