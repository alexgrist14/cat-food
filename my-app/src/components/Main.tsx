import CatPackage from "./CatPackage";
import React from "react";

const Main = () => {
    return (
        <>
            <h1 className="page__title">Ты сегодня покормил кота?</h1>
            <div className={"cats__container"}>
                <CatPackage taste={"c фуа-гра"}
                            portions={10}
                            mouse={"мышь в подарок"}
                            weight={"0,5"}
                            description={"Печень утки разварная с артишоками."}
                            isDisabled={false}></CatPackage>
                <CatPackage taste={"c рыбой"}
                            portions={40}
                            mouse={"2 мыши в подарок"}
                            weight={"2"}
                            description={"Головы щучьи с чесноком да свежайшая сёмгушка."}
                            isDisabled={false}></CatPackage>
                <CatPackage taste={"c курой"}
                            portions={100}
                            mouse={"5 мышей в подарок заказчик доволен"}
                            weight={"5"}
                            description={"Филе из цыплят с трюфелями в бульоне."}
                            isDisabled={true}></CatPackage>
            </div>
        </>
    )

}

export default Main;