import { keyframes } from 'styled-components'

// const slideIntoFirstWindow = keyframes``

// const slideToSecondWindow = keyframes``

// const slideOnBelt = keyframes``

const dropToBelt = keyframes`
    from {
        bottom: 350px;
    }
    to {
        bottom: 0px;
    }
`

const ITEM_ANIMATIONS = {
    dropToBelt: dropToBelt,
}

export default ITEM_ANIMATIONS
