import { useState, useRef } from "react";
import { Toast } from 'primereact/toast';
import React, { Fragment } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


function DocNewGeneral() {
    const toast = useRef(null);
    const [ name, setName ] = useState('');
    const [ serial, setSerial ] = useState('');
    const [ executor, setExecutor ] = useState('');
    const [ comment, setComment ] = useState('');
    const [ pagesCount, setPagesCount ] = useState('');
    const [ author, setAuthor ] = useState('');

    return (
            <div className="card flex flex-column m-3">
                <span className="p-float-label m-3">
                    <InputText id="docname" className='w-full' value={name} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="docname">Название документа</label>
                </span>

                <span className="p-float-label m-3">
                    <InputText id="serial" className='w-full' value={serial} onChange={(e) => setSerial(e.target.value)} />
                    <label htmlFor="serial">Номер документа</label>
                </span>
                <span className="p-float-label m-3">
                    <InputText id="executor" className='w-full' value={executor} onChange={(e) => setExecutor(e.target.value)} />
                    <label htmlFor="executor">Исполнитель</label>
                </span>
                <span className="p-float-label m-3">
                    <InputText id="author" className='w-full' value={author} onChange={(e) => setAuthor(e.target.value)} />
                    <label htmlFor="author">Автор</label>
                </span>
                <span className="p-float-label m-3">
                    <InputText id="pagesCount" className='w-full' value={pagesCount} onChange={(e) => setPagesCount(e.target.value)} />
                    <label htmlFor="pagesCount">Количество страниц</label>
                </span>
                <span className="p-float-label m-3">
                    <InputText id="comment" className='w-full' value={comment} onChange={(e) => setComment(e.target.value)} />
                    <label htmlFor="comment">Комментарий</label>
                </span>
                <Button label="Создать документ" className='w-15rem align-self-center' icon="pi pi-check" />
                {/* <Controller name="name" control={control} rules={{ required: 'Необходимо ввести название документа.' }} render={({ field, fieldState }) => ( */}

                {/* )} /> */}
            </div>
    );
  }
export {DocNewGeneral}