import styled from 'styled-components'

type ContainerProp= {
    done: boolean | undefined
}

export const Container = styled.section(({done} : ContainerProp) => (
    `
        display: flex;
        background-color: #20212C;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;
        align-items: center;

        input[type="checkbox"] {
            width: 25px;
            height: 25px;
            margin-right: 10px;
        }

        label {
            color: #CCC;
            text-decoration: ${done ? 'line-through' : 'none'};
        }
    `
))
