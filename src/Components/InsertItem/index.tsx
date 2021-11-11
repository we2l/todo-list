import React, {useState} from 'react'

import {Container} from './styles'

import {HandlePressEnterProps, Item} from '../../Types/Item'

type InsertItemProps = {
    handlePressEnter(inputText : HandlePressEnterProps) : void,
    list: Item[]
}

export const InsertItem = ({handlePressEnter, list} : InsertItemProps) => {
    const [inputText, setInputText] = useState<string>('')

    const handleChangeInputText = (e:React.FormEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value)
    }

    const handleKeyUpInputText = (e: React.KeyboardEvent) => {
        if(e.code == 'Enter' && inputText != '') {
            const item = {
                id: list.length + 1,
                name: inputText,
                done: false
            }
            handlePressEnter(item)
            setInputText('')
        }
    }

    return(
        <Container>
            <div className="image">➕</div>
            <input 
                type="text"
                placeholder="Adicione uma tarefa" 
                value={inputText}
                onChange={handleChangeInputText}
                onKeyUp={handleKeyUpInputText}
            />
        </Container>
    )
}