import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0px;

    .image {
        margin-right: 5px;
    }

    input[type="text"] {
        border: 0;
        outline: 0;
        background: transparent;
        color: #FFF;
        font-size: 18px;
        width: 100%;
        flex: 1;
    }
`