'use client';

import styles from "@/app/page.module.css";

export default function ListFood(props: { list: { type: string, name: string }[] }) {
    //get foodItems from props
    const list = props.list.filter((item) => item.type === "food");

    if (list && list.length === 0) {
        return <div>No food items</div>;
    } else {
        return (
            <div className={styles.container}>
                <div className={styles.cardFood}>{list[0].name}</div>
                <div className={styles.cardFood}>{list[1].name}</div>
                <div className={styles.cardFood}>{list[2].name}</div>
                {list[3] ? <div className={styles.cardFood}>{list[3].name}</div> : null}
            </div>
        );
    }
}