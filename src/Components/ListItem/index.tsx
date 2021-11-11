import {useState} from 'react'

import {Container} from './styles'
import {Item} from '../../Types/Item'

type ListItemProps = {
    item: Item,
    handleInputChecked(newItem: Item) : void
}

export const ListItem = ({item, handleInputChecked} : ListItemProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(item.done)

    const setNewItemIsChecked = () => {
        let newItem = {
            id: item.id,
            name: item.name,
            done: isChecked
        }

        handleInputChecked(newItem)
    }

    const handleInputChange = (e:React.FormEvent<HTMLInputElement>) => {
        setIsChecked(e.currentTarget.checked)
        setNewItemIsChecked()
    }

    return(
        <Container done={isChecked}>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={handleInputChange}
            />
            <label>{item.name}</label>
        </Container>
    )
}