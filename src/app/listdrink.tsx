'use client';

import styles from "@/app/page.module.css";

export default function ListDrink(props: { listdrink: { type: string, name: string }[] }) {
    //get foodItems from props
    const _list = props.listdrink.filter((item) => item.type === "drink");

    if (_list && _list.length === 0) {
        return <div>No drink items</div>;
    } else {
        return (
            <div className={styles.container}>
                <div className={styles.cardDrink}>{_list[0].name}</div>
                <div className={styles.cardDrink}>{_list[1].name}</div>
                <div className={styles.cardDrink}>{_list[2].name}</div>
                {_list[3] ? <div className={styles.cardDrink}>{_list[3].name}</div> : null}
            </div>
        );
    }
}