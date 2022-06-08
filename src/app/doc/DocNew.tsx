import { Steps } from 'primereact/steps';
import { useState, useRef } from "react";
import { Toast } from 'primereact/toast';
import React from 'react';
import DocNewFiles from './DocNewFiles'
import { DocNewGeneral } from './DocNewGeneral'


function DocNew() {
    const [activeIndex, setActiveIndex] = useState(0);
    const toast = useRef<Toast|null>(null);
    const items = [
        {label: 'Документ'},
        {label: 'Файлы'},
        {label: 'Поручения'},
        {label: 'Согласование'},
        {label: 'Публикация'}
    ];

    function trySetIndex(newIndex: number) {
        if (newIndex <= 2) setActiveIndex(newIndex)
        else toast.current?.show({severity:'info', summary:'Не заполнены предыдущие шаги', detail: 'Необходимо заполнить шаги Документ, Файлы и Поручения'});
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
export {DocNew}