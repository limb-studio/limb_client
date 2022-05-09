import { Steps } from 'primereact/steps';
import { useState, useRef } from "react";
import { Toast } from 'primereact/toast';
import React, { Fragment } from 'react';
import DocNewFiles from './DocNewFiles'

function DocNewGeneral() {
    return (
        <Fragment>      
        <div>document</div>
        </Fragment>  );
}

function DocNew() {
    const [activeIndex, setActiveIndex] = useState(0);
    const toast = useRef(null);
    const items = [
        {label: 'Документ'},
        {label: 'Файлы'},
        {label: 'Поручения'},
        {label: 'Согласование'},
        {label: 'Публикация'}
    ];

    function trySetIndex(newIndex) {
        if (newIndex <= 2) setActiveIndex(newIndex)
        else toast.current.show({severity:'info', summary:'Не заполнены предыдущие шаги', detail: 'Необходимо заполнить шаги Документ, Файлы и Поручения'});
    }

    let currentComponent;
    if (activeIndex===0) currentComponent = <DocNewGeneral></DocNewGeneral>;
    else if (activeIndex===1) currentComponent = <DocNewFiles></DocNewFiles>;
    else currentComponent = <div>state123</div>

    return (
        <div><Toast ref={toast} /><Steps model={items} readOnly={false} onSelect={(e) => trySetIndex(e.index)} activeIndex={activeIndex}/>
        {currentComponent}
        </div>
    )
}
export default DocNew;