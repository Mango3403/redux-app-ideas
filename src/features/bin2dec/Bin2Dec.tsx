import { Input, Button } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { convertBinaryToDecimal } from './bin2decSlice';

export const Bin2Dec = () => {
  const [binaryText, setBinaryText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const decimalText = useSelector((state: any) => state.bin2dec.decimalText);
  const dispatch = useDispatch();

  const onChange = (e: any) => setBinaryText(e.target.value);

  const onClick = () => {
    // Make sure we accept only either 0 or 1
    if (binaryText.match(/^[0-1]+$/g) === null) {
      setErrorMessage('Enter either 0 or 1')
      return
    }

    if (binaryText.length > 8) {
      setErrorMessage('Enter a binary number less than 8 bits');
      return
    }

    setErrorMessage('');

    dispatch(convertBinaryToDecimal(binaryText));
  }

  return (
    <div>
      <p>Binary to Decimal</p>
      <div>
        <Input placeholder="Binary Input" onChange={onChange} value={binaryText} />
        {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
      </div>
      <Button onClick={onClick}>Convert</Button>
      <div>
        <Input placeholder="Decimal Output" value={decimalText} />
      </div>
    </div>
  )
}