import { useState } from 'react';

const UseInput = (initialState) => {
    const [value, setValue] = useState(initialState);

    const resetState = () => {
        setValue(initialState)       
    }

    const data = {
        value,
        onChange: (e) => setValue(e.target.value)
    }

    return [value, data, resetState];
}

export default UseInput;