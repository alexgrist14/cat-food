import {ChangeEvent, useEffect, useState} from "react";
import catImage from "../assets/cat.png"

interface CatPackageProps {
    taste: string,
    portions: number,
    mouse: string,
    weight: string,
    description: string,
    isDisabled: boolean,
}

function CatPackage(props: CatPackageProps) {
    const [isSelected, setIsSelected] = useState(false);
    const [packTitle, setPackTitle] = useState("Нямушка");
    const [packTaste, setPackTaste] = useState(props.taste);
    const [isShownTitle, setIsShownTitle] = useState(false);
    const selectPackage = () => setIsSelected(!isSelected);

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setPackTitle(e.target.value);
    };
    const changeTaste = (e: ChangeEvent<HTMLInputElement>) => {
        setPackTaste(e.target.value);
    };
    return (
        <>
            <div className="card__page__container">
                <div
                    className={`page__card card ${props.isDisabled ? "is-disabled" : ""}  ${isSelected ? 'is-selected' : ''}`}
                    onClick={selectPackage}
                    onMouseEnter={() => setIsShownTitle(true)}
                    onMouseLeave={() => setIsShownTitle(false)}>
                    <div className={`card__body ${isSelected ? '' : 'available'} `}>
                        <header className="card__header">
                            <div className="card__corner"></div>
                            <div className="card__rectangle"><span
                                className="card__desc">{isSelected && isShownTitle ? (
                                <div className="selected__package__title">Котэ не
                                    одобряет?</div>) : "Сказочное заморское яство"}</span>
                            </div>
                        </header>
                        <div className="card__main"><h2 className="card__heading">
                            <input className="card__heading" value={packTitle} onChange={changeTitle}/>
                            <span className="card__feature"> <input className="card__feature" value={packTaste}
                                                                    onChange={changeTaste}/></span>
                        </h2>
                            <ul className="card__list">
                                <li className="card__list-item">{props.portions} порций</li>
                                <li className="card__list-item">{props.mouse}</li>
                            </ul>
                            <img className="card__img" src={catImage} alt="cat"/>
                            <div className="card__circle">
                                <div className="card__weight"><span className="card__amount">{props.weight} </span>
                                    <div className="card__measure">кг</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="card__footer">
                    {props.isDisabled ? "Печалька, с курой закончился." : isSelected ? props.description : (
                        <span>
                          Чего сидишь? Порадуй котэ,
                          <span className="card__buy">
                              <a className="card__link" onClick={selectPackage}> купи</a>.
                          </span>
                      </span>
                    )
                    }
                </footer>
            </div>
        </>
    )
}

export default CatPackage;