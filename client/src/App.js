
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCustomValue1, setCustomValue2 } from './customSlice'

function App() {

    const dispatch = useDispatch()
    const storeValue1 = useSelector((state) => state.reducer.value1)
    const storeValue2 = useSelector((state) => state.reducer.value2)

    const [formValue1, setFormValue1] = useState('');
    const [formValue2, setFormValue2] = useState('');

    return (
        <div>
            <h2>Store Value 1: {storeValue1}</h2>
            <h2>Store Value 2: {storeValue2}</h2>           
            <div>
                <input type="text" value={formValue1} onChange={(event) => setFormValue1(event.target.value)} />
                <button onClick={() => dispatch(setCustomValue1(formValue1))}>Set Store Value 1</button>
            </div>
            <div>
                <input type="text" value={formValue2} onChange={(event) => setFormValue2(event.target.value)} />
                <button onClick={() => dispatch(setCustomValue2(formValue2))}>Set Store Value 2</button>
            </div>
        </div>
    );
}

export default App;
